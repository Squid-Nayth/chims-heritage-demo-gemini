import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import * as THREE from 'THREE';

interface HeroProps {
  isDarkMode: boolean;
  setView: (view: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, setView }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Store refs for cleanup and animation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const segmentsRef = useRef<THREE.Group[]>([]);


  // --- CONFIGURATION ---
  // Tuned to match the reference design's density and scale
  const TUNNEL_WIDTH = 24;
  const TUNNEL_HEIGHT = 16;
  const SEGMENT_DEPTH = 6; // Short depth for "square-ish" floor tiles
  const NUM_SEGMENTS = 14;
  const FOG_DENSITY = 0.02;

  // Grid Divisions
  const FLOOR_COLS = 6; // Number of columns on floor/ceiling
  const WALL_ROWS = 4;  // Number of rows on walls

  // Derived dimensions
  const COL_WIDTH = TUNNEL_WIDTH / FLOOR_COLS;
  const ROW_HEIGHT = TUNNEL_HEIGHT / WALL_ROWS;

  // Local images from the Assets folder
  const imageUrls = [
    "/Assets/1-paysage.jpg",
    "/Assets/1er-M.jpg",
    "/Assets/CIMG7250.jpg",
    "/Assets/Fam-Presi.jpg",
    "/Assets/Famille.jpg",
    "/Assets/cimg7254.jpg",
    "/Assets/cimg7257.jpg",
    "/Assets/cimg7263.jpg",
    "/Assets/Chims-lartiste.jpeg",
  ];

  // --- INITIAL SETUP ---
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // THREE JS SETUP
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Preload Textures IMMEDIATELY
    const textureLoader = new THREE.TextureLoader();
    const loadedTextures = imageUrls.map(url => {
      const tex = textureLoader.load(url);
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      return tex;
    });

    // Shared Geometries
    const cellMargin = 0.4;
    const floorGeo = new THREE.PlaneGeometry(COL_WIDTH - cellMargin, SEGMENT_DEPTH - cellMargin);
    const wallGeo = new THREE.PlaneGeometry(SEGMENT_DEPTH - cellMargin, ROW_HEIGHT - cellMargin);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    rendererRef.current = renderer;

    // Helper to populate images using preloaded textures
    const populateImagesFast = (group: THREE.Group, w: number, h: number, d: number) => {
      const addImg = (pos: THREE.Vector3, rot: THREE.Euler, isWall: boolean) => {
        const tex = loadedTextures[Math.floor(Math.random() * loadedTextures.length)];
        const mat = new THREE.MeshBasicMaterial({
          map: tex,
          transparent: true,
          opacity: 0.85,
          side: THREE.DoubleSide
        });

        const m = new THREE.Mesh(isWall ? wallGeo : floorGeo, mat);
        m.position.copy(pos);
        m.rotation.copy(rot);
        m.name = "slab_image";
        group.add(m);
      };

      // Floor
      let lastFloorIdx = -999;
      for (let i = 0; i < FLOOR_COLS; i++) {
        if (i > lastFloorIdx + 1) {
          if (Math.random() > 0.80) {
            addImg(new THREE.Vector3(-w + i * COL_WIDTH + COL_WIDTH / 2, -h, -d / 2), new THREE.Euler(-Math.PI / 2, 0, 0), false);
            lastFloorIdx = i;
          }
        }
      }

      // Ceiling
      let lastCeilIdx = -999;
      for (let i = 0; i < FLOOR_COLS; i++) {
        if (i > lastCeilIdx + 1) {
          if (Math.random() > 0.88) {
            addImg(new THREE.Vector3(-w + i * COL_WIDTH + COL_WIDTH / 2, h, -d / 2), new THREE.Euler(Math.PI / 2, 0, 0), false);
            lastCeilIdx = i;
          }
        }
      }

      // Left Wall
      let lastLeftIdx = -999;
      for (let i = 0; i < WALL_ROWS; i++) {
        if (i > lastLeftIdx + 1) {
          if (Math.random() > 0.80) {
            addImg(new THREE.Vector3(-w, -h + i * ROW_HEIGHT + ROW_HEIGHT / 2, -d / 2), new THREE.Euler(0, Math.PI / 2, 0), true);
            lastLeftIdx = i;
          }
        }
      }

      // Right Wall
      let lastRightIdx = -999;
      for (let i = 0; i < WALL_ROWS; i++) {
        if (i > lastRightIdx + 1) {
          if (Math.random() > 0.80) {
            addImg(new THREE.Vector3(w, -h + i * ROW_HEIGHT + ROW_HEIGHT / 2, -d / 2), new THREE.Euler(0, -Math.PI / 2, 0), true);
            lastRightIdx = i;
          }
        }
      }
    };

    // Helper: Create Segment
    const createSegmentFast = (zPos: number) => {
      const group = new THREE.Group();
      group.position.z = zPos;

      const w = TUNNEL_WIDTH / 2;
      const h = TUNNEL_HEIGHT / 2;
      const d = SEGMENT_DEPTH;

      // Lines
      // Note: isDarkMode comes from closure (might be stale if not careful, but we have ThemeEffect updating materials anyway)
      // We set initial values, ThemeEffect will override immediately.
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xb0b0b0, transparent: true, opacity: 0.35 });
      const lineGeo = new THREE.BufferGeometry();
      const vertices: number[] = [];

      for (let i = 0; i <= FLOOR_COLS; i++) {
        const x = -w + (i * COL_WIDTH);
        vertices.push(x, -h, 0, x, -h, -d, x, h, 0, x, h, -d);
      }
      for (let i = 1; i < WALL_ROWS; i++) {
        const y = -h + (i * ROW_HEIGHT);
        vertices.push(-w, y, 0, -w, y, -d, w, y, 0, w, y, -d);
      }
      vertices.push(-w, -h, 0, w, -h, 0, -w, h, 0, w, h, 0, -w, -h, 0, -w, h, 0, w, -h, 0, w, h, 0);

      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      const lines = new THREE.LineSegments(lineGeo, lineMaterial);
      group.add(lines);

      populateImagesFast(group, w, h, d);

      return group;
    };


    // Generate segments
    const segments: THREE.Group[] = [];
    for (let i = 0; i < NUM_SEGMENTS; i++) {
      const z = -i * SEGMENT_DEPTH;
      const segment = createSegmentFast(z);
      scene.add(segment);
      segments.push(segment);
    }
    segmentsRef.current = segments;

    // Animation Loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!cameraRef.current || !sceneRef.current || !rendererRef.current) return;

      cameraRef.current.position.z -= 0.05;
      const camZ = cameraRef.current.position.z;

      segmentsRef.current.forEach((segment) => {
        if (segment.position.z > camZ + SEGMENT_DEPTH) {
          // Recycling
          let minZ = 0;
          segmentsRef.current.forEach(s => minZ = Math.min(minZ, s.position.z));
          segment.position.z = minZ - SEGMENT_DEPTH;

          // Cleanup old images
          for (let i = segment.children.length - 1; i >= 0; i--) {
            if (segment.children[i].name === 'slab_image') {
              const m = segment.children[i] as THREE.Mesh;
              segment.remove(m);
              if (m.material instanceof THREE.Material) m.material.dispose();
              // Do NOT dispose geometry since it's shared
            }
          }
          populateImagesFast(segment, TUNNEL_WIDTH / 2, TUNNEL_HEIGHT / 2, SEGMENT_DEPTH);
        }
      });

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    animate();


    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      floorGeo.dispose();
      wallGeo.dispose();
      loadedTextures.forEach(t => t.dispose());
      renderer.dispose();
    };
  }, []); // Run once on mount

  // --- THEME UPDATE EFFECT ---
  useEffect(() => {
    if (!sceneRef.current) return;

    // Define theme colors
    const bgHex = isDarkMode ? 0x1A1816 : 0xF3F1ED;
    const fogHex = isDarkMode ? 0x1A1816 : 0xF3F1ED;
    const lineHex = isDarkMode ? 0x333333 : 0xdcdcdc;
    const lineOp = isDarkMode ? 0.6 : 0.35;

    // Apply to scene
    sceneRef.current.background = new THREE.Color(bgHex);
    if (!sceneRef.current.fog) {
      sceneRef.current.fog = new THREE.FogExp2(fogHex, FOG_DENSITY);
    } else {
      (sceneRef.current.fog as THREE.FogExp2).color.setHex(fogHex);
    }

    // Apply to existing grid lines
    segmentsRef.current.forEach(segment => {
      segment.children.forEach(child => {
        if (child instanceof THREE.LineSegments) {
          const mat = child.material as THREE.LineBasicMaterial;
          mat.color.setHex(lineHex);
          mat.opacity = lineOp;
          mat.needsUpdate = true;
        }
      });
    });
  }, [isDarkMode]);

  // Text Entrance Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816]' : 'bg-[#F3F1ED]'}`}>
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
        <div ref={contentRef} className="text-center flex flex-col items-center max-w-3xl px-6 pointer-events-auto mix-blend-multiply-normal">

          <h1 className={`text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] font-bold tracking-tighter mb-8 transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Art Intemporel,<br />Pensé Pour Émouvoir
          </h1>

          <p className={`text-lg md:text-xl font-normal max-w-lg leading-relaxed mb-10 transition-colors duration-700 ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>
            Artiste peintre reconnu. Donnez vie à vos émotions à travers des œuvres et portraits sur mesure.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-gold text-black rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-gold/20" onClick={() => setView('contact')}>
              Commander une œuvre
            </button>
            <button className={`text-sm font-medium hover:opacity-70 transition-opacity flex items-center gap-1 ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={() => setView('gallery')}>
              Voir la galerie <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
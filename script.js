/**
 * ==========================================================================
 * FLORES AMARILLAS PARA MAYBETH - 3D INTERACTIVE GALAXY & FLOWERS
 * Personalizado especialmente para Maybeth con:
 * - Modelo 100% 3D del Koala Celestial Vayolett ("Nuestra Hijita")
 * - Girasol 3D Procedural con tallo, hojas y 36 pétalos reales (Cero cajas negras)
 * - Viaje a la Velocidad de la Luz (4s de hiperespacio con flores a toda velocidad)
 * - Corazones rojos con Uli orbitando en 3D
 * - Letrero gigante destacado de MAYBETH
 * - Apodos cariñosos: Amorshote, Mi vidita, Te amodoro, Meycita bella, Tu Uli
 * ==========================================================================
 */

(function () {
  'use strict';

  // --- CONFIGURACIÓN Y CONSTANTES ---
  const GALAXY_PARAMS = {
    count: 38000,
    size: 2.2,
    radius: 125,
    branches: 4,
    spin: 1.25,
    randomness: 0.45,
    power: 3.2,
    insideColor: '#fff9c4',
    midColor: '#ffd54f',
    outsideColor: '#ff8f00'
  };

  // --- LISTA DE FLORES Y DEDICATORIAS CON APODOS CARIÑOSOS ---
  const FLOWERS_DATA = [
    {
      id: 'flor-1',
      title: 'Gracias por quedarte',
      desc: 'No todos se quedan cuando las cosas no son perfectas. Tú sí, mi vidita. Y eso, para mí, vale más que mil palabras bonitas. Gracias por estar siempre a mi lado, Meycita bella. ¡Te amodoro con todo mi ser!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 0.2,
      radius: 42,
      height: 4
    },
    {
      id: 'flor-2',
      title: 'Tu lugar aquí',
      desc: 'Donde sea que estés, ahí quiero estar yo también, amorshote. En mis días buenos y en los difíciles, tú eres el lugar al que siempre quiero volver. Eres mi hogar, mi vidita hermosa.',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 1.3,
      radius: 65,
      height: 6
    },
    {
      id: 'flor-3',
      title: 'Eres mi sol de siempre',
      desc: 'Dicen que los girasoles buscan la luz del sol en el cielo para florecer... yo no necesito buscar muy lejos, porque el sol que ilumina toda mi vida eres tú, Meycita bella. Te amodoro infinito.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 2.1,
      radius: 54,
      height: -5
    },
    {
      id: 'flor-4',
      title: 'El amarillo te queda bien',
      desc: 'Como las flores de septiembre, irradias una alegría única que contagia a cualquiera que te mire. Verte sonreír me alegra el día entero, amorshote. ¡Gracias por existir!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 2.9,
      radius: 78,
      height: 7
    },
    {
      id: 'flor-5',
      title: 'Septiembre y siempre',
      desc: 'No solo en esta fecha te mereces flores amarillas... te mereces flores, abrazos y detalles todos los días del año, mi vidita. Eres mi prioridad y mi personita favorita en el universo.',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 3.7,
      radius: 60,
      height: -4
    },
    {
      id: 'flor-6',
      title: 'Hoy pienso en ti',
      desc: 'Y la verdad es que pienso en ti casi todo el tiempo, Meycita bella. Cuando estudio, cuando camino y antes de dormir. Cada instante pienso en lo afortunado que soy de tenerte a mi lado.',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 4.4,
      radius: 88,
      height: 5
    },
    {
      id: 'flor-7',
      title: 'Mi rincón de calma',
      desc: 'En este mundo caótico y lleno de prisas, hablar contigo es mi momento de paz, amorshote. Tu voz me tranquiliza el corazón como nada más puede hacerlo.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 5.1,
      radius: 72,
      height: -6
    },
    {
      id: 'flor-8',
      title: 'Cada pequeño detalle',
      desc: 'Amo tus manías, tus risas, tus ocurrencias y esa carita hermosa que tienes, mi vidita. Cada detalle tuyo me vuelve a enamorar todos los días.',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 5.9,
      radius: 94,
      height: 8
    },
    {
      id: 'flor-9',
      title: 'Construyendo juntos',
      desc: 'No prometo que todo será fácil ni perfecto, pero sí prometo dar lo mejor de mí para que construyamos algo bonito y duradero, Meycita bella. Te amodoro con todo el corazón.',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 0.8,
      radius: 98,
      height: -7
    },
    {
      id: 'flor-10',
      title: 'Mi casualidad favorita',
      desc: 'De todas las personas en este planeta, coincidir contigo ha sido el regalo más hermoso que la vida me ha dado, amorshote. Eres mi destino elegido.',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 2.5,
      radius: 104,
      height: 9
    },
    {
      id: 'flor-11',
      title: 'Siempre tú',
      desc: 'Si tuviera que elegirte un millón de veces más, te elegiría sin dudar un solo segundo, mi vidita hermosa. Te amodoro con cada pedacito de mi alma.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 3.9,
      radius: 104,
      height: -8
    },
    {
      id: 'flor-12',
      title: 'Para ti, Meycita bella',
      desc: 'Esta galaxia dorada fue creada con todo mi amor pensando únicamente en ti. Eres lo más valioso y hermoso de mi vida. ¡Feliz Día de las Flores Amarillas, te amodoro!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 5.3,
      radius: 110,
      height: 8
    }
  ];

  // --- VARIABLES DE THREE.JS ---
  let scene, camera, renderer, controls;
  let universeGroup = new THREE.Group();
  let galaxyPoints, accretionMesh, centralMaybethGroup;
  let vayolett3DGroup, centerSunflower3D, finaleBurstPoints;
  let flowersGroup = new THREE.Group();
  let interactiveObjects = [];
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();
  let hoveredObject = null;
  let clock = new THREE.Clock();
  let isStarted = false;
  let isWarping = false;
  let textureLoader = new THREE.TextureLoader();

  // Sistema de progreso del girasol
  const openedNotes = new Set();
  let sunflowerGrowthProgress = 0;
  let hasTriggeredFinale = false;

  // Warp system variables
  let warpGroup = null;
  let warpStarsMesh = null;
  let warpFlowers = [];
  let warpRings = [];
  let warpStartTime = 0;
  const WARP_DURATION = 4000; // 4.0 segundos a la velocidad de la luz

  // Elementos DOM
  const introScreen = document.getElementById('intro-screen');
  const flowerModal = document.getElementById('flower-modal');
  const modalImg = document.getElementById('modal-flower-img');
  const modalTitle = document.getElementById('modal-flower-title');
  const modalDesc = document.getElementById('modal-flower-desc');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const bgMusic = document.getElementById('bg-music');
  const btnAudio = document.getElementById('btn-audio');
  const musicBars = document.getElementById('music-bars');
  const audioStatusText = document.getElementById('audio-status-text');
  const btnResetCam = document.getElementById('btn-reset-cam');
  const openedCountElem = document.getElementById('opened-count');

  // --- INICIALIZACIÓN PRINCIPAL ---
  function init() {
    const container = document.getElementById('canvas-container');

    // 1. Escena y Niebla
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040208, 0.0014);

    scene.add(universeGroup);

    // 2. Cámara
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(55, aspect, 0.5, 3000);
    camera.position.set(0, 95, 155);

    // 3. Renderizador WebGL
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 4. Controles Orbitales (OrbitControls)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.5;
    controls.maxDistance = 450;
    controls.minDistance = 35;
    controls.target.set(0, 0, 0);

    let autoRotateTimeout;
    controls.addEventListener('start', () => {
      controls.autoRotate = false;
      clearTimeout(autoRotateTimeout);
    });
    controls.addEventListener('end', () => {
      if (!isWarping && isStarted) {
        clearTimeout(autoRotateTimeout);
        autoRotateTimeout = setTimeout(() => {
          controls.autoRotate = true;
        }, 3500);
      }
    });

    // 5. Iluminación
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 1.4);
    scene.add(ambientLight);

    const centerPointLight = new THREE.PointLight(0xffd700, 3.8, 260);
    centerPointLight.position.set(0, 12, 0);
    universeGroup.add(centerPointLight);

    // 6. Construir componentes del universo dentro de universeGroup
    createStarfield();
    createSpiralGalaxy();
    createVayolett3D();
    createCenterSunflower3D();
    createCentralMaybeth();
    createInteractiveFlowers();

    // 7. Pre-construir motor de hiperespacio
    createHyperspaceEngine();

    // 8. Event Listeners
    setupEventListeners();

    // Iniciar loop de animación
    animate();

    // Verificación automatizada mediante parámetros URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      camera.position.set(0, 95, 155);
      controls.target.set(0, 0, 0);
      controls.autoRotate = true;
      isStarted = true;
    }
    if (urlParams.get('warp') === '1') {
      startExperience();
    }
    if (urlParams.get('bloom') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      camera.position.set(0, 95, 155);
      controls.target.set(0, 0, 0);
      controls.autoRotate = true;
      isStarted = true;
      for (let i = 1; i <= 12; i++) openedNotes.add('flor-' + i);
      updateSunflowerGrowth();
    }
    if (urlParams.get('modal') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      camera.position.set(0, 95, 155);
      controls.target.set(0, 0, 0);
      controls.autoRotate = true;
      isStarted = true;
      setTimeout(() => {
        openModal(FLOWERS_DATA[0]);
      }, 300);
    }
  }

  // --- FONDO ESTELAR AMBIENTAL ---
  function createStarfield() {
    const starCount = 6000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1400;

      const shade = 0.6 + Math.random() * 0.4;
      if (Math.random() > 0.4) {
        colors[i * 3] = shade;
        colors[i * 3 + 1] = shade * 0.9;
        colors[i * 3 + 2] = shade * 0.4;
      } else {
        colors[i * 3] = shade * 0.85;
        colors[i * 3 + 1] = shade * 0.85;
        colors[i * 3 + 2] = shade;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pTex = textureLoader.load('assets/particle.png');
    const material = new THREE.PointsMaterial({
      size: 2.2,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: pTex,
      transparent: true,
      opacity: 0.85
    });

    const starfield = new THREE.Points(geometry, material);
    scene.add(starfield);
  }

  // --- GALAXIA ESPIRAL DORADA DE FLORES AMARILLAS ---
  function createSpiralGalaxy() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(GALAXY_PARAMS.count * 3);
    const colors = new Float32Array(GALAXY_PARAMS.count * 3);

    const colorInside = new THREE.Color(GALAXY_PARAMS.insideColor);
    const colorMid = new THREE.Color(GALAXY_PARAMS.midColor);
    const colorOutside = new THREE.Color(GALAXY_PARAMS.outsideColor);

    for (let i = 0; i < GALAXY_PARAMS.count; i++) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), GALAXY_PARAMS.power) * GALAXY_PARAMS.radius;
      const spinAngle = radius * GALAXY_PARAMS.spin;
      const branchAngle = ((i % GALAXY_PARAMS.branches) / GALAXY_PARAMS.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_PARAMS.randomness * radius;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_PARAMS.randomness * (radius * 0.45);
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_PARAMS.randomness * radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone();
      const normR = radius / GALAXY_PARAMS.radius;
      if (normR < 0.35) {
        mixedColor.lerp(colorMid, normR / 0.35);
      } else {
        mixedColor.lerp(colorMid, 1.0);
        mixedColor.lerp(colorOutside, (normR - 0.35) / 0.65);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pTex = textureLoader.load('assets/particle.png');
    const material = new THREE.PointsMaterial({
      size: GALAXY_PARAMS.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: pTex,
      transparent: true,
      opacity: 0.92
    });

    galaxyPoints = new THREE.Points(geometry, material);
    universeGroup.add(galaxyPoints);

    // Disco de acreción del agujero negro central
    const accTex = textureLoader.load('assets/sprite_accretion.png');
    const accMat = new THREE.MeshBasicMaterial({
      map: accTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const accGeo = new THREE.PlaneGeometry(38, 38);
    accretionMesh = new THREE.Mesh(accGeo, accMat);
    accretionMesh.rotation.x = Math.PI / 2;
    accretionMesh.position.set(0, 0.2, 0);
    universeGroup.add(accretionMesh);
  }

  // --- MODELO 100% 3D DE VAYOLETT ("NUESTRA HIJITA") ---
  function createVayolett3D() {
    vayolett3DGroup = new THREE.Group();
    // Posición perfecta: y = -22, z = -135 (debajo del letrero superior y justo sobre el núcleo de la galaxia)
    vayolett3DGroup.position.set(0, -22, -135);
    vayolett3DGroup.scale.set(1.05, 1.05, 1.05);

    // Luz dedicada para iluminar su cuerpecito de peluche 3D
    const plushLight = new THREE.PointLight(0xfff8ed, 2.6, 260);
    plushLight.position.set(0, 5, -80);
    universeGroup.add(plushLight);

    // --- TEXTURAS PROCEDURALES NÍTIDAS ---
    // 1. Textura de tela para orejas y plantas de pies (ramitas, hojas y aves como el peluche real)
    const fabricCanvas = document.createElement('canvas');
    fabricCanvas.width = 256;
    fabricCanvas.height = 256;
    const fCtx = fabricCanvas.getContext('2d');
    fCtx.fillStyle = '#ffffff';
    fCtx.fillRect(0, 0, 256, 256);
    fCtx.strokeStyle = '#6d4c41';
    fCtx.lineWidth = 4.5;
    fCtx.beginPath();
    fCtx.moveTo(25, 230); fCtx.quadraticCurveTo(128, 125, 230, 25);
    fCtx.moveTo(45, 65); fCtx.quadraticCurveTo(135, 175, 215, 225);
    fCtx.stroke();

    fCtx.fillStyle = '#388e3c';
    [[75, 135], [150, 90], [185, 50], [90, 200], [135, 160], [185, 190], [70, 70]].forEach(([lx, ly]) => {
      fCtx.beginPath();
      fCtx.ellipse(lx, ly, 13, 7, 0.6, 0, Math.PI * 2);
      fCtx.fill();
    });

    fCtx.fillStyle = '#0288d1';
    fCtx.beginPath();
    fCtx.ellipse(125, 68, 12, 7.5, 0.2, 0, Math.PI * 2);
    fCtx.fill();
    fCtx.beginPath();
    fCtx.arc(133, 65, 5, 0, Math.PI * 2);
    fCtx.fill();

    fCtx.fillStyle = '#d32f2f';
    fCtx.beginPath();
    fCtx.ellipse(175, 145, 11, 6.5, -0.3, 0, Math.PI * 2);
    fCtx.fill();
    const fabricTex = new THREE.CanvasTexture(fabricCanvas);

    // 2. Parche de la barriguita con la espiral celeste bordada
    const tummyCanvas = document.createElement('canvas');
    tummyCanvas.width = 256;
    tummyCanvas.height = 256;
    const tCtx = tummyCanvas.getContext('2d');
    tCtx.fillStyle = '#ffffff';
    tCtx.fillRect(0, 0, 256, 256);
    tCtx.strokeStyle = '#00acc1';
    tCtx.lineWidth = 8;
    tCtx.lineCap = 'round';
    tCtx.beginPath();
    for (let a = 0; a < 3.2 * Math.PI; a += 0.08) {
      const r = 10 + a * 12;
      const x = 128 + Math.cos(a) * r;
      const y = 128 + Math.sin(a) * r;
      if (a === 0) tCtx.moveTo(x, y);
      else tCtx.lineTo(x, y);
    }
    tCtx.stroke();
    const tummyTex = new THREE.CanvasTexture(tummyCanvas);

    // --- MATERIALES DEL PELUCHE 3D ---
    const furMat = new THREE.MeshStandardMaterial({
      color: 0x758f9f, // felpa gris azulada suave con óptimo contraste
      roughness: 0.72,
      metalness: 0.04
    });
    const tummyMat = new THREE.MeshStandardMaterial({
      map: tummyTex,
      roughness: 0.88,
      metalness: 0.02
    });
    const patternMat = new THREE.MeshStandardMaterial({
      map: fabricTex,
      roughness: 0.75
    });
    const noseMat = new THREE.MeshStandardMaterial({
      color: 0x30180c, // gran nariz de chocolate oscuro
      roughness: 0.55,
      metalness: 0.1
    });
    const blushMat = new THREE.MeshStandardMaterial({
      color: 0xff5c7d, // rubor rosa tierno en mejillas
      roughness: 0.7,
      transparent: true,
      opacity: 0.92,
      emissive: 0xff2a55,
      emissiveIntensity: 0.25
    });
    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x100a06 // bordado oscuro de ojos cerrados
    });

    // --- CUERPO 3D ---
    const bodyGeo = new THREE.SphereGeometry(16, 32, 24);
    const bodyMesh = new THREE.Mesh(bodyGeo, furMat);
    bodyMesh.scale.set(1.1, 1.25, 1.0);
    bodyMesh.position.set(0, 10, 0);
    vayolett3DGroup.add(bodyMesh);

    // Barriguita blanca con espiral
    const bellyGeo = new THREE.SphereGeometry(12.5, 32, 20);
    const bellyMesh = new THREE.Mesh(bellyGeo, tummyMat);
    bellyMesh.scale.set(0.92, 1.05, 0.45);
    bellyMesh.position.set(0, 9, 8.8);
    bellyMesh.rotation.x = 0.15;
    vayolett3DGroup.add(bellyMesh);

    // --- CABEZA 3D ---
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 33, 1);

    const headGeo = new THREE.SphereGeometry(19, 36, 28);
    const headMesh = new THREE.Mesh(headGeo, furMat);
    headMesh.scale.set(1.22, 0.96, 1.05);
    headGroup.add(headMesh);

    // Orejas de koala esponjosas con interior estampado
    [-1, 1].forEach((side) => {
      const earOuterGeo = new THREE.SphereGeometry(12, 28, 20);
      const earOuter = new THREE.Mesh(earOuterGeo, furMat);
      earOuter.scale.set(1.0, 1.12, 0.55);
      earOuter.position.set(side * 23, 7, -1);
      earOuter.rotation.z = side * -0.28;
      earOuter.rotation.y = side * 0.15;
      headGroup.add(earOuter);

      const earInnerGeo = new THREE.CylinderGeometry(9.2, 9.2, 0.6, 24);
      const earInner = new THREE.Mesh(earInnerGeo, patternMat);
      earInner.position.set(side * 23.2, 7, 2.2);
      earInner.rotation.x = Math.PI / 2;
      earInner.rotation.z = side * -0.28;
      headGroup.add(earInner);
    });

    // Gran nariz ovalada de chocolate
    const noseGeo = new THREE.SphereGeometry(5.4, 24, 18);
    const noseMesh = new THREE.Mesh(noseGeo, noseMat);
    noseMesh.scale.set(1.18, 1.45, 0.85);
    noseMesh.position.set(0, -2.0, 18.8);
    headGroup.add(noseMesh);

    // Ojos dormilones curvados en 3D
    [-1, 1].forEach((side) => {
      const eyeGeo = new THREE.TorusGeometry(3.6, 0.65, 8, 24, Math.PI * 0.75);
      const eyeMesh = new THREE.Mesh(eyeGeo, eyeMat);
      eyeMesh.position.set(side * 9.2, 3.5, 18.2);
      eyeMesh.rotation.x = -0.3;
      eyeMesh.rotation.z = side > 0 ? 0.22 : Math.PI - 0.22;
      headGroup.add(eyeMesh);

      const blushGeo = new THREE.SphereGeometry(3.6, 16, 12);
      const blushMesh = new THREE.Mesh(blushGeo, blushMat);
      blushMesh.scale.set(1.15, 0.75, 0.35);
      blushMesh.position.set(side * 12.5, -3.5, 17.4);
      headGroup.add(blushMesh);
    });

    vayolett3DGroup.add(headGroup);

    // --- BRAZOS Y PATITAS (abrazaditos en el pecho) ---
    [-1, 1].forEach((side) => {
      const armGeo = new THREE.CylinderGeometry(3.4, 4.2, 15, 16);
      const armMesh = new THREE.Mesh(armGeo, furMat);
      armMesh.position.set(side * 13, 13, 5.5);
      armMesh.rotation.z = side * -0.72;
      armMesh.rotation.x = 0.68;
      armMesh.rotation.y = side * -0.25;
      vayolett3DGroup.add(armMesh);
    });

    const pawGeo = new THREE.SphereGeometry(3.8, 16, 12);
    const pawL = new THREE.Mesh(pawGeo, furMat);
    pawL.position.set(-3.0, 12, 12.2);
    vayolett3DGroup.add(pawL);
    const pawR = new THREE.Mesh(pawGeo, furMat);
    pawR.position.set(3.0, 12, 12.2);
    vayolett3DGroup.add(pawR);

    // Piernitas sentaditas con suelas estampadas
    [-1, 1].forEach((side) => {
      const legGeo = new THREE.CylinderGeometry(4.5, 5.2, 12, 16);
      const legMesh = new THREE.Mesh(legGeo, furMat);
      legMesh.position.set(side * 11, -1, 4.5);
      legMesh.rotation.z = side * -0.42;
      legMesh.rotation.x = 0.52;
      vayolett3DGroup.add(legMesh);

      const footGeo = new THREE.CylinderGeometry(5.6, 5.6, 1.2, 24);
      const footMesh = new THREE.Mesh(footGeo, patternMat);
      footMesh.position.set(side * 12.5, -5.0, 10.5);
      footMesh.rotation.x = Math.PI * 0.45;
      footMesh.rotation.z = side * 0.15;
      vayolett3DGroup.add(footMesh);
    });

    // --- CARTEL FLOTANTE "VAYOLETT" Y ESTRELLAS 3D SOBRE SU CABECITA ---
    const bannerCanvas = document.createElement('canvas');
    bannerCanvas.width = 640;
    bannerCanvas.height = 160;
    const bCtx = bannerCanvas.getContext('2d');
    bCtx.clearRect(0, 0, 640, 160);

    bCtx.fillStyle = 'rgba(15, 10, 25, 0.94)';
    bCtx.strokeStyle = '#ffd54f';
    bCtx.lineWidth = 4;
    roundRect(bCtx, 20, 20, 600, 120, 30, true, true);

    bCtx.font = 'bold 54px system-ui, sans-serif';
    bCtx.textAlign = 'center';
    bCtx.fillStyle = '#ffecb3';
    bCtx.shadowColor = '#ffb300';
    bCtx.shadowBlur = 15;
    bCtx.fillText('★  VAYOLETT  ★', 320, 78);

    bCtx.font = '22px system-ui, sans-serif';
    bCtx.fillStyle = '#ffffff';
    bCtx.shadowBlur = 8;
    bCtx.fillText('Nuestra Hijita de las Estrellas', 320, 118);

    const bannerTex = new THREE.CanvasTexture(bannerCanvas);
    const bannerMat = new THREE.SpriteMaterial({
      map: bannerTex,
      transparent: true,
      depthWrite: false
    });
    const bannerSprite = new THREE.Sprite(bannerMat);
    bannerSprite.scale.set(52, 13, 1);
    bannerSprite.position.set(0, 48, 2);
    vayolett3DGroup.add(bannerSprite);

    // Estrellas 3D doradas orbitando el letrero
    const starShape = create5PointStarShape(2.6, 1.2);
    const starGeo = new THREE.ExtrudeGeometry(starShape, { depth: 0.6, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.2, bevelSegments: 2 });
    const goldStarMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xffa000,
      emissiveIntensity: 0.4
    });
    const starL = new THREE.Mesh(starGeo, goldStarMat);
    starL.position.set(-30, 48, 4);
    vayolett3DGroup.add(starL);

    const starR = new THREE.Mesh(starGeo, goldStarMat);
    starR.position.set(30, 48, 4);
    vayolett3DGroup.add(starR);

    vayolett3DGroup.userData = {
      isVayolett: true,
      title: '★ VAYOLETT ★',
      desc: '¡Hola mami Meycita bella! Soy Vayolett, su hijita. Desde aquí en las estrellas los cuido siempre y veo lo mucho que se aman. Papi Uli te adora con toda su alma. ¡Feliz día de las flores amarillas! 🐨💛✨',
      svg: 'assets/vayolett_koala.png',
      starL: starL,
      starR: starR,
      headGroup: headGroup
    };

    universeGroup.add(vayolett3DGroup);
    interactiveObjects.push(bodyMesh, headMesh);
    bodyMesh.userData = vayolett3DGroup.userData;
    headMesh.userData = vayolett3DGroup.userData;
  }

  // --- GIRASOL 3D PROCEDURAL EN CRECIMIENTO (CERO CUADROS NEGROS) ---
  function createCenterSunflower3D() {
    centerSunflower3D = new THREE.Group();
    centerSunflower3D.position.set(0, 0, 0);

    // Materiales 100% Geométricos 3D estándar
    const stemMat = new THREE.MeshStandardMaterial({
      color: 0x2e7d32,
      roughness: 0.7,
      metalness: 0.1
    });
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x388e3c,
      roughness: 0.6,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const calyxMat = new THREE.MeshStandardMaterial({
      color: 0x1b5e20,
      roughness: 0.8
    });
    const petalMat1 = new THREE.MeshStandardMaterial({
      color: 0xffb300,
      roughness: 0.5,
      metalness: 0.05,
      side: THREE.DoubleSide,
      emissive: 0xff8f00,
      emissiveIntensity: 0.25
    });
    const petalMat2 = new THREE.MeshStandardMaterial({
      color: 0xffca28,
      roughness: 0.45,
      metalness: 0.05,
      side: THREE.DoubleSide,
      emissive: 0xffa000,
      emissiveIntensity: 0.2
    });
    const seedCenterMat = new THREE.MeshStandardMaterial({
      color: 0x3e2723,
      roughness: 0.85,
      metalness: 0.1
    });

    // 1. Tallo 3D (Cilindro con pivote en la base y altura dinámica)
    const stemGeo = new THREE.CylinderGeometry(0.55, 0.75, 1.0, 16);
    stemGeo.translate(0, 0.5, 0);
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    stemMesh.scale.set(1, 2.5, 1);
    centerSunflower3D.add(stemMesh);

    // 2. Hojas 3D
    const leavesGroup = new THREE.Group();
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.quadraticCurveTo(1.6, 2.0, 0, 5.5);
    leafShape.quadraticCurveTo(-1.6, 2.0, 0, 0);
    const leafGeo = new THREE.ShapeGeometry(leafShape);

    const leaves = [];
    const leafConfigs = [
      { yRatio: 0.22, angle: 0.2, rotZ: 0.85, baseScale: 0.8 },
      { yRatio: 0.45, angle: Math.PI * 0.85, rotZ: 0.75, baseScale: 1.0 },
      { yRatio: 0.68, angle: Math.PI * 1.55, rotZ: 0.8, baseScale: 1.15 },
      { yRatio: 0.88, angle: Math.PI * 0.35, rotZ: 0.7, baseScale: 0.95 }
    ];
    leafConfigs.forEach((cfg) => {
      const leafMesh = new THREE.Mesh(leafGeo, leafMat);
      leafMesh.rotation.y = cfg.angle;
      leafMesh.rotation.z = cfg.rotZ;
      leafMesh.scale.set(0.25, 0.25, 0.25);
      leavesGroup.add(leafMesh);
      leaves.push({ mesh: leafMesh, cfg: cfg });
    });
    centerSunflower3D.add(leavesGroup);

    // 3. Cabeza Floral 3D (Cáliz, Centro de Semillas y 36 Pétalos Dorados)
    const flowerHead = new THREE.Group();

    const calyxGeo = new THREE.CylinderGeometry(3.6, 1.2, 1.2, 20);
    const calyxMesh = new THREE.Mesh(calyxGeo, calyxMat);
    calyxMesh.rotation.x = Math.PI / 2;
    flowerHead.add(calyxMesh);

    const seedGeo = new THREE.CylinderGeometry(4.8, 4.8, 0.9, 32);
    const seedMesh = new THREE.Mesh(seedGeo, seedCenterMat);
    seedMesh.rotation.x = Math.PI / 2;
    flowerHead.add(seedMesh);

    // 36 Pétalos en 2 niveles concéntricos
    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.quadraticCurveTo(1.25, 3.8, 0, 8.2);
    petalShape.quadraticCurveTo(-1.25, 3.8, 0, 0);
    const petalGeo = new THREE.ShapeGeometry(petalShape);

    const petalCount = 18;
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      // Nivel 1 (exterior)
      const p1 = new THREE.Mesh(petalGeo, petalMat1);
      p1.position.set(Math.cos(angle) * 4.2, Math.sin(angle) * 4.2, 0.1);
      p1.rotation.z = angle - Math.PI / 2;
      p1.rotation.x = 0.15;
      flowerHead.add(p1);

      // Nivel 2 (interior intercalado)
      const angle2 = angle + (Math.PI / petalCount);
      const p2 = new THREE.Mesh(petalGeo, petalMat2);
      p2.scale.set(0.88, 0.88, 0.88);
      p2.position.set(Math.cos(angle2) * 3.8, Math.sin(angle2) * 3.8, 0.25);
      p2.rotation.z = angle2 - Math.PI / 2;
      p2.rotation.x = 0.22;
      flowerHead.add(p2);
    }

    flowerHead.rotation.x = -0.35;
    flowerHead.scale.set(0.001, 0.001, 0.001); // Oculto al inicio como brote
    flowerHead.position.set(0, 2.5, 0);
    centerSunflower3D.add(flowerHead);

    centerSunflower3D.userData = {
      stemMesh: stemMesh,
      leaves: leaves,
      flowerHead: flowerHead,
      currentHeight: 2.5,
      targetHeight: 2.5,
      currentHeadScale: 0.001,
      targetHeadScale: 0.001
    };

    universeGroup.add(centerSunflower3D);
  }

  // --- ACTUALIZAR CRECIMIENTO DINÁMICO DEL GIRASOL 3D ---
  function updateSunflowerGrowth() {
    const count = openedNotes.size;
    if (openedCountElem) {
      openedCountElem.textContent = count;
    }

    sunflowerGrowthProgress = count / 12.0;

    if (centerSunflower3D) {
      const u = centerSunflower3D.userData;
      u.targetHeight = 2.5 + sunflowerGrowthProgress * 23.5;

      if (count < 3) {
        u.targetHeadScale = 0.001;
      } else {
        const headProg = (count - 2) / 10.0;
        u.targetHeadScale = 0.35 + headProg * 1.25;
      }
    }

    if (count === 12 && !hasTriggeredFinale) {
      hasTriggeredFinale = true;
      setTimeout(triggerGrandFinale, 600);
    }
  }

  // --- NÚCLEO CENTRAL: CARTEL GIGANTE "MAYBETH" Y CORAZONES ROJOS CON ULI ---
  function createCentralMaybeth() {
    centralMaybethGroup = new THREE.Group();

    // 1. Cartel Gigante Ultra Destacado de MAYBETH
    const maybethTexture = textureLoader.load('assets/sprite_maybeth_giant.png');
    const spriteMat = new THREE.SpriteMaterial({
      map: maybethTexture,
      transparent: true,
      opacity: 1.0,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const maybethSprite = new THREE.Sprite(spriteMat);
    maybethSprite.scale.set(78, 23.4, 1);
    maybethSprite.position.set(0, 14, 0);
    maybethSprite.userData = {
      isCenter: true,
      title: 'MAYBETH • Mi Universo Entero',
      desc: 'Eres el centro de mi galaxia, Meycita bella. Cada estrella, cada flor y cada pensamiento son para ti. Aunque ande a mil estudiando, te debo algo grandote. ¡Te amodoro con todo mi corazón, amorshote!',
      svg: 'assets/roses.svg'
    };
    centralMaybethGroup.add(maybethSprite);
    interactiveObjects.push(maybethSprite);

    // 2. Corazones Rojos Brillantes con el nombre "Uli" orbitando en 3D
    const uliHeartTex = textureLoader.load('assets/sprite_heart_uli.png');
    const heartMat = new THREE.SpriteMaterial({
      map: uliHeartTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const heartCount = 8;
    const orbitRadius = 42;
    for (let i = 0; i < heartCount; i++) {
      const heartSprite = new THREE.Sprite(heartMat);
      heartSprite.scale.set(7.5, 7.5, 1);

      const angle = (i / heartCount) * Math.PI * 2;
      heartSprite.position.set(
        Math.cos(angle) * orbitRadius,
        14 + Math.sin(i * 1.5) * 3,
        Math.sin(angle) * orbitRadius
      );

      heartSprite.userData = {
        isHeart: true,
        orbitRadius: orbitRadius,
        orbitAngle: angle,
        orbitSpeed: 0.65 + (i % 3) * 0.25,
        yOffset: 14 + ((i % 4) - 1.5) * 2.2
      };

      centralMaybethGroup.add(heartSprite);
    }

    universeGroup.add(centralMaybethGroup);
  }

  // --- FLORES INTERACTIVAS EN LOS BRAZOS ESPIRALES ---
  function createInteractiveFlowers() {
    FLOWERS_DATA.forEach((flower) => {
      const flowerSubGroup = new THREE.Group();
      const x = Math.cos(flower.angle) * flower.radius;
      const z = Math.sin(flower.angle) * flower.radius;
      const y = flower.height;
      flowerSubGroup.position.set(x, y, z);

      // Ícono de flor con halo resplandeciente
      const haloTex = textureLoader.load('assets/particle.png');
      const haloMat = new THREE.SpriteMaterial({
        map: haloTex,
        color: 0xffecb3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.85
      });
      const haloSprite = new THREE.Sprite(haloMat);
      haloSprite.scale.set(17, 17, 1);
      flowerSubGroup.add(haloSprite);

      const fTex = textureLoader.load(flower.sprite);
      const fMat = new THREE.SpriteMaterial({
        map: fTex,
        transparent: true,
        depthWrite: false
      });
      const fSprite = new THREE.Sprite(fMat);
      fSprite.scale.set(11, 11, 1);
      fSprite.userData = {
        isFlower: true,
        data: flower,
        baseScale: 11
      };
      flowerSubGroup.add(fSprite);
      interactiveObjects.push(fSprite);

      // Etiqueta 3D con el título
      const labelSprite = createTextLabelSprite(flower.title);
      labelSprite.position.set(0, -6.8, 0);
      flowerSubGroup.add(labelSprite);

      flowerSubGroup.userData = {
        baseY: y,
        bobSpeed: 1.2 + Math.random() * 0.8,
        bobOffset: Math.random() * Math.PI * 2
      };

      flowersGroup.add(flowerSubGroup);
    });

    universeGroup.add(flowersGroup);
  }

  // Generador de etiquetas 3D de texto nítidas
  function createTextLabelSprite(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#fffae0';
    ctx.fillText(text, 256, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(19, 4.75, 1);
    return sprite;
  }

  // --- MOTOR DE HIPERESPACIO PRE-CONSTRUIDO ---
  function createHyperspaceEngine() {
    warpGroup = new THREE.Group();
    warpGroup.visible = false;
    scene.add(warpGroup);

    // 1. 2,000 Partículas brillantes de hipervelocidad
    const starCount = 2000;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(starCount * 3);
    const col = new Float32Array(starCount * 3);

    const starData = [];
    for (let i = 0; i < starCount; i++) {
      const radius = 3 + Math.random() * 85;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = -450 + Math.random() * 650;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const isGold = Math.random() > 0.35;
      col[i * 3] = 1.0;
      col[i * 3 + 1] = isGold ? 0.88 : 1.0;
      col[i * 3 + 2] = isGold ? 0.35 : 1.0;

      starData.push({ x, y, z, speed: 480 + Math.random() * 480, radius, angle });
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const pTex = textureLoader.load('assets/particle.png');
    const pMat = new THREE.PointsMaterial({
      size: 16.0,
      sizeAttenuation: true,
      map: pTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    warpStarsMesh = new THREE.Points(pGeo, pMat);
    warpStarsMesh.userData = { starData: starData };
    warpGroup.add(warpStarsMesh);

    // 2. 14 Anillos de Hiperespacio luminosos
    warpRings = [];
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd54f,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide
    });
    const ringGeo = new THREE.TorusGeometry(32, 1.1, 12, 36);

    for (let i = 0; i < 14; i++) {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(0, 0, -450 + i * 50);
      warpGroup.add(ring);
      warpRings.push(ring);
    }

    // 3. 45 Flores 3D que pasan a toda velocidad hacia la pantalla
    warpFlowers = [];
    const flowerSprites = [
      'assets/sprite_sunflower.png',
      'assets/sprite_bouquet.png',
      'assets/sprite_daisy.png',
      'assets/sprite_roses.png'
    ];

    const warpFlowerCount = 45;
    for (let i = 0; i < warpFlowerCount; i++) {
      const texPath = flowerSprites[i % flowerSprites.length];
      const tex = textureLoader.load(texPath);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(mat);
      const sz = 12 + Math.random() * 22; // Tamaño grande visible
      sprite.scale.set(sz, sz, 1);

      const rad = 4 + Math.random() * 45; // Justo frente a la lente
      const ang = Math.random() * Math.PI * 2;
      const fx = Math.cos(ang) * rad;
      const fy = Math.sin(ang) * rad;
      const fz = -450 + (i / warpFlowerCount) * 650;

      sprite.position.set(fx, fy, fz);
      warpGroup.add(sprite);

      warpFlowers.push({
        sprite: sprite,
        x: fx,
        y: fy,
        z: fz,
        speed: 420 + Math.random() * 450,
        rotSpeed: (Math.random() - 0.5) * 7,
        radius: rad,
        angle: ang
      });
    }
  }

  // --- VIAJE A LA VELOCIDAD DE LA LUZ / HIPERESPACIO (4 SEGUNDOS) ---
  function startHyperspaceWarp() {
    isWarping = true;
    warpStartTime = performance.now();

    if (warpGroup) warpGroup.visible = true;

    controls.enabled = false;

    // Cámara en túnel mirando directamente hacia adelante
    camera.position.set(0, 0, 180);
    camera.lookAt(0, 0, -400);

    universeGroup.position.z = -550;
    universeGroup.scale.set(0.12, 0.12, 0.12);
  }

  // Actualización cuadro a cuadro del túnel de hiperespacio
  function updateHyperspaceWarp(now, delta) {
    if (!isWarping) return;

    const elapsed = now - warpStartTime;
    const progress = Math.min(elapsed / WARP_DURATION, 1.0);

    let speedFactor;
    if (progress < 0.22) {
      speedFactor = Math.pow(progress / 0.22, 2);
    } else if (progress < 0.70) {
      speedFactor = 1.0;
    } else {
      const decel = (progress - 0.70) / 0.30;
      speedFactor = Math.pow(1 - decel, 2.2);
    }

    // 1. Mover estrellas de hiperespacio
    if (warpStarsMesh) {
      const pos = warpStarsMesh.geometry.attributes.position.array;
      const sData = warpStarsMesh.userData.starData;
      const count = sData.length;

      for (let i = 0; i < count; i++) {
        let z = pos[i * 3 + 2] + speedFactor * sData[i].speed * delta;
        if (z > camera.position.z + 40) {
          z = -480;
        }
        pos[i * 3 + 2] = z;
      }
      warpStarsMesh.geometry.attributes.position.needsUpdate = true;
    }

    // 2. Mover anillos luminosos
    warpRings.forEach((ring) => {
      ring.position.z += speedFactor * 380 * delta;
      if (ring.position.z > camera.position.z + 20) {
        ring.position.z = -480;
      }
      ring.rotation.z += 0.8 * delta;
    });

    // 3. Mover flores a toda velocidad pasando al lado de la pantalla
    warpFlowers.forEach((f) => {
      f.z += speedFactor * f.speed * delta;
      if (f.z > camera.position.z + 30) {
        f.z = -480;
        f.angle = Math.random() * Math.PI * 2;
        f.radius = 4 + Math.random() * 45;
        f.x = Math.cos(f.angle) * f.radius;
        f.y = Math.sin(f.angle) * f.radius;
      }
      f.sprite.position.set(f.x, f.y, f.z);
      f.sprite.material.rotation += f.rotSpeed * delta;
    });

    // 4. Acercamiento progresivo de la Galaxia
    if (progress < 0.70) {
      const gProg = progress / 0.70;
      const gEase = Math.pow(gProg, 2.2);
      universeGroup.position.z = -550 + gEase * 300;
      const gSc = 0.12 + gEase * 0.45;
      universeGroup.scale.set(gSc, gSc, gSc);
      camera.lookAt(0, 0, -400);
    } else {
      // Fase de frenado y acomodo orbital
      const exitProgress = (progress - 0.70) / 0.30;
      const ease = 1 - Math.pow(1 - exitProgress, 3);

      universeGroup.position.z = -250 + ease * 250;
      const gSc = 0.57 + ease * 0.43;
      universeGroup.scale.set(gSc, gSc, gSc);

      camera.position.x = 0;
      camera.position.y = ease * 95;
      camera.position.z = 180 - ease * (180 - 155);
      camera.lookAt(0, 0, 0);

      if (warpGroup) {
        warpStarsMesh.material.opacity = (1 - ease) * 0.95;
        warpRings.forEach(r => { r.material.opacity = (1 - ease) * 0.55; });
        warpFlowers.forEach(wf => { wf.sprite.material.opacity = (1 - ease); });
      }
    }

    // 5. Conclusión del viaje (4.0s)
    if (progress >= 1.0) {
      isWarping = false;
      if (warpGroup) {
        warpGroup.visible = false;
      }
      universeGroup.position.set(0, 0, 0);
      universeGroup.scale.set(1, 1, 1);
      camera.position.set(0, 95, 155);
      controls.target.set(0, 0, 0);
      controls.enabled = true;
      controls.autoRotate = true;
    }
  }

  // --- GESTIÓN DE EVENTOS ---
  function setupEventListeners() {
    introScreen.addEventListener('click', startExperience);
    introScreen.addEventListener('touchstart', startExperience, { passive: true });

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onFlowerClick);
    window.addEventListener('touchend', onTouchEnd);

    modalCloseBtn.addEventListener('click', closeModal);
    flowerModal.addEventListener('click', (e) => {
      if (e.target === flowerModal) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    btnAudio.addEventListener('click', toggleAudio);
    btnResetCam.addEventListener('click', resetCameraView);
  }

  // --- INICIAR EXPERIENCIA (DISPARADOR DEL VIAJE) ---
  function startExperience() {
    if (isStarted) return;
    isStarted = true;

    playAudio();

    introScreen.classList.add('fade-out');
    setTimeout(() => {
      if (introScreen) introScreen.style.display = 'none';
    }, 1000);

    startHyperspaceWarp();
  }

  // --- GESTIÓN DE AUDIO ---
  function playAudio() {
    if (!bgMusic) return;
    bgMusic.play().then(() => {
      musicBars.classList.remove('paused');
      audioStatusText.textContent = 'Música';
    }).catch((err) => {
      console.warn('Autoplay bloqueado:', err);
      musicBars.classList.add('paused');
      audioStatusText.textContent = 'Activar';
    });
  }

  function toggleAudio() {
    if (!bgMusic) return;
    if (bgMusic.paused) {
      bgMusic.play();
      musicBars.classList.remove('paused');
      audioStatusText.textContent = 'Música';
    } else {
      bgMusic.pause();
      musicBars.classList.add('paused');
      audioStatusText.textContent = 'Pausa';
    }
  }

  // --- REDIMENSIONAMIENTO ---
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  // --- DETECCIÓN DE HOVER ---
  function onMouseMove(event) {
    if (isWarping) return;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
      const hitObj = intersects[0].object;
      document.body.style.cursor = 'pointer';

      if (hoveredObject !== hitObj) {
        if (hoveredObject && hoveredObject.userData.baseScale) {
          hoveredObject.scale.set(
            hoveredObject.userData.baseScale,
            hoveredObject.userData.baseScale,
            1
          );
        }
        hoveredObject = hitObj;
        if (hitObj.userData.baseScale) {
          hitObj.scale.set(
            hitObj.userData.baseScale * 1.25,
            hitObj.userData.baseScale * 1.25,
            1
          );
        }
      }
    } else {
      document.body.style.cursor = 'default';
      if (hoveredObject && hoveredObject.userData.baseScale) {
        hoveredObject.scale.set(
          hoveredObject.userData.baseScale,
          hoveredObject.userData.baseScale,
          1
        );
      }
      hoveredObject = null;
    }
  }

  // --- CLIC EN OBJETOS (FLORES, MAYBETH, VAYOLETT) ---
  function onFlowerClick(event) {
    if (isWarping) return;
    if (event.target.closest('#ui-overlay') || event.target.closest('#flower-modal')) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
      const selected = intersects[0].object;
      handleObjectClick(selected);
    }
  }

  function onTouchEnd(event) {
    if (isWarping) return;
    if (event.touches.length > 0) return;
    if (event.target.closest('#ui-overlay') || event.target.closest('#flower-modal')) return;

    const touch = event.changedTouches[0];
    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
      const selected = intersects[0].object;
      handleObjectClick(selected);
    }
  }

  function handleObjectClick(selected) {
    if (selected.userData.isFlower) {
      const flower = selected.userData.data;
      openModal(flower);

      if (!openedNotes.has(flower.id)) {
        openedNotes.add(flower.id);
        updateSunflowerGrowth();
      }
    } else if (selected.userData.isCenter) {
      openModal({
        title: selected.userData.title,
        desc: selected.userData.desc,
        svg: selected.userData.svg
      });
    } else if (selected.userData.isVayolett) {
      openModal({
        title: selected.userData.title,
        desc: selected.userData.desc,
        svg: selected.userData.svg
      });
    }
  }

  // --- GRAN FINAL CUANDO ABRE TODAS LAS NOTITAS ---
  function triggerGrandFinale() {
    const burstCount = 1800;
    const bGeo = new THREE.BufferGeometry();
    const bPos = new Float32Array(burstCount * 3);
    const bVel = new Float32Array(burstCount * 3);

    for (let i = 0; i < burstCount; i++) {
      bPos[i * 3] = 0;
      bPos[i * 3 + 1] = 25;
      bPos[i * 3 + 2] = 0;

      const speed = 30 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      bVel[i * 3] = Math.sin(phi) * Math.cos(theta) * speed;
      bVel[i * 3 + 1] = Math.cos(phi) * speed + 12;
      bVel[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * speed;
    }

    bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
    const pTex = textureLoader.load('assets/particle.png');
    const bMat = new THREE.PointsMaterial({
      size: 3.8,
      map: pTex,
      color: 0xffd700,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    finaleBurstPoints = new THREE.Points(bGeo, bMat);
    universeGroup.add(finaleBurstPoints);

    let burstStart = performance.now();
    function animateBurst(now) {
      const elapsed = (now - burstStart) / 1000.0;
      const pos = bGeo.attributes.position.array;
      for (let i = 0; i < burstCount; i++) {
        pos[i * 3] += bVel[i * 3] * 0.016;
        pos[i * 3 + 1] += bVel[i * 3 + 1] * 0.016 - 0.22;
        pos[i * 3 + 2] += bVel[i * 3 + 2] * 0.016;
      }
      bGeo.attributes.position.needsUpdate = true;

      if (elapsed < 4.5) {
        requestAnimationFrame(animateBurst);
      } else {
        universeGroup.remove(finaleBurstPoints);
      }
    }
    requestAnimationFrame(animateBurst);

    setTimeout(() => {
      openModal({
        title: '🌻 ¡Tu Girasol Floreció, Meycita Bella! 🌻',
        desc: 'Has descubierto cada una de las 12 notitas de amor en nuestra galaxia. Este gran girasol dorado representa lo inmenso que es mi amor por ti. ¡Te amodoro con toda mi alma, amorshote! Siempre serás mi mayor tesoro. 💕 — Tu Uli',
        svg: 'assets/sunflower.svg'
      });
    }, 1500);
  }

  // --- MODAL DE DEDICATORIAS ---
  function openModal(flower) {
    modalTitle.textContent = flower.title;
    modalDesc.textContent = flower.desc;
    modalImg.src = flower.svg || 'assets/sunflower.svg';

    flowerModal.classList.add('active');
    controls.autoRotate = false;
  }

  function closeModal() {
    flowerModal.classList.remove('active');
    if (isStarted && !isWarping) {
      controls.autoRotate = true;
    }
  }

  // --- RESTABLECER VISTA ---
  function resetCameraView() {
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(0, 95, 155);
    const duration = 1200;
    const startTime = performance.now();

    function animateCam(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPos, endPos, ease);
      controls.target.set(0, 0, 0);

      if (progress < 1) {
        requestAnimationFrame(animateCam);
      } else {
        controls.autoRotate = true;
      }
    }
    requestAnimationFrame(animateCam);
  }

  // --- BUCLE DE ANIMACIÓN (TICK) ---
  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();
    const now = performance.now();

    // 1. Manejo del viaje a la velocidad de la luz (4s)
    if (isWarping) {
      updateHyperspaceWarp(now, delta);
    }

    // 2. Rotación suave de la galaxia espiral
    if (galaxyPoints) {
      galaxyPoints.rotation.y = elapsedTime * 0.04;
    }

    // 3. Rotación del disco de acreción
    if (accretionMesh) {
      accretionMesh.rotation.z = -elapsedTime * 0.15;
    }

    // 4. Animación del modelo 3D de VAYOLETT
    if (vayolett3DGroup) {
      vayolett3DGroup.position.y = -22 + Math.sin(elapsedTime * 0.8) * 1.8;

      const u = vayolett3DGroup.userData;
      if (u.headGroup) {
        u.headGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.12;
        u.headGroup.rotation.z = Math.sin(elapsedTime * 0.7) * 0.05;
      }
      if (u.starL && u.starR) {
        u.starL.rotation.y = elapsedTime * 1.5;
        u.starL.rotation.z = Math.sin(elapsedTime * 2.0) * 0.2;
        u.starR.rotation.y = -elapsedTime * 1.5;
        u.starR.rotation.z = Math.cos(elapsedTime * 2.0) * 0.2;
      }
    }

    // 5. Crecimiento dinámico e interpolación del Girasol 3D
    if (centerSunflower3D) {
      const u = centerSunflower3D.userData;

      u.currentHeight = THREE.MathUtils.lerp(u.currentHeight, u.targetHeight, 0.06);
      u.stemMesh.scale.y = u.currentHeight;

      u.currentHeadScale = THREE.MathUtils.lerp(u.currentHeadScale, u.targetHeadScale, 0.06);
      u.flowerHead.scale.set(u.currentHeadScale, u.currentHeadScale, u.currentHeadScale);
      u.flowerHead.position.y = u.currentHeight;

      u.flowerHead.rotation.z = Math.sin(elapsedTime * 0.8) * 0.06;

      const leafScale = Math.min(0.25 + (u.currentHeight / 26.0) * 0.85, 1.15);
      u.leaves.forEach((leaf) => {
        leaf.mesh.position.y = leaf.cfg.yRatio * u.currentHeight;
        const ls = leafScale * leaf.cfg.baseScale;
        leaf.mesh.scale.set(ls, ls, ls);
      });

      centerSunflower3D.rotation.z = Math.sin(elapsedTime * 1.2) * 0.035;
      centerSunflower3D.rotation.x = Math.cos(elapsedTime * 1.0) * 0.025;
    }

    // 6. Animación del núcleo central "MAYBETH" y los corazones con "Uli"
    if (centralMaybethGroup) {
      const maybethSprite = centralMaybethGroup.children[0];
      if (maybethSprite) {
        const pulse = 1.0 + Math.sin(elapsedTime * 2.2) * 0.035;
        maybethSprite.scale.set(78 * pulse, 23.4 * pulse, 1);
      }

      for (let i = 1; i < centralMaybethGroup.children.length; i++) {
        const h = centralMaybethGroup.children[i];
        if (h.userData.orbitAngle !== undefined) {
          const angle = h.userData.orbitAngle + elapsedTime * h.userData.orbitSpeed * 0.45;
          h.position.x = Math.cos(angle) * h.userData.orbitRadius;
          h.position.z = Math.sin(angle) * h.userData.orbitRadius;
          h.position.y = h.userData.yOffset + Math.sin(elapsedTime * 2.5 + i) * 1.6;
        }
      }
    }

    // 7. Flotación oscilante (bobbing) de cada flor y su frase
    flowersGroup.children.forEach((fGroup) => {
      const u = fGroup.userData;
      fGroup.position.y = u.baseY + Math.sin(elapsedTime * u.bobSpeed + u.bobOffset) * 1.4;
    });

    // 8. Actualizar Controles Orbitales
    if (!isWarping) {
      controls.update();
    }

    // 9. Renderizar
    renderer.render(scene, camera);
  }

  // --- HELPERS MATEMÁTICOS Y GRÁFICOS ---
  function roundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  function create5PointStarShape(rOuter, rInner) {
    const shape = new THREE.Shape();
    const points = 5;
    for (let i = 0; i < points * 2; i++) {
      const r = (i % 2 === 0) ? rOuter : rInner;
      const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }

  // Iniciar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

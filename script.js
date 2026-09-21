/**
 * ==========================================================================
 * FLORES AMARILLAS PARA MAYBETH - 3D INTERACTIVE GALAXY & FLOWERS
 * Personalizado especialmente para Maybeth con:
 * - Koala Celestial Vayolett
 * - Corazones rojos con Uli
 * - Letrero gigante destacado de MAYBETH
 * - Girasol interactivo en crecimiento al abrir cada notita
 * - Apodos cariñosos: Amorshote, Mi vidita, Te amodoro, Meycita bella
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
      angle: 2.2,
      radius: 52,
      height: 5
    },
    {
      id: 'flor-4',
      title: 'Hoy pienso en ti',
      desc: 'Hoy, como todos los días y cada segundo, estás presente en cada uno de mis pensamientos, amorshote. Cada recuerdo contigo es una sonrisa boba que no puedo evitar.',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 3.1,
      radius: 78,
      height: 7
    },
    {
      id: 'flor-5',
      title: 'Gracias por existir',
      desc: 'El universo es inmenso y tiene miles de millones de estrellas, pero mi mayor bendición y fortuna es tenerte a ti en este mundo, mi vidita. Gracias por existir y llenar mi vida de luz.',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 4.0,
      radius: 46,
      height: 3
    },
    {
      id: 'flor-6',
      title: 'Mi lugar favorito',
      desc: 'Mi lugar favorito en el mundo no es ninguna ciudad lejana ni un paisaje exótico... es simplemente estar abrazado a ti, Meycita bella, escuchando tu risa y sintiendo tu paz.',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 4.9,
      radius: 70,
      height: 5
    },
    {
      id: 'flor-7',
      title: 'Un girasol para ti',
      desc: 'Si pudiera regalarte un girasol por cada motivo que me das para sonreír y ser feliz, mi amorshote, tendrías un universo entero de flores solo para ti. ¡Te amodoro tanto!',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 5.7,
      radius: 58,
      height: 6
    },
    {
      id: 'flor-8',
      title: 'Septiembre siempre',
      desc: 'Que este 21 de septiembre quede grabado en tu corazoncito. Aunque ande a mil estudiando, mi amor por ti florece con más fuerza cada día, mi vidita hermosa.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 0.8,
      radius: 88,
      height: 8
    },
    {
      id: 'flor-9',
      title: 'El amarillo te queda bien',
      desc: 'Dicen que el amarillo es el color de la alegría y los nuevos comienzos, pero a mí simplemente me recuerda a tu luz tan única. ¡El amarillo te queda hermoso, Meycita bella!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 1.9,
      radius: 95,
      height: 7
    },
    {
      id: 'flor-10',
      title: 'Gracias por tanto',
      desc: 'Gracias por tu ternura, por tu comprensión, por hacerme reír y por hacerme sentir el hombre más afortunado de todo el mundo, mi amorshote adorado.',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 3.6,
      radius: 92,
      height: 6
    },
    {
      id: 'flor-11',
      title: 'Contigo siempre',
      desc: 'En cada paso, en cada sueño y en cada camino que elijamos recorrer, quiero ir de tu mano. Mi mayor deseo es cuidarte y verte feliz siempre, mi vidita.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 4.5,
      radius: 104,
      height: 9
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
  let galaxyPoints, skySunflowerPoints, accretionMesh, centralMaybethGroup;
  let vayolettSprite, centerSunflowerPlant, finaleBurstPoints;
  let flowersGroup = new THREE.Group();
  let interactiveObjects = [];
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();
  let hoveredObject = null;
  let clock = new THREE.Clock();
  let isStarted = false;
  let textureLoader = new THREE.TextureLoader();

  // Sistema de progreso del girasol
  const openedNotes = new Set();
  let sunflowerGrowthProgress = 0;
  let hasTriggeredFinale = false;

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
  const bottomBanner = document.getElementById('bottom-banner');
  const openedCountElem = document.getElementById('opened-count');

  // --- INICIALIZACIÓN PRINCIPAL ---
  function init() {
    const container = document.getElementById('canvas-container');

    // 1. Escena y Niebla
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030206, 0.0016);

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
    controls.autoRotate = true;
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
      clearTimeout(autoRotateTimeout);
      autoRotateTimeout = setTimeout(() => {
        controls.autoRotate = true;
      }, 3500);
    });

    // 5. Luces ambientales suaves
    const ambientLight = new THREE.AmbientLight(0xfff8e1, 1.3);
    scene.add(ambientLight);

    const centerPointLight = new THREE.PointLight(0xffd700, 3.5, 250);
    centerPointLight.position.set(0, 8, 0);
    scene.add(centerPointLight);

    // 6. Construir componentes del universo
    createStarfield();
    createSpiralGalaxy();
    // createSkySunflower();
    createVayolettKoala();
    createCenterSunflowerPlant();
    createCentralMaybeth();
    createInteractiveFlowers();

    // 7. Event Listeners
    setupEventListeners();

    // Iniciar loop de animación
    animate();

    // Verificación automatizada mediante parámetros URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      startExperience();
    }
    if (urlParams.get('modal') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      startExperience();
      setTimeout(() => {
        openModal(FLOWERS_DATA[0]);
      }, 300);
    }
  }

  // --- FONDO ESTELAR AMBIENTAL ---
  function createStarfield() {
    const starCount = 3800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 600 + Math.random() * 600;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const isGold = Math.random() > 0.4;
      colors[i * 3] = isGold ? 1.0 : 0.9;
      colors[i * 3 + 1] = isGold ? 0.85 + Math.random() * 0.15 : 0.95;
      colors[i * 3 + 2] = isGold ? 0.4 + Math.random() * 0.4 : 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);
  }

  // --- GALAXIA ESPIRAL DORADA DE FLORES AMARILLAS ---
  function createSpiralGalaxy() {
    const { count, radius, branches, spin, randomness, power } = GALAXY_PARAMS;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const insideColor = new THREE.Color(GALAXY_PARAMS.insideColor);
    const midColor = new THREE.Color(GALAXY_PARAMS.midColor);
    const outsideColor = new THREE.Color(GALAXY_PARAMS.outsideColor);

    for (let i = 0; i < count; i++) {
      const r = 10 + Math.pow(Math.random(), power) * (radius - 10);
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin * 0.05;

      const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * randomness * (r + 10);
      const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * randomness * (r * 0.2 + 2);
      const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * randomness * (r + 10);

      const x = Math.cos(branchAngle + spinAngle) * r + randomX;
      const y = randomY;
      const z = Math.sin(branchAngle + spinAngle) * r + randomZ;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixedColor = insideColor.clone();
      if (r < radius * 0.45) {
        mixedColor.lerp(midColor, (r - 10) / (radius * 0.45));
      } else {
        mixedColor.lerp(midColor, 0.7);
        mixedColor.lerp(outsideColor, (r - radius * 0.45) / (radius * 0.55));
      }

      if (Math.random() > 0.92) {
        mixedColor.addScalar(0.3);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleTexture = textureLoader.load('assets/particle.png');
    const material = new THREE.PointsMaterial({
      size: GALAXY_PARAMS.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.92
    });

    galaxyPoints = new THREE.Points(geometry, material);
    scene.add(galaxyPoints);

    // Disco de acreción en el centro con agujero negro
    const accTexture = textureLoader.load('assets/sprite_accretion.png');
    const accGeo = new THREE.PlaneGeometry(42, 42);
    const accMat = new THREE.MeshBasicMaterial({
      map: accTexture,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    accretionMesh = new THREE.Mesh(accGeo, accMat);
    accretionMesh.rotation.x = Math.PI / 2;
    accretionMesh.position.y = 0;
    scene.add(accretionMesh);
  }

  // --- GIRASOL CELESTIAL GIGANTE EN EL CIELO ---
  function createSkySunflower() {
    const particleCount = 4200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const petals = 10;
    const centerRadius = 8;
    const petalLength = 26;
    const petalWidth = 6.5;

    let pIdx = 0;
    const centerParticles = 1200;
    for (let i = 0; i < centerParticles; i++) {
      const r = Math.sqrt(Math.random()) * centerRadius;
      const angle = Math.random() * Math.PI * 2;

      positions[pIdx * 3] = Math.cos(angle) * r;
      positions[pIdx * 3 + 1] = Math.sin(angle) * r;
      positions[pIdx * 3 + 2] = (Math.random() - 0.5) * 3;

      colors[pIdx * 3] = 1.0;
      colors[pIdx * 3 + 1] = 0.75 + Math.random() * 0.2;
      colors[pIdx * 3 + 2] = 0.15;
      pIdx++;
    }

    const petalParticles = particleCount - centerParticles;
    const particlesPerPetal = Math.floor(petalParticles / petals);

    for (let p = 0; p < petals; p++) {
      const petalAngle = (p / petals) * Math.PI * 2;
      const cosA = Math.cos(petalAngle);
      const sinA = Math.sin(petalAngle);

      for (let j = 0; j < particlesPerPetal; j++) {
        const progress = Math.random();
        const dist = centerRadius + progress * petalLength;
        const w = Math.sin(progress * Math.PI) * petalWidth;
        const lateral = (Math.random() - 0.5) * w;

        const lx = dist;
        const ly = lateral;

        positions[pIdx * 3] = lx * cosA - ly * sinA;
        positions[pIdx * 3 + 1] = lx * sinA + ly * cosA;
        positions[pIdx * 3 + 2] = (Math.random() - 0.5) * 4;

        colors[pIdx * 3] = 1.0;
        colors[pIdx * 3 + 1] = 0.85 + Math.random() * 0.15;
        colors[pIdx * 3 + 2] = 0.2 + Math.random() * 0.3;
        pIdx++;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleTexture = textureLoader.load('assets/particle.png');
    const material = new THREE.PointsMaterial({
      size: 2.6,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.95
    });

    skySunflowerPoints = new THREE.Points(geometry, material);
    skySunflowerPoints.position.set(0, 68, -55);
    skySunflowerPoints.rotation.x = -0.15;
    scene.add(skySunflowerPoints);
  }

  // --- KOALA CELESTIAL VAYOLETT ("NUESTRA HIJITA") EN EL FONDO ---
  function createVayolettKoala() {
    const vayolettTex = textureLoader.load('assets/vayolett_koala.png');
    const vayolettMat = new THREE.SpriteMaterial({
      map: vayolettTex,
      transparent: true,
      depthWrite: false
    });

    vayolettSprite = new THREE.Sprite(vayolettMat);
    // Tamaño imponente en el fondo cósmico, visible como guardiana estelar
    vayolettSprite.scale.set(120, 151, 1);
    vayolettSprite.position.set(0, 18, -195);
    vayolettSprite.userData = {
      isVayolett: true,
      title: '★ VAYOLETT ★',
      desc: '¡Hola mami Meycita bella! Soy Vayolett, su hijita. Desde aquí en las estrellas los cuido siempre y veo lo mucho que se aman. Papi Uli te adora con toda su alma. ¡Feliz día de las flores amarillas! 🐨💛✨',
      svg: 'assets/vayolett_koala.png'
    };

    scene.add(vayolettSprite);
    interactiveObjects.push(vayolettSprite);
  }

  // --- GIRASOL INTERACTIVO QUE CRECE EN EL MEDIO AL ABRIR NOTITAS ---
  function createCenterSunflowerPlant() {
    centerSunflowerPlant = new THREE.Group();

    // 1. Tallo y hojas (Representación con sprites de alta resolución)
    const flowerTex = textureLoader.load('assets/sunflower.svg');
    const flowerMat = new THREE.SpriteMaterial({
      map: flowerTex,
      transparent: true,
      depthWrite: false
    });
    const plantSprite = new THREE.Sprite(flowerMat);
    plantSprite.scale.set(24, 30, 1);
    plantSprite.position.set(0, 15, 0);
    centerSunflowerPlant.add(plantSprite);

    // 2. Halo de crecimiento dorado
    const haloTex = textureLoader.load('assets/particle.png');
    const haloMat = new THREE.SpriteMaterial({
      map: haloTex,
      color: 0xffd700,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.7
    });
    const plantHalo = new THREE.Sprite(haloMat);
    plantHalo.scale.set(32, 32, 1);
    plantHalo.position.set(0, 15, 0);
    centerSunflowerPlant.add(plantHalo);

    // Escala inicial: brote pequeño (crecerá conforme abra notitas)
    centerSunflowerPlant.scale.set(0.18, 0.18, 0.18);
    centerSunflowerPlant.position.set(0, 0, 0);

    scene.add(centerSunflowerPlant);
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
    // Escala gigante visible desde cualquier ángulo
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

    // 2. Corazones Rojitos con el nombre de "Uli" orbitando en 3D
    const heartUliTex = textureLoader.load('assets/sprite_heart_uli.png');
    const heartCount = 8;

    for (let i = 0; i < heartCount; i++) {
      const hMat = new THREE.SpriteMaterial({
        map: heartUliTex,
        transparent: true,
        depthWrite: false
      });
      const hSprite = new THREE.Sprite(hMat);
      hSprite.scale.set(6.8, 6.8, 1);
      hSprite.userData = {
        orbitAngle: (i / heartCount) * Math.PI * 2,
        orbitRadius: 26 + (i % 3) * 4,
        orbitSpeed: 0.75 + (i * 0.08),
        yOffset: 14 + (i % 2 === 0 ? -4 : 4)
      };
      centralMaybethGroup.add(hSprite);
    }

    scene.add(centralMaybethGroup);
  }

  // --- CREACIÓN DE FLORES 3D INTERACTIVAS Y SUS FRASES ---
  function createInteractiveFlowers() {
    scene.add(flowersGroup);

    FLOWERS_DATA.forEach((flowerData) => {
      const flowerSubGroup = new THREE.Group();

      const x = Math.cos(flowerData.angle) * flowerData.radius;
      const z = Math.sin(flowerData.angle) * flowerData.radius;
      const y = flowerData.height;

      flowerSubGroup.position.set(x, y, z);
      flowerSubGroup.userData = {
        baseY: y,
        bobSpeed: 1.6 + Math.random() * 0.6,
        bobOffset: Math.random() * Math.PI * 2,
        data: flowerData
      };

      // 1. Sprite de la Flor
      const flowerTex = textureLoader.load(flowerData.sprite);
      const flowerSpriteMat = new THREE.SpriteMaterial({
        map: flowerTex,
        transparent: true,
        depthWrite: false
      });
      const flowerSprite = new THREE.Sprite(flowerSpriteMat);

      const scaleVal = flowerData.type === 'bouquet' ? 14 : (flowerData.type === 'roses' ? 13 : 11);
      flowerSprite.scale.set(scaleVal, scaleVal, 1);
      flowerSprite.position.set(0, scaleVal * 0.35, 0);

      flowerSprite.userData = {
        isFlower: true,
        parentGroup: flowerSubGroup,
        baseScale: scaleVal,
        data: flowerData
      };

      flowerSubGroup.add(flowerSprite);
      interactiveObjects.push(flowerSprite);

      // 2. Halo de Luz bajo la flor
      const haloCanvas = document.createElement('canvas');
      haloCanvas.width = 128;
      haloCanvas.height = 128;
      const hctx = haloCanvas.getContext('2d');
      const grad = hctx.createRadialGradient(64, 64, 5, 64, 64, 60);
      grad.addColorStop(0, 'rgba(255, 235, 59, 0.9)');
      grad.addColorStop(0.5, 'rgba(255, 179, 0, 0.4)');
      grad.addColorStop(1, 'rgba(255, 152, 0, 0)');
      hctx.fillStyle = grad;
      hctx.fillRect(0, 0, 128, 128);

      const haloTex = new THREE.CanvasTexture(haloCanvas);
      const haloGeo = new THREE.PlaneGeometry(scaleVal * 1.5, scaleVal * 1.5);
      const haloMat = new THREE.MeshBasicMaterial({
        map: haloTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.rotation.x = Math.PI / 2;
      haloMesh.position.y = 0.2;
      flowerSubGroup.add(haloMesh);

      // 3. Etiqueta con la frase romántica en 3D
      const labelSprite = createTextLabelSprite(flowerData.title);
      labelSprite.position.set(0, -1.2, 0);
      flowerSubGroup.add(labelSprite);

      flowersGroup.add(flowerSubGroup);
    });
  }

  // --- CREAR ETIQUETAS DE TEXTO 3D CON ESTILO LUMINOSO ---
  function createTextLabelSprite(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.font = 'bold 44px "Caveat", "Dancing Script", cursive, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.strokeStyle = 'rgba(5, 2, 10, 0.88)';
    ctx.lineWidth = 7;
    ctx.strokeText(text, 256, 64);

    ctx.shadowColor = 'rgba(255, 215, 0, 0.95)';
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#fffde7';
    ctx.fillText(text, 256, 64);

    ctx.shadowBlur = 8;
    ctx.fillStyle = '#ffffff';
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

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      setTimeout(startExperience, 200);
    }
  }

  // --- INICIAR EXPERIENCIA ---
  function startExperience() {
    if (isStarted) return;
    isStarted = true;

    playAudio();

    introScreen.classList.add('fade-out');
    setTimeout(() => {
      if (introScreen) introScreen.style.display = 'none';
    }, 1200);

    const startY = 160;
    const targetY = 95;
    const startZ = 240;
    const targetZ = 155;
    const duration = 2400;
    const startTime = performance.now();

    function flyIn(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      camera.position.y = startY - (startY - targetY) * ease;
      camera.position.z = startZ - (startZ - targetZ) * ease;
      controls.target.set(0, 0, 0);

      if (progress < 1) {
        requestAnimationFrame(flyIn);
      }
    }
    requestAnimationFrame(flyIn);
  }

  // --- GESTIÓN DE AUDIO ---
  function playAudio() {
    if (!bgMusic) return;
    bgMusic.play().then(() => {
      musicBars.classList.remove('paused');
      audioStatusText.textContent = 'Música';
    }).catch((err) => {
      console.warn('Autoplay bloqueado o archivo no listo:', err);
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

      // Registrar progreso de crecimiento del girasol
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

  // --- ACTUALIZAR CRECIMIENTO DEL GIRASOL EN EL CENTRO ---
  function updateSunflowerGrowth() {
    const count = openedNotes.size;
    if (openedCountElem) {
      openedCountElem.textContent = count;
    }

    // Progreso de 0 a 1
    sunflowerGrowthProgress = count / 12.0;

    // Si abrió todas las 12 notitas: ¡GRAN FINAL!
    if (count === 12 && !hasTriggeredFinale) {
      hasTriggeredFinale = true;
      setTimeout(triggerGrandFinale, 600);
    }
  }

  // --- GRAN FINAL CUANDO ABRE TODAS LAS NOTITAS ---
  function triggerGrandFinale() {
    // 1. Crear explosión de fuegos estelares dorados en el centro
    const burstCount = 1500;
    const bGeo = new THREE.BufferGeometry();
    const bPos = new Float32Array(burstCount * 3);
    const bVel = new Float32Array(burstCount * 3);

    for (let i = 0; i < burstCount; i++) {
      bPos[i * 3] = 0;
      bPos[i * 3 + 1] = 15;
      bPos[i * 3 + 2] = 0;

      const speed = 25 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      bVel[i * 3] = Math.sin(phi) * Math.cos(theta) * speed;
      bVel[i * 3 + 1] = Math.cos(phi) * speed + 10;
      bVel[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * speed;
    }

    bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
    const pTex = textureLoader.load('assets/particle.png');
    const bMat = new THREE.PointsMaterial({
      size: 3.5,
      map: pTex,
      color: 0xffd700,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    finaleBurstPoints = new THREE.Points(bGeo, bMat);
    scene.add(finaleBurstPoints);

    // 2. Animar partículas del estallido
    let burstStart = performance.now();
    function animateBurst(now) {
      const elapsed = (now - burstStart) / 1000.0;
      const pos = bGeo.attributes.position.array;
      for (let i = 0; i < burstCount; i++) {
        pos[i * 3] += bVel[i * 3] * 0.016;
        pos[i * 3 + 1] += bVel[i * 3 + 1] * 0.016 - 0.2; // gravedad
        pos[i * 3 + 2] += bVel[i * 3 + 2] * 0.016;
      }
      bGeo.attributes.position.needsUpdate = true;
      bMat.opacity = Math.max(0, 1 - elapsed / 3.0);

      if (elapsed < 3.5) {
        requestAnimationFrame(animateBurst);
      } else {
        scene.remove(finaleBurstPoints);
      }
    }
    requestAnimationFrame(animateBurst);

    // 3. Abrir la tarjeta final de celebración
    setTimeout(() => {
      openModal({
        title: '¡FLORECIÓ TU GIRASOL GIGANTE, MEYCITA BELLA! 🌻',
        desc: '¡Has descubierto todas las notitas de nuestra galaxia! Tu amor y dulzura hicieron florecer el girasol más hermoso del cosmos. Maybeth, eres muy especial para mí. Aunque ande a mil estudiando y desvelándome, todo mi esfuerzo es pensando en nuestro futuro. ¡Te debo algo muchote grandote! Te amodoro con toda mi alma, mi amorshote. ❤️🌻 — Tu Uli',
        svg: 'assets/sunflower.svg'
      });
    }, 1200);
  }

  // --- ABRIR Y CERRAR MODAL ---
  function openModal(data) {
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalImg.src = data.svg || 'assets/sunflower.svg';

    flowerModal.classList.add('active');
    controls.autoRotate = false;
  }

  function closeModal() {
    flowerModal.classList.remove('active');
    controls.autoRotate = true;
  }

  // --- RESTABLECER VISTA DE CÁMARA ---
  function resetCameraView() {
    const startPos = camera.position.clone();
    const targetPos = new THREE.Vector3(0, 95, 155);
    const startTime = performance.now();
    const duration = 1200;

    function animateCam(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPos, targetPos, ease);
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

    const elapsedTime = clock.getElapsedTime();

    // 1. Rotación suave de la galaxia espiral
    if (galaxyPoints) {
      galaxyPoints.rotation.y = elapsedTime * 0.04;
    }

    // 2. Rotación del disco de acreción central
    if (accretionMesh) {
      accretionMesh.rotation.z = -elapsedTime * 0.15;
    }

    // 3. Animación de respiración / brillo del girasol gigante en el cielo
    if (skySunflowerPoints) {
      skySunflowerPoints.rotation.z = Math.sin(elapsedTime * 0.4) * 0.03;
      skySunflowerPoints.position.y = 68 + Math.sin(elapsedTime * 0.8) * 1.5;
    }

    // 4. Animación del Koala Celestial VAYOLETT
    if (vayolettSprite) {
      vayolettSprite.position.y = 18 + Math.sin(elapsedTime * 0.7) * 2.5;
      // Suave respiración
      const breath = 1.0 + Math.sin(elapsedTime * 1.1) * 0.025;
      vayolettSprite.scale.set(120 * breath, 151 * breath, 1);
    }

    // 5. Crecimiento dinámico del girasol central
    if (centerSunflowerPlant) {
      // Escala objetivo basada en las notas abiertas:
      // Si 0 notas: escala 0.22
      // Si 12 notas: escala 2.8 (¡Girasol gigante!)
      const targetScale = hasTriggeredFinale ? 2.8 : (0.22 + sunflowerGrowthProgress * 1.8);
      centerSunflowerPlant.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);

      // Oscilación suave
      centerSunflowerPlant.rotation.y = Math.sin(elapsedTime * 0.5) * 0.1;
      centerSunflowerPlant.position.y = Math.sin(elapsedTime * 1.5) * 0.8;
    }

    // 6. Animación del núcleo central "MAYBETH" y los corazones con "Uli"
    if (centralMaybethGroup) {
      const maybethSprite = centralMaybethGroup.children[0];
      if (maybethSprite) {
        // Pulso suave del letrero gigante MAYBETH
        const pulse = 1.0 + Math.sin(elapsedTime * 2.2) * 0.035;
        maybethSprite.scale.set(78 * pulse, 23.4 * pulse, 1);
      }

      // Orbitar los 8 corazones rojos de "Uli" en 3D
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
    controls.update();

    // 9. Renderizar
    renderer.render(scene, camera);
  }

  // Iniciar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

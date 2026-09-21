/**
 * ==========================================================================
 * PARAMIMEY - FLORES AMARILLAS DE ULI PARA MAYBETH
 * 3D INTERACTIVE GALAXY, FLOWERS & CELESTIAL HEART
 * ==========================================================================
 */

(function () {
  'use strict';

  // --- CONFIGURACIÓN DE LA GALAXIA ---
  const GALAXY_PARAMS = {
    count: 65000,
    size: 2.3,
    radius: 145,
    branches: 5,
    spin: 1.4,
    randomness: 0.46,
    power: 3.1,
    insideColor: '#fffde7',
    midColor: '#ffd54f',
    outsideColor: '#ff6f00'
  };

  // --- 20 NOTITAS CON PALABRAS CARIÑOSAS DE ULI ---
  const FLOWERS_DATA = [
    {
      id: 'flor-1',
      title: 'Mi Cuchi Cuchi hermosa 💕',
      desc: 'No te imaginas lo mucho que te amo, mi cuchi cuchi. Desde el primer momento en que te conocí supe que eras alguien fuera de este mundo. ¡Gracias por cada risa, cada abrazo y cada segundo juntos!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 0.15,
      radius: 38,
      height: 3,
      speed: 0.045
    },
    {
      id: 'flor-2',
      title: 'Mi princesita bella 👑',
      desc: 'Eres mi princesa favorita en todo el universo, mi Meycita. No hay nada en este planeta que me haga más feliz que verte sonreír. ¡Te mereces todas las flores amarillas del cielo!',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 0.78,
      radius: 46,
      height: -3,
      speed: 0.040
    },
    {
      id: 'flor-3',
      title: 'Mi cosita bella 🌸',
      desc: 'Mi cosita bella, hermosa por dentro y por fuera. Amo cada una de tus ocurrencias, tus manías bonitas y la ternura con la que me miras. ¡Te amodoro con todo mi corazón!',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 1.41,
      radius: 54,
      height: 4,
      speed: 0.036
    },
    {
      id: 'flor-4',
      title: 'Mi amorshoteeeee 💛',
      desc: '¡Mi amorshoteeeee! Aunque ahorita ande a mil estudiando y desvelándome por los exámenes, quiero que sepas que ni por un segundo sales de mi mente. ¡Eres mi prioridad hoy y siempre!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 2.05,
      radius: 62,
      height: -4,
      speed: 0.032
    },
    {
      id: 'flor-5',
      title: 'Mi niña guapa ✨',
      desc: 'Mi niña guapa, la más hermosa de todas. Cada vez que te veo me vuelvo a enamorar como el primer día. Tu belleza me deslumbra más que cualquier estrella de esta galaxia.',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 2.68,
      radius: 70,
      height: 5,
      speed: 0.029
    },
    {
      id: 'flor-6',
      title: 'Mi cielito lindo 🌌',
      desc: 'Eres mi cielo en los días nublados, mi calma en las tormentas y la paz que mi alma necesita. Hablar contigo me reinicia el día, mi amorshote. ¡Te amodoro infinito!',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 3.32,
      radius: 78,
      height: -5,
      speed: 0.026
    },
    {
      id: 'flor-7',
      title: 'Mi amorcito de mi vida ❤️',
      desc: 'Mi amorcito, gracias por tener tanta paciencia conmigo y por apoyarme siempre en todo. No todos se quedan cuando las cosas se ponen difíciles, pero tú sí, y eso vale oro puro para mí.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 3.95,
      radius: 86,
      height: 4,
      speed: 0.024
    },
    {
      id: 'flor-8',
      title: 'Meycita bella 🌻',
      desc: 'Meycita bella, eres la dueña absoluta de mis pensamientos. Cada que cierro los ojos antes de dormir le pido a Dios que te cuide y que me permita hacerte la mujer más feliz del mundo.',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 4.58,
      radius: 94,
      height: -4,
      speed: 0.022
    },
    {
      id: 'flor-9',
      title: 'Mi vidita entera 💕',
      desc: 'Eres mi vidita, mi tesoro más grande y mi destino favorito. Donde tú estés, ahí es donde quiero estar yo. Construir un futuro contigo es el sueño más bonito que tengo.',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 5.22,
      radius: 102,
      height: 5,
      speed: 0.020
    },
    {
      id: 'flor-10',
      title: 'Te amodoro de Uliiiii 🥰',
      desc: '¡Te amodoro con locura, mi amor! No hay palabras en ningún diccionario que alcancen a describir lo mucho que siento por ti. ¡Siempre serás mi amor eterno!',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 5.85,
      radius: 110,
      height: -5,
      speed: 0.019
    },
    {
      id: 'flor-11',
      title: 'Gracias por quedarte 💛',
      desc: 'Gracias por cada consejo, por cada palabra bonita y por quedarte a mi lado incluso cuando tengo mil cosas encima. Te prometo que te voy a recompensar todo este tiempo, amorshote.',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 0.45,
      radius: 42,
      height: -3,
      speed: 0.042
    },
    {
      id: 'flor-12',
      title: 'El amarillo te queda hermoso 🌟',
      desc: 'Dicen que las flores amarillas representan la felicidad pura, y es exactamente lo que tú trajiste a mi vida desde el día en que llegaste. ¡Eres mi luz de siempre, Mey!',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 1.10,
      radius: 50,
      height: 4,
      speed: 0.038
    },
    {
      id: 'flor-13',
      title: 'Tu sonrisa me sana 💫',
      desc: 'Basta con ver una foto tuya o escuchar un audio tuyo riéndote para que se me olviden todas las preocupaciones del día. ¡Tu sonrisa es mi lugar seguro!',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 1.75,
      radius: 58,
      height: -4,
      speed: 0.034
    },
    {
      id: 'flor-14',
      title: 'Septiembre y siempre 🌼',
      desc: 'No solo en septiembre te mereces flores amarillas... te mereces detalles, cariñitos y mimos los 365 días del año, mi cuchi cuchi hermosa.',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 2.38,
      radius: 66,
      height: 5,
      speed: 0.030
    },
    {
      id: 'flor-15',
      title: 'Mi coincidencia favorita 💖',
      desc: 'De todas las personas y todos los caminos posibles, coincidir contigo ha sido el milagro más hermoso que la vida me ha regalado. ¡Gracias por existir!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 3.02,
      radius: 74,
      height: -5,
      speed: 0.027
    },
    {
      id: 'flor-16',
      title: 'Construyendo un nosotros 🏰',
      desc: 'Paso a pasito, día a día, estamos construyendo algo tan bonito y real. Te prometo que daré siempre lo mejor de mí para cuidarte y hacerte sonreír cada día más.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 3.65,
      radius: 82,
      height: 4,
      speed: 0.025
    },
    {
      id: 'flor-17',
      title: 'Cada pequeño detalle de ti ✨',
      desc: 'Amo tus ojitos bellos, amo tu vocecita tierna, amo la forma en que me dices las cosas y amo cada pequeño detalle que te hace ser la persona más especial del mundo.',
      type: 'bouquet',
      sprite: 'assets/sprite_bouquet.png',
      svg: 'assets/bouquet.svg',
      angle: 4.28,
      radius: 90,
      height: -4,
      speed: 0.023
    },
    {
      id: 'flor-18',
      title: 'Te elijo hoy y siempre 💍',
      desc: 'Si volviera a nacer mil veces, en todas y cada una de esas vidas te buscaría hasta encontrarte y volverte a elegir. Eres mi único amor verdadero.',
      type: 'daisy',
      sprite: 'assets/sprite_daisy.png',
      svg: 'assets/daisy.svg',
      angle: 4.92,
      radius: 98,
      height: 5,
      speed: 0.021
    },
    {
      id: 'flor-19',
      title: 'Te debo algo grandote 🎁',
      desc: 'Sé que ahorita ando a full con la universidad mi amor, pero esto es solo el inicio. ¡Te debo algo muchísimo más grandote y especial que te va a encantar! ¡Te amodoro!',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 5.55,
      radius: 106,
      height: -5,
      speed: 0.019
    },
    {
      id: 'flor-20',
      title: 'Para ti, Maybeth mi universo 🌻💛',
      desc: 'Toda esta galaxia, cada estrella, cada cometa y cada pétalo dorado fueron creados con todo mi amor pensando únicamente en ti. ¡Feliz día de las flores amarillas, Meycita de mi vida!',
      type: 'sunflower',
      sprite: 'assets/sprite_sunflower.png',
      svg: 'assets/sunflower.svg',
      angle: 6.18,
      radius: 114,
      height: 4,
      speed: 0.018
    }
  ];

  // --- VARIABLES THREE.JS ---
  let scene, camera, renderer, controls;
  let universeGroup = new THREE.Group();
  let galaxyPoints, accretionMesh, centralMaybethGroup;
  let celestialHeartGroup, vayolettSignGroup;
  let centerSunflower3D, finaleBurstPoints;
  let flowersGroup = new THREE.Group();
  let meteorsGroup = null;
  let interactiveObjects = [];
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();
  let hoveredObject = null;
  let clock = new THREE.Clock();
  let isStarted = false;
  let textureLoader = new THREE.TextureLoader();

  // Intro épica de 6.5 segundos
  let isIntroAnimating = false;
  let introStartTime = 0;
  const INTRO_DURATION = 6500;
  let galaxyStartPos = [];
  let galaxyTargetPos = [];

  // Sistema de progreso
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
  const openedCountElem = document.getElementById('opened-count');
  const volumeSlider = document.getElementById('volume-slider');
  const volIcon = document.getElementById('vol-icon');

  // Modal secreto de fotos
  const photoModal = document.getElementById('photo-modal');
  const secretPhotoImg = document.getElementById('secret-photo-img');
  const secretPhotoTitle = document.getElementById('secret-photo-title');
  const secretPhotoDesc = document.getElementById('secret-photo-desc');
  const btnMirame = document.getElementById('btn-mirame');
  const photoModalCloseBtn = document.getElementById('photo-modal-close-btn');
  let mirameTimer = null;
  let currentSecretPhotoIndex = 1;

  // --- INICIALIZACIÓN ---
  function init() {
    const container = document.getElementById('canvas-container');

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020106, 0.0011);

    scene.add(universeGroup);

    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(55, aspect, 0.5, 3500);
    // Posición inicial de la cámara para la intro (alta y majestuosa)
    camera.position.set(0, 180, 50);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.45;
    controls.maxDistance = 550;
    // Permite acercarse muchísimo más (de 35 a 8) para ver cada detalle
    controls.minDistance = 8;
    controls.target.set(0, 0, 0);

    let autoRotateTimeout;
    controls.addEventListener('start', () => {
      controls.autoRotate = false;
      clearTimeout(autoRotateTimeout);
    });
    controls.addEventListener('end', () => {
      if (!isIntroAnimating && isStarted) {
        clearTimeout(autoRotateTimeout);
        autoRotateTimeout = setTimeout(() => {
          controls.autoRotate = true;
        }, 3500);
      }
    });

    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.6);
    scene.add(ambientLight);

    const centerPointLight = new THREE.PointLight(0xffd700, 4.2, 300);
    centerPointLight.position.set(0, 10, 0);
    universeGroup.add(centerPointLight);

    const cosmicLight = new THREE.PointLight(0x9933ff, 2.5, 600);
    cosmicLight.position.set(0, -30, -140);
    universeGroup.add(cosmicLight);

    // Construcción de la galaxia
    createStarfield();
    createDeepSpaceNebulae();
    createSpiralGalaxy();
    createCelestialParticleHeart();
    createVayolettCelestialSign();
    createCenterSunflower3D();
    createCentralMaybeth();
    createInteractiveOrbitingFlowers();
    createMeteors();

    // Event Listeners y Audio
    setupEventListeners();
    setupAudioControls();

    // Iniciar loop de render
    animate();

    // Parámetros URL para pruebas rápidas
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      camera.position.set(0, 52, 135);
      controls.target.set(0, 0, 0);
      controls.autoRotate = true;
      isStarted = true;
    }
    if (urlParams.get('bloom') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      camera.position.set(0, 52, 135);
      controls.target.set(0, 0, 0);
      controls.autoRotate = true;
      isStarted = true;
      for (let i = 1; i <= 20; i++) openedNotes.add('flor-' + i);
      if (urlParams.get('nomodal') === '1') {
        hasTriggeredFinale = true;
      }
      updateSunflowerGrowth();
      if (centerSunflower3D) {
        centerSunflower3D.userData.currentHeight = centerSunflower3D.userData.targetHeight;
        centerSunflower3D.userData.currentHeadScale = centerSunflower3D.userData.targetHeadScale;
      }
    }
    if (urlParams.get('photo') === '1') {
      if (introScreen) introScreen.style.display = 'none';
      camera.position.set(0, 52, 135);
      controls.target.set(0, 0, 0);
      isStarted = true;
      openPhotoModal();
    }
  }

  // --- FONDO ESTELAR PROFUNDO ---
  function createStarfield() {
    const starCount = 9500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

      const shade = 0.65 + Math.random() * 0.35;
      const rnd = Math.random();
      if (rnd > 0.6) {
        colors[i * 3] = shade;
        colors[i * 3 + 1] = shade * 0.92;
        colors[i * 3 + 2] = shade * 0.4;
      } else if (rnd > 0.3) {
        colors[i * 3] = shade * 0.85;
        colors[i * 3 + 1] = shade * 0.82;
        colors[i * 3 + 2] = shade;
      } else {
        colors[i * 3] = shade;
        colors[i * 3 + 1] = shade * 0.65;
        colors[i * 3 + 2] = shade * 0.95;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pTex = textureLoader.load('assets/particle.png');
    const material = new THREE.PointsMaterial({
      size: 2.5,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: pTex,
      transparent: true,
      opacity: 0.9
    });

    const starfield = new THREE.Points(geometry, material);
    scene.add(starfield);
  }

  // --- NEBULOSAS CÓSMICAS REALISTAS ---
  function createDeepSpaceNebulae() {
    const pTex = textureLoader.load('assets/particle.png');
    const nebulae = [
      { color: 0xba55d3, x: -90, y: 35, z: -200, size: 110, count: 650 },
      { color: 0xff1493, x: 100, y: -20, z: -240, size: 95, count: 550 },
      { color: 0x00ced1, x: -70, y: 45, z: -270, size: 85, count: 450 },
      { color: 0xffa500, x: 60, y: -30, z: -170, size: 70, count: 400 },
      { color: 0x8a2be2, x: 0, y: 55, z: -320, size: 120, count: 750 }
    ];

    nebulae.forEach(nd => {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(nd.count * 3);
      for (let i = 0; i < nd.count; i++) {
        pos[i * 3] = nd.x + (Math.random() - 0.5) * nd.size * 2;
        pos[i * 3 + 1] = nd.y + (Math.random() - 0.5) * nd.size;
        pos[i * 3 + 2] = nd.z + (Math.random() - 0.5) * nd.size;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        size: 9.0,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        color: nd.color,
        map: pTex,
        transparent: true,
        opacity: 0.14
      });
      scene.add(new THREE.Points(geo, mat));
    });
  }

  // --- GALAXIA ESPIRAL FORMÁNDOSE EN ESPIRAL ---
  function createSpiralGalaxy() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(GALAXY_PARAMS.count * 3);
    const colors = new Float32Array(GALAXY_PARAMS.count * 3);

    galaxyStartPos = new Float32Array(GALAXY_PARAMS.count * 3);
    galaxyTargetPos = new Float32Array(GALAXY_PARAMS.count * 3);

    const colorInside = new THREE.Color(GALAXY_PARAMS.insideColor);
    const colorMid = new THREE.Color(GALAXY_PARAMS.midColor);
    const colorOutside = new THREE.Color(GALAXY_PARAMS.outsideColor);

    for (let i = 0; i < GALAXY_PARAMS.count; i++) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), GALAXY_PARAMS.power) * GALAXY_PARAMS.radius;
      const spinAngle = radius * GALAXY_PARAMS.spin;
      const branchAngle = ((i % GALAXY_PARAMS.branches) / GALAXY_PARAMS.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_PARAMS.randomness * radius;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_PARAMS.randomness * (radius * 0.4);
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * GALAXY_PARAMS.randomness * radius;

      const finalX = Math.cos(branchAngle + spinAngle) * radius + randomX;
      const finalY = randomY;
      const finalZ = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      galaxyTargetPos[i3] = finalX;
      galaxyTargetPos[i3 + 1] = finalY;
      galaxyTargetPos[i3 + 2] = finalZ;

      // Posición de inicio para la formación: nube expansiva que colapsa en espiral
      const expandR = radius * 3.6 + 60;
      const startAngle = branchAngle + spinAngle + 3.8 * Math.PI;
      galaxyStartPos[i3] = Math.cos(startAngle) * expandR + (Math.random() - 0.5) * 60;
      galaxyStartPos[i3 + 1] = randomY * 4.5 + (Math.random() - 0.5) * 80;
      galaxyStartPos[i3 + 2] = Math.sin(startAngle) * expandR + (Math.random() - 0.5) * 60;

      // Posición inicial actual
      positions[i3] = galaxyStartPos[i3];
      positions[i3 + 1] = galaxyStartPos[i3 + 1];
      positions[i3 + 2] = galaxyStartPos[i3 + 2];

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
      opacity: 0.95
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
    const accGeo = new THREE.PlaneGeometry(52, 52);
    accretionMesh = new THREE.Mesh(accGeo, accMat);
    accretionMesh.rotation.x = Math.PI / 2;
    accretionMesh.position.set(0, 0.2, 0);
    universeGroup.add(accretionMesh);
  }

  // --- GRAN CORAZÓN CELESTIAL DE PARTÍCULAS DORADAS (EN LO ALTO DEL CIELO) ---
  function createCelestialParticleHeart() {
    celestialHeartGroup = new THREE.Group();
    // Ubicado majestuosamente en el cielo cósmico arriba de Maybeth
    celestialHeartGroup.position.set(0, 32, -35);

    const heartParticleCount = 4200;
    const hGeo = new THREE.BufferGeometry();
    const hPos = new Float32Array(heartParticleCount * 3);
    const hCol = new Float32Array(heartParticleCount * 3);

    const colorGold = new THREE.Color(0xffd700);
    const colorPink = new THREE.Color(0xff80ab);
    const colorAmber = new THREE.Color(0xffab00);

    for (let i = 0; i < heartParticleCount; i++) {
      const t = Math.random() * Math.PI * 2;
      // Ecuación paramétrica de corazón 3D
      let x = 16 * Math.pow(Math.sin(t), 3);
      let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

      // Partículas interiores y de contorno
      const isPerimeter = i < heartParticleCount * 0.55;
      const factor = isPerimeter ? 1.0 + (Math.random() - 0.5) * 0.08 : Math.sqrt(Math.random());
      x *= factor * 1.35;
      y *= factor * 1.35;
      const z = (Math.random() - 0.5) * (isPerimeter ? 4.0 : 8.0);

      hPos[i * 3] = x;
      hPos[i * 3 + 1] = y;
      hPos[i * 3 + 2] = z;

      // Colores dorados y rosados cálidos
      const mixC = colorGold.clone();
      if (Math.random() > 0.65) {
        mixC.lerp(colorPink, 0.7);
      } else {
        mixC.lerp(colorAmber, Math.random() * 0.5);
      }
      hCol[i * 3] = mixC.r;
      hCol[i * 3 + 1] = mixC.g;
      hCol[i * 3 + 2] = mixC.b;
    }

    hGeo.setAttribute('position', new THREE.BufferAttribute(hPos, 3));
    hGeo.setAttribute('color', new THREE.BufferAttribute(hCol, 3));

    const pTex = textureLoader.load('assets/particle.png');
    const hMat = new THREE.PointsMaterial({
      size: 2.8,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      map: pTex,
      transparent: true,
      opacity: 0.92
    });

    const heartPoints = new THREE.Points(hGeo, hMat);
    celestialHeartGroup.add(heartPoints);

    // Texto sutil dentro del corazón
    const hLabel = createTextLabelSprite('Te amo infinito 💛');
    hLabel.position.set(0, -1, 2);
    hLabel.scale.set(24, 6, 1);
    celestialHeartGroup.add(hLabel);

    celestialHeartGroup.scale.set(0.001, 0.001, 0.001); // Comienza invisible para intro
    universeGroup.add(celestialHeartGroup);
  }

  // --- NOMBRE CELESTIAL DE VAYOLETT (SOLAMENTE EL NOMBRE ARRIBA CON ESTRELLITAS) ---
  function createVayolettCelestialSign() {
    vayolettSignGroup = new THREE.Group();
    // Ubicado en lo más alto del firmamento cósmico (z = -75, y = 52)
    vayolettSignGroup.position.set(0, 52, -75);

    const bannerCanvas = document.createElement('canvas');
    bannerCanvas.width = 680;
    bannerCanvas.height = 170;
    const bCtx = bannerCanvas.getContext('2d');
    bCtx.clearRect(0, 0, 680, 170);

    const bGrad = bCtx.createLinearGradient(0, 0, 0, 170);
    bGrad.addColorStop(0, 'rgba(20, 8, 42, 0.95)');
    bGrad.addColorStop(1, 'rgba(8, 3, 20, 0.92)');
    bCtx.fillStyle = bGrad;
    bCtx.strokeStyle = '#ffd54f';
    bCtx.lineWidth = 4;
    roundRect(bCtx, 15, 15, 650, 140, 30, true, true);

    bCtx.font = 'bold 56px system-ui, -apple-system, sans-serif';
    bCtx.textAlign = 'center';
    bCtx.fillStyle = '#ffecb3';
    bCtx.shadowColor = '#ffb300';
    bCtx.shadowBlur = 18;
    bCtx.fillText('★  VAYOLETT  ★', 340, 80);

    bCtx.font = '22px system-ui, -apple-system, sans-serif';
    bCtx.fillStyle = '#e0c8ff';
    bCtx.shadowBlur = 8;
    bCtx.shadowColor = '#8844ff';
    bCtx.fillText('Nuestra Hijita de las Estrellas 🐨✨', 340, 124);

    const bannerTex = new THREE.CanvasTexture(bannerCanvas);
    const bannerMat = new THREE.SpriteMaterial({
      map: bannerTex,
      transparent: true,
      depthWrite: false
    });
    const bannerSprite = new THREE.Sprite(bannerMat);
    bannerSprite.scale.set(44, 11, 1);
    vayolettSignGroup.add(bannerSprite);

    // Estrellas 3D doradas orbitando el letrero
    const starShape = create5PointStarShape(2.2, 1.0);
    const starGeo = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.15,
      bevelSize: 0.15,
      bevelSegments: 2
    });
    const goldStarMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xffa000,
      emissiveIntensity: 0.5
    });

    const starL = new THREE.Mesh(starGeo, goldStarMat);
    starL.position.set(-25, 0, 1.5);
    vayolettSignGroup.add(starL);

    const starR = new THREE.Mesh(starGeo, goldStarMat);
    starR.position.set(25, 0, 1.5);
    vayolettSignGroup.add(starR);

    // Hitbox para clic en Vayolett
    bannerSprite.userData = {
      isVayolett: true,
      title: '★ VAYOLETT ★',
      desc: '¡Hola mami Meycita bella! Soy Vayolett, su hijita de las estrellas. Desde aquí arriba los cuido siempre y veo lo mucho que se aman. Papi Uli te adora con toda su alma. ¡Feliz día de las flores amarillas! 🐨💛✨',
      svg: 'assets/sunflower.svg'
    };
    interactiveObjects.push(bannerSprite);

    vayolettSignGroup.userData = {
      starL: starL,
      starR: starR
    };

    universeGroup.add(vayolettSignGroup);
  }

  // --- TEXTURA DEL CENTRO DEL GIRASOL CON CORAZÓN ROJO Y LA "M" ---
  function createSunflowerSeedTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Fondo degradado de terciopelo marrón cálido
    const grad = ctx.createRadialGradient(256, 256, 20, 256, 256, 256);
    grad.addColorStop(0, '#241005');
    grad.addColorStop(0.5, '#3b1c08');
    grad.addColorStop(0.85, '#5c2d00');
    grad.addColorStop(1.0, '#8d3d0f');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Semillas espiral Fibonacci
    const goldenAngle = 2.3999632;
    const totalSeeds = 400;
    for (let i = 0; i < totalSeeds; i++) {
      const r = Math.sqrt(i / totalSeeds) * 235;
      const theta = i * goldenAngle;
      const x = 256 + Math.cos(theta) * r;
      const y = 256 + Math.sin(theta) * r;

      const seedSize = 1.8 + (r / 235) * 2.2;
      const alpha = 0.45 + (r / 235) * 0.5;
      const hue = (i % 2 === 0) ? '#d97706' : '#f59e0b';
      ctx.fillStyle = hue;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(x, y, seedSize, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    // Anillo exterior brillante
    const ringGrad = ctx.createRadialGradient(256, 256, 205, 256, 256, 256);
    ringGrad.addColorStop(0, 'rgba(245, 158, 11, 0)');
    ringGrad.addColorStop(0.7, 'rgba(217, 119, 6, 0.5)');
    ringGrad.addColorStop(1, 'rgba(120, 53, 15, 0.95)');
    ctx.fillStyle = ringGrad;
    ctx.beginPath();
    ctx.arc(256, 256, 256, 0, Math.PI * 2);
    ctx.fill();

    // EN EL MEDIO: CORAZÓN ROJO CON LA "M" (PEDIDO POR EL USUARIO)
    ctx.save();
    ctx.translate(256, 256);

    // Dibujar corazón rojo brillante
    ctx.shadowColor = '#ff1744';
    ctx.shadowBlur = 25;
    ctx.fillStyle = '#d50000';
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.bezierCurveTo(-50, -35, -70, -85, 0, -115);
    ctx.bezierCurveTo(70, -85, 50, -35, 0, 20);
    // Invertir para orientación estándar
    ctx.restore();

    ctx.save();
    ctx.translate(256, 240);
    ctx.shadowColor = '#ff1744';
    ctx.shadowBlur = 25;
    ctx.fillStyle = '#e60026';
    ctx.beginPath();
    ctx.moveTo(0, 35);
    ctx.bezierCurveTo(45, -5, 65, -50, 25, -75);
    ctx.bezierCurveTo(-5, -75, -20, -50, 0, -25);
    ctx.bezierCurveTo(20, -50, 5, -75, -25, -75);
    ctx.bezierCurveTo(-65, -50, -45, -5, 0, 35);
    ctx.fill();

    // Borde dorado alrededor del corazón
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3.5;
    ctx.stroke();

    // Letra "M" en el medio del corazón
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 12;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px "Georgia", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('M', 0, -30);
    ctx.restore();

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    return tex;
  }

  // --- GIRASOL 3D GRANDOTE EN EL CENTRO (SIN ATRAVESAR NI TAPAR A MAYBETH) ---
  function createCenterSunflower3D() {
    centerSunflower3D = new THREE.Group();
    // Ubicado en (0, -6, 20), floreciendo debajo y al frente de MAYBETH sin tapar su texto
    centerSunflower3D.position.set(0, -6, 20);

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
    const petalMat1 = new THREE.MeshStandardMaterial({
      color: 0xffb300,
      roughness: 0.45,
      metalness: 0.05,
      side: THREE.DoubleSide,
      emissive: 0xff8f00,
      emissiveIntensity: 0.4
    });
    const petalMat2 = new THREE.MeshStandardMaterial({
      color: 0xffca28,
      roughness: 0.4,
      metalness: 0.05,
      side: THREE.DoubleSide,
      emissive: 0xffa000,
      emissiveIntensity: 0.35
    });

    // 1. Tallo 3D colocado detrás (z = -1.2) para que NUNCA atraviese la flor
    const stemGeo = new THREE.CylinderGeometry(0.6, 0.9, 1.0, 16);
    stemGeo.translate(0, 0.5, 0);
    const stemMesh = new THREE.Mesh(stemGeo, stemMat);
    stemMesh.position.set(0, -10, -1.2);
    stemMesh.scale.set(1, 2.0, 1);
    centerSunflower3D.add(stemMesh);

    // 2. Hojas 3D en el tallo
    const leavesGroup = new THREE.Group();
    leavesGroup.position.set(0, -10, -1.2);
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.quadraticCurveTo(2.0, 2.4, 0, 6.0);
    leafShape.quadraticCurveTo(-2.0, 2.4, 0, 0);
    const leafGeo = new THREE.ShapeGeometry(leafShape);

    const leaves = [];
    const leafConfigs = [
      { yRatio: 0.25, angle: 0.4, rotZ: 0.85, baseScale: 0.95 },
      { yRatio: 0.50, angle: Math.PI * 0.85, rotZ: 0.75, baseScale: 1.15 },
      { yRatio: 0.75, angle: Math.PI * 1.55, rotZ: 0.8, baseScale: 1.25 },
      { yRatio: 0.90, angle: Math.PI * 0.35, rotZ: 0.7, baseScale: 1.05 }
    ];
    leafConfigs.forEach((cfg) => {
      const leafMesh = new THREE.Mesh(leafGeo, leafMat);
      leafMesh.rotation.y = cfg.angle;
      leafMesh.rotation.z = cfg.rotZ;
      leafMesh.scale.set(0.2, 0.2, 0.2);
      leavesGroup.add(leafMesh);
      leaves.push({ mesh: leafMesh, cfg: cfg });
    });
    centerSunflower3D.add(leavesGroup);

    // 3. Cabeza Floral Grandota
    const flowerHead = new THREE.Group();

    // Cáliz verde posterior sellando la unión con el tallo
    const calyxMat = new THREE.MeshStandardMaterial({ color: 0x1b5e20, roughness: 0.8 });
    const calyxGeo = new THREE.CylinderGeometry(4.6, 1.4, 1.6, 20);
    calyxGeo.rotateX(Math.PI / 2);
    const calyxMesh = new THREE.Mesh(calyxGeo, calyxMat);
    calyxMesh.position.set(0, 0, -0.9);
    flowerHead.add(calyxMesh);

    // Centro con textura Fibonacci y Corazón con la "M"
    const seedTex = createSunflowerSeedTexture();
    const seedGeo = new THREE.CircleGeometry(4.6, 36);
    const seedMat = new THREE.MeshBasicMaterial({
      map: seedTex,
      side: THREE.DoubleSide
    });
    const seedMesh = new THREE.Mesh(seedGeo, seedMat);
    seedMesh.position.set(0, 0, 0.35);
    seedMesh.userData = {
      isCenterSunflower: true,
      title: '🌻 ¡El Gran Girasol de Meycita! 🌻',
      desc: 'Este hermoso girasol creció con cada una de las 20 notitas de amor que abriste. ¡Tiene tu inicial grabada en el centro! Te amodoro con toda mi alma, mi amorshote bella. 💕 — Tu Uli',
      svg: 'assets/sunflower.svg'
    };
    flowerHead.add(seedMesh);
    interactiveObjects.push(seedMesh);

    // 48 Pétalos frondosos en 2 capas concéntricas
    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.quadraticCurveTo(1.5, 3.8, 0, 8.8);
    petalShape.quadraticCurveTo(-1.5, 3.8, 0, 0);
    const petalGeo = new THREE.ShapeGeometry(petalShape);

    const petalCount = 24;
    for (let i = 0; i < petalCount; i++) {
      const angle = (i / petalCount) * Math.PI * 2;
      const p1 = new THREE.Mesh(petalGeo, petalMat1);
      p1.position.set(Math.cos(angle) * 4.3, Math.sin(angle) * 4.3, 0.1);
      p1.rotation.z = angle - Math.PI / 2;
      flowerHead.add(p1);

      const angle2 = angle + (Math.PI / petalCount);
      const p2 = new THREE.Mesh(petalGeo, petalMat2);
      p2.scale.set(0.92, 0.92, 0.92);
      p2.position.set(Math.cos(angle2) * 4.0, Math.sin(angle2) * 4.0, 0.22);
      p2.rotation.z = angle2 - Math.PI / 2;
      flowerHead.add(p2);
    }

    flowerHead.rotation.x = 0.32; // Inclinado hacia la cámara
    flowerHead.scale.set(0.001, 0.001, 0.001);
    flowerHead.position.set(0, -10 + 2.0, 0);
    centerSunflower3D.add(flowerHead);

    const flowerLight = new THREE.PointLight(0xffd700, 0, 120);
    flowerLight.position.set(0, 4, 3);
    centerSunflower3D.add(flowerLight);

    centerSunflower3D.userData = {
      stemMesh: stemMesh,
      leaves: leaves,
      leavesGroup: leavesGroup,
      flowerHead: flowerHead,
      flowerLight: flowerLight,
      currentHeight: 2.0,
      targetHeight: 2.0,
      currentHeadScale: 0.001,
      targetHeadScale: 0.001
    };

    universeGroup.add(centerSunflower3D);
  }

  // --- ACTUALIZAR CRECIMIENTO DEL GIRASOL CON LAS 20 NOTAS ---
  function updateSunflowerGrowth() {
    const count = openedNotes.size;
    if (openedCountElem) {
      openedCountElem.textContent = count;
    }

    sunflowerGrowthProgress = count / 20.0;

    if (centerSunflower3D) {
      const u = centerSunflower3D.userData;
      // Altura del tallo: crece de 2.0 a 9.5 para quedar justo debajo del letrero
      u.targetHeight = 2.0 + sunflowerGrowthProgress * 7.5;

      if (count < 2) {
        u.targetHeadScale = 0.001;
        if (u.flowerLight) u.flowerLight.intensity = 0;
      } else {
        const headProg = (count - 1) / 19.0;
        u.targetHeadScale = 0.3 + headProg * 1.05;
        if (u.flowerLight) u.flowerLight.intensity = headProg * 4.0;
      }
    }

    if (count === 20 && !hasTriggeredFinale) {
      hasTriggeredFinale = true;
      setTimeout(triggerGrandFinale, 600);
    }
  }

  // --- NÚCLEO CENTRAL: MAYBETH Y BOTONCITO ROJITO "CUCHI CUCHI" ---
  function createCentralMaybeth() {
    centralMaybethGroup = new THREE.Group();
    // Ubicado en y = 14, z = 12 para que esté flotando majestuosamente arriba del girasol
    centralMaybethGroup.position.set(0, 14, 12);
    centralMaybethGroup.rotation.x = -0.15;

    // Cartel MAYBETH en canvas procedural
    const mCanvas = document.createElement('canvas');
    mCanvas.width = 1024;
    mCanvas.height = 256;
    const mCtx = mCanvas.getContext('2d');

    const mBg = mCtx.createLinearGradient(0, 0, 0, 256);
    mBg.addColorStop(0, 'rgba(12, 6, 28, 0.98)');
    mBg.addColorStop(1, 'rgba(5, 2, 16, 0.98)');
    mCtx.fillStyle = mBg;
    roundRect(mCtx, 16, 16, 992, 224, 42, true, false);

    // Borde dorado doble
    mCtx.strokeStyle = '#ffd700';
    mCtx.lineWidth = 6;
    roundRect(mCtx, 16, 16, 992, 224, 42, false, true);
    mCtx.strokeStyle = 'rgba(255, 215, 0, 0.35)';
    mCtx.lineWidth = 14;
    roundRect(mCtx, 8, 8, 1008, 240, 48, false, true);

    // Estrellas doradas en las esquinas
    mCtx.fillStyle = '#ffd700';
    mCtx.font = 'bold 46px serif';
    mCtx.textAlign = 'center';
    mCtx.fillText('★', 75, 102);
    mCtx.fillText('★', 949, 102);

    // Nombre MAYBETH grande y brillante
    mCtx.shadowColor = '#ffd700';
    mCtx.shadowBlur = 42;
    mCtx.fillStyle = '#ffffff';
    mCtx.font = 'bold 124px "Georgia", serif';
    mCtx.textAlign = 'center';
    mCtx.fillText('MAYBETH', 512, 146);

    // Subtítulo con "cuchi cuchi"
    mCtx.shadowBlur = 12;
    mCtx.shadowColor = '#ff88aa';
    mCtx.fillStyle = '#ffcce0';
    mCtx.font = 'italic 34px Georgia, serif';
    mCtx.fillText('♥  Eres muy especial para mí • cuchi cuchi  ♥', 512, 210);

    const maybethTexture = new THREE.CanvasTexture(mCanvas);
    maybethTexture.generateMipmaps = true;

    const spriteMat = new THREE.SpriteMaterial({
      map: maybethTexture,
      transparent: true,
      opacity: 1.0,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const maybethSprite = new THREE.Sprite(spriteMat);
    maybethSprite.scale.set(88, 22, 1);
    maybethSprite.position.set(0, 0, 0);
    maybethSprite.userData = {
      isCenter: true,
      title: 'MAYBETH • Mi Universo Entero',
      desc: 'Eres el centro de mi galaxia, Meycita bella. Cada estrella, cada flor y cada pensamiento son para ti. ¡Te amodoro con todo mi corazón, mi cuchi cuchi!',
      svg: 'assets/roses.svg'
    };
    centralMaybethGroup.add(maybethSprite);
    interactiveObjects.push(maybethSprite);

    // BOTONCITO ROJITO DISIMULADO "CUCHI CUCHI" (EASTER EGG DE FOTO)
    const btnCanvas = document.createElement('canvas');
    btnCanvas.width = 256;
    btnCanvas.height = 96;
    const bCtx = btnCanvas.getContext('2d');
    bCtx.clearRect(0, 0, 256, 96);

    bCtx.fillStyle = 'rgba(230, 0, 50, 0.95)';
    bCtx.strokeStyle = '#ffd700';
    bCtx.lineWidth = 3;
    roundRect(bCtx, 8, 8, 240, 80, 24, true, true);

    bCtx.font = 'bold 34px system-ui, sans-serif';
    bCtx.textAlign = 'center';
    bCtx.textBaseline = 'middle';
    bCtx.fillStyle = '#ffffff';
    bCtx.shadowColor = '#ffffff';
    bCtx.shadowBlur = 10;
    bCtx.fillText('💖 cuchi cuchi', 128, 48);

    const btnTex = new THREE.CanvasTexture(btnCanvas);
    const btnMat = new THREE.SpriteMaterial({
      map: btnTex,
      transparent: true,
      depthWrite: false
    });
    const cuchiBtnSprite = new THREE.Sprite(btnMat);
    // Ubicado sutilmente en la esquina inferior derecha sin tapar texto
    cuchiBtnSprite.scale.set(16, 6, 1);
    cuchiBtnSprite.position.set(45, -13, 1.5);
    cuchiBtnSprite.userData = {
      isCuchiCuchi: true
    };
    centralMaybethGroup.add(cuchiBtnSprite);
    interactiveObjects.push(cuchiBtnSprite);

    // Corazones Rojos con "Uli" orbitando armoniosamente
    const uliHeartTex = textureLoader.load('assets/sprite_heart_uli.png');
    const heartMat = new THREE.SpriteMaterial({
      map: uliHeartTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const heartCount = 8;
    const orbitRadius = 48;
    for (let i = 0; i < heartCount; i++) {
      const heartSprite = new THREE.Sprite(heartMat);
      heartSprite.scale.set(7.5, 7.5, 1);

      const angle = (i / heartCount) * Math.PI * 2;
      heartSprite.position.set(
        Math.cos(angle) * orbitRadius,
        Math.sin(i * 1.5) * 3,
        Math.sin(angle) * orbitRadius * 0.5
      );

      heartSprite.userData = {
        isHeart: true,
        orbitRadius: orbitRadius,
        orbitAngle: angle,
        orbitSpeed: 0.65 + (i % 3) * 0.25,
        yOffset: ((i % 4) - 1.5) * 2.5
      };

      centralMaybethGroup.add(heartSprite);
    }

    universeGroup.add(centralMaybethGroup);
  }

  // --- 20 FLORES INTERACTIVAS ORBITANDO COMO PLANETAS ALREDEDOR DE MAYBETH ---
  function createInteractiveOrbitingFlowers() {
    FLOWERS_DATA.forEach((flower) => {
      const flowerSubGroup = new THREE.Group();
      const x = Math.cos(flower.angle) * flower.radius;
      const z = Math.sin(flower.angle) * flower.radius;
      const y = flower.height;
      flowerSubGroup.position.set(x, y, z);

      const haloTex = textureLoader.load('assets/particle.png');
      const haloMat = new THREE.SpriteMaterial({
        map: haloTex,
        color: 0xffecb3,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.85
      });
      const haloSprite = new THREE.Sprite(haloMat);
      haloSprite.scale.set(16, 16, 1);
      flowerSubGroup.add(haloSprite);

      const fTex = textureLoader.load(flower.sprite);
      const fMat = new THREE.SpriteMaterial({
        map: fTex,
        transparent: true,
        depthWrite: false
      });
      const fSprite = new THREE.Sprite(fMat);
      fSprite.scale.set(10.5, 10.5, 1);
      fSprite.userData = {
        isFlower: true,
        data: flower,
        baseScale: 10.5
      };
      flowerSubGroup.add(fSprite);
      interactiveObjects.push(fSprite);

      const labelSprite = createTextLabelSprite(flower.title);
      labelSprite.position.set(0, -6.5, 0);
      flowerSubGroup.add(labelSprite);

      flowerSubGroup.userData = {
        data: flower,
        currentAngle: flower.angle,
        orbitSpeed: flower.speed,
        radius: flower.radius,
        baseY: y,
        bobSpeed: 1.2 + Math.random() * 0.8,
        bobOffset: Math.random() * Math.PI * 2
      };

      flowersGroup.add(flowerSubGroup);
    });

    universeGroup.add(flowersGroup);
  }

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

  // --- METEORITOS GRANDES Y LEGIBLES CON FRASES DE AMOR ---
  function createMeteors() {
    meteorsGroup = new THREE.Group();
    universeGroup.add(meteorsGroup);

    const meteorMessages = [
      '¡Eres la mejor! 💛',
      'Eres mi vida ✨',
      '¡Eres mi todo! 💖',
      'Te amodoro 🌻',
      'Te amo infinito 💕',
      'Meycita bella 🌟',
      'Mi niña guapa 💛',
      'Mi amorcito ❤️',
      'Te amodoro con locura ✨',
      'Mi Cuchi Cuchi 💖'
    ];

    const meteorCount = 10;
    for (let i = 0; i < meteorCount; i++) {
      const msg = meteorMessages[i % meteorMessages.length];

      // Canvas grande 1024x256 para máxima nitidez y tamaño
      const mc = document.createElement('canvas');
      mc.width = 1024;
      mc.height = 256;
      const mctx = mc.getContext('2d');
      mctx.clearRect(0, 0, 1024, 256);

      // Glow exterior dorado potente
      mctx.shadowColor = '#ffd700';
      mctx.shadowBlur = 35;
      mctx.font = 'bold italic 72px "Georgia", serif';
      mctx.textAlign = 'center';
      mctx.textBaseline = 'middle';

      const grad = mctx.createLinearGradient(0, 50, 0, 180);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.35, '#fff066');
      grad.addColorStop(1, '#ff9900');
      mctx.fillStyle = grad;
      mctx.fillText(msg, 512, 128);

      const mTex = new THREE.CanvasTexture(mc);

      // Estela brillante del meteorito
      const trailGeo = new THREE.BufferGeometry();
      const trailLen = 40;
      const trailPos = new Float32Array(trailLen * 3);
      const trailCol = new Float32Array(trailLen * 3);
      for (let t = 0; t < trailLen; t++) {
        trailPos[t * 3] = -t * 1.5;
        trailPos[t * 3 + 1] = t * 0.6;
        trailPos[t * 3 + 2] = 0;
        const bright = 1.0 - t / trailLen;
        trailCol[t * 3] = bright;
        trailCol[t * 3 + 1] = bright * 0.85;
        trailCol[t * 3 + 2] = bright * 0.25;
      }
      trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
      trailGeo.setAttribute('color', new THREE.BufferAttribute(trailCol, 3));
      const trailMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        opacity: 0.88,
        linewidth: 3
      });
      const trailLine = new THREE.Line(trailGeo, trailMat);

      // Sprite de texto ampliado y legible
      const textMat = new THREE.SpriteMaterial({
        map: mTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const textSprite = new THREE.Sprite(textMat);
      textSprite.scale.set(42, 10.5, 1);
      textSprite.position.set(16, 0, 0);

      const mGroup = new THREE.Group();
      mGroup.add(trailLine);
      mGroup.add(textSprite);

      const startX = -220 + Math.random() * 160;
      const startY = 25 + Math.random() * 85;
      const startZ = -300 + Math.random() * 220;
      mGroup.position.set(startX, startY, startZ);

      const angle = -0.42 + (Math.random() - 0.5) * 0.35;
      const speed = 58 + Math.random() * 52;

      mGroup.userData = {
        isMeteor: true,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed * 0.42,
        vz: (Math.random() - 0.3) * 32,
        startX,
        startY,
        startZ,
        delay: i * 1.3,
        life: 0,
        maxLife: 6 + Math.random() * 4
      };

      meteorsGroup.add(mGroup);
    }
  }

  // --- INTRO ÉPICA DE 6.5 SEGUNDOS (COLAPSO EN ESPIRAL Y NACIMIENTO DE LA GALAXIA) ---
  function startEpicIntro() {
    isIntroAnimating = true;
    introStartTime = performance.now();
    controls.enabled = false;

    // Los elementos inician ocultos para nacer del vórtice galáctico
    if (centralMaybethGroup) centralMaybethGroup.scale.set(0.001, 0.001, 0.001);
    if (flowersGroup) flowersGroup.scale.set(0.001, 0.001, 0.001);
    if (vayolettSignGroup) vayolettSignGroup.scale.set(0.001, 0.001, 0.001);
    if (celestialHeartGroup) celestialHeartGroup.scale.set(0.001, 0.001, 0.001);

    // Posición inicial de cámara mirando hacia el vórtice
    camera.position.set(0, 180, 50);
    camera.lookAt(0, 0, 0);
  }

  function updateEpicIntro(now) {
    if (!isIntroAnimating) return;

    const elapsed = now - introStartTime;
    const p = Math.min(elapsed / INTRO_DURATION, 1.0);

    // Easing suave cuártico para el colapso
    const ease = 1 - Math.pow(1 - p, 4);

    // 1. Las partículas de la galaxia se unen en espiral hacia sus posiciones
    if (galaxyPoints) {
      const pos = galaxyPoints.geometry.attributes.position.array;
      const count = GALAXY_PARAMS.count;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3] = galaxyStartPos[i3] + (galaxyTargetPos[i3] - galaxyStartPos[i3]) * ease;
        pos[i3 + 1] = galaxyStartPos[i3 + 1] + (galaxyTargetPos[i3 + 1] - galaxyStartPos[i3 + 1]) * ease;
        pos[i3 + 2] = galaxyStartPos[i3 + 2] + (galaxyTargetPos[i3 + 2] - galaxyStartPos[i3 + 2]) * ease;
      }
      galaxyPoints.geometry.attributes.position.needsUpdate = true;
      galaxyPoints.rotation.y = elapsed * 0.0008;
    }

    // 2. Vuelo cinemático de cámara desde arriba hacia la posición orbital
    if (p < 0.85) {
      const camProg = Math.min(p / 0.85, 1.0);
      const camEase = 1 - Math.pow(1 - camProg, 3);
      camera.position.x = 0;
      camera.position.y = 180 - camEase * (180 - 52);
      camera.position.z = 50 + camEase * (135 - 50);
      camera.lookAt(0, 0, 0);
    }

    // 3. Nacimiento progresivo de los elementos de la galaxia
    if (p > 0.40 && centralMaybethGroup) {
      const mProg = Math.min((p - 0.40) / 0.35, 1.0);
      const mEase = 1 - Math.pow(1 - mProg, 3);
      centralMaybethGroup.scale.set(mEase, mEase, mEase);
    }
    if (p > 0.50 && celestialHeartGroup) {
      const heartProg = Math.min((p - 0.50) / 0.35, 1.0);
      const hEase = 1 - Math.pow(1 - heartProg, 3);
      celestialHeartGroup.scale.set(hEase, hEase, hEase);
    }
    if (p > 0.58 && flowersGroup) {
      const fProg = Math.min((p - 0.58) / 0.35, 1.0);
      const fEase = 1 - Math.pow(1 - fProg, 3);
      flowersGroup.scale.set(fEase, fEase, fEase);
    }
    if (p > 0.65 && vayolettSignGroup) {
      const vProg = Math.min((p - 0.65) / 0.30, 1.0);
      const vEase = 1 - Math.pow(1 - vProg, 3);
      vayolettSignGroup.scale.set(vEase, vEase, vEase);
    }

    // 4. Finalización de la intro
    if (p >= 1.0) {
      isIntroAnimating = false;
      controls.enabled = true;
      controls.autoRotate = true;
      if (centralMaybethGroup) centralMaybethGroup.scale.set(1, 1, 1);
      if (flowersGroup) flowersGroup.scale.set(1, 1, 1);
      if (vayolettSignGroup) vayolettSignGroup.scale.set(1, 1, 1);
      if (celestialHeartGroup) celestialHeartGroup.scale.set(1, 1, 1);
      camera.position.set(0, 52, 135);
      controls.target.set(0, 0, 0);
    }
  }

  // --- AUDIO Y CONTROL DE VOLUMEN ---
  function setupAudioControls() {
    if (bgMusic) {
      bgMusic.volume = 0.75;
    }

    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (bgMusic) {
          bgMusic.volume = val;
        }
        if (volIcon) {
          if (val === 0) volIcon.textContent = '🔇';
          else if (val < 0.4) volIcon.textContent = '🔈';
          else if (val < 0.75) volIcon.textContent = '🔉';
          else volIcon.textContent = '🔊';
        }
      });
    }

    if (volIcon) {
      volIcon.addEventListener('click', () => {
        if (!bgMusic) return;
        if (bgMusic.volume > 0) {
          bgMusic.dataset.lastVol = bgMusic.volume;
          bgMusic.volume = 0;
          if (volumeSlider) volumeSlider.value = 0;
          volIcon.textContent = '🔇';
        } else {
          const restore = bgMusic.dataset.lastVol || 0.75;
          bgMusic.volume = restore;
          if (volumeSlider) volumeSlider.value = restore;
          volIcon.textContent = '🔊';
        }
      });
    }
  }

  // --- GESTIÓN DE EVENTOS ---
  function setupEventListeners() {
    introScreen.addEventListener('click', startExperience);
    introScreen.addEventListener('touchstart', startExperience, { passive: true });

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onSceneClick);
    window.addEventListener('touchend', onTouchEnd);

    modalCloseBtn.addEventListener('click', closeModal);
    flowerModal.addEventListener('click', (e) => {
      if (e.target === flowerModal) closeModal();
    });

    photoModalCloseBtn.addEventListener('click', closePhotoModal);
    photoModal.addEventListener('click', (e) => {
      if (e.target === photoModal) closePhotoModal();
    });

    btnMirame.addEventListener('click', onMirameClick);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        closePhotoModal();
      }
    });

    btnAudio.addEventListener('click', toggleAudio);
    btnResetCam.addEventListener('click', resetCameraView);
  }

  function startExperience() {
    if (isStarted) return;
    isStarted = true;

    playAudio();

    introScreen.classList.add('fade-out');
    setTimeout(() => {
      if (introScreen) introScreen.style.display = 'none';
    }, 1100);

    startEpicIntro();
  }

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

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  function onMouseMove(event) {
    if (isIntroAnimating) return;
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
            hitObj.userData.baseScale * 1.22,
            hitObj.userData.baseScale * 1.22,
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

  function onSceneClick(event) {
    if (isIntroAnimating) return;
    if (event.target.closest('#ui-overlay') || event.target.closest('#flower-modal') || event.target.closest('#photo-modal')) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
      handleObjectClick(intersects[0].object);
    }
  }

  function onTouchEnd(event) {
    if (isIntroAnimating) return;
    if (event.touches.length > 0) return;
    if (event.target.closest('#ui-overlay') || event.target.closest('#flower-modal') || event.target.closest('#photo-modal')) return;

    const touch = event.changedTouches[0];
    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
      handleObjectClick(intersects[0].object);
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
    } else if (selected.userData.isCenterSunflower) {
      openModal({
        title: selected.userData.title,
        desc: selected.userData.desc,
        svg: selected.userData.svg
      });
    } else if (selected.userData.isCuchiCuchi) {
      // EASTER EGG DE FOTO CUCHI CUCHI
      openPhotoModal();
    }
  }

  // --- MODAL SECRETO DE FOTOS (CUCHI CUCHI Y MÍRAME) ---
  function openPhotoModal() {
    currentSecretPhotoIndex = 1;
    secretPhotoImg.src = 'assets/foto_cuchicuchi_1.jpg';
    secretPhotoTitle.textContent = 'Para mi Cuchi Cuchi hermosa 💕';
    secretPhotoDesc.textContent = 'Eres lo más bonito que me ha pasado en la vida, mi amorcito. Cada sonrisa tuya ilumina mi universo entero. ¡Te amodoro infinito, mi Meycita bella! 💛';

    btnMirame.classList.add('hidden');
    photoModal.classList.add('active');
    controls.autoRotate = false;

    // Si lo ve por más de 2 segundos, aparece el botón ¡Mírame!
    clearTimeout(mirameTimer);
    mirameTimer = setTimeout(() => {
      btnMirame.classList.remove('hidden');
    }, 2000);
  }

  function onMirameClick() {
    currentSecretPhotoIndex = 2;
    secretPhotoImg.src = 'assets/foto_cuchicuchi_2.jpg';
    secretPhotoTitle.textContent = '¡Mírame mi princesa! 💕✨';
    secretPhotoDesc.textContent = '¡Mi princesa hermosa, eres lo más bello que existe en este mundo! No hay día que no agradezca tenerte a mi lado. Te amodoro de aquí al infinito y más allá. 💕 — Tu Uli';
    btnMirame.classList.add('hidden');
  }

  function closePhotoModal() {
    photoModal.classList.remove('active');
    clearTimeout(mirameTimer);
    if (isStarted && !isIntroAnimating) {
      controls.autoRotate = true;
    }
  }

  function openModal(flower) {
    modalTitle.textContent = flower.title;
    modalDesc.textContent = flower.desc;
    modalImg.src = flower.svg || 'assets/sunflower.svg';

    flowerModal.classList.add('active');
    controls.autoRotate = false;
  }

  function closeModal() {
    flowerModal.classList.remove('active');
    if (isStarted && !isIntroAnimating) {
      controls.autoRotate = true;
    }
  }

  function triggerGrandFinale() {
    const burstCount = 2000;
    const bGeo = new THREE.BufferGeometry();
    const bPos = new Float32Array(burstCount * 3);
    const bVel = new Float32Array(burstCount * 3);

    for (let i = 0; i < burstCount; i++) {
      bPos[i * 3] = 0;
      bPos[i * 3 + 1] = 6;
      bPos[i * 3 + 2] = 12;

      const speed = 35 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      bVel[i * 3] = Math.sin(phi) * Math.cos(theta) * speed;
      bVel[i * 3 + 1] = Math.cos(phi) * speed + 14;
      bVel[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * speed;
    }

    bGeo.setAttribute('position', new THREE.BufferAttribute(bPos, 3));
    const pTex = textureLoader.load('assets/particle.png');
    const bMat = new THREE.PointsMaterial({
      size: 4.0,
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
        title: '🌻 ¡Tu Gran Girasol Floreció, Meycita Bella! 🌻',
        desc: 'Has descubierto cada una de las 20 notitas de amor en nuestra galaxia. Este girasol dorado con tu inicial en el centro representa lo inmenso que es mi amor por ti. ¡Te amodoro con toda mi alma, amorshote! 💕 — Tu Uli',
        svg: 'assets/sunflower.svg'
      });
    }, 1400);
  }

  // --- BOTÓN CENTRAR CÁMARA (VISTA GENERAL Y GRANDOTE DE MAYBETH) ---
  function resetCameraView() {
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(0, 48, 125);
    const duration = 1200;
    const startTime = performance.now();

    function animateCam(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPos, endPos, ease);
      controls.target.set(0, 2, 0);

      if (progress < 1) {
        requestAnimationFrame(animateCam);
      } else {
        controls.autoRotate = true;
      }
    }
    requestAnimationFrame(animateCam);
  }

  // --- BUCLE DE ANIMACIÓN PRINCIPAL ---
  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();
    const now = performance.now();

    // Actualización de la intro si está activa
    if (isIntroAnimating) {
      updateEpicIntro(now);
    } else if (galaxyPoints) {
      galaxyPoints.rotation.y = elapsedTime * 0.035;
    }

    if (accretionMesh) {
      accretionMesh.rotation.z = -elapsedTime * 0.14;
    }

    // Pulso del Gran Corazón Celestial en el cielo
    if (celestialHeartGroup && !isIntroAnimating) {
      const heartPulse = 1.0 + Math.sin(elapsedTime * 2.2) * 0.035;
      celestialHeartGroup.scale.set(heartPulse, heartPulse, heartPulse);
      celestialHeartGroup.position.y = 32 + Math.sin(elapsedTime * 0.9) * 1.5;
    }

    // Animación de estrellas en el letrero de Vayolett
    if (vayolettSignGroup) {
      vayolettSignGroup.position.y = 52 + Math.sin(elapsedTime * 0.8) * 1.2;
      const u = vayolettSignGroup.userData;
      if (u.starL && u.starR) {
        u.starL.rotation.y = elapsedTime * 1.5;
        u.starR.rotation.y = -elapsedTime * 1.5;
      }
    }

    // Crecimiento e interpolación del Girasol Central 3D
    if (centerSunflower3D) {
      const u = centerSunflower3D.userData;

      u.currentHeight = THREE.MathUtils.lerp(u.currentHeight, u.targetHeight, 0.06);
      u.stemMesh.scale.y = u.currentHeight;

      u.currentHeadScale = THREE.MathUtils.lerp(u.currentHeadScale, u.targetHeadScale, 0.06);
      u.flowerHead.scale.set(u.currentHeadScale, u.currentHeadScale, u.currentHeadScale);

      // Posición de la cabeza sujeta a la parte superior del tallo
      u.flowerHead.position.y = -12 + u.currentHeight;
      u.flowerHead.rotation.z = Math.sin(elapsedTime * 0.8) * 0.05;

      const leafScale = Math.min(0.25 + (u.currentHeight / 12.0) * 0.85, 1.15);
      u.leaves.forEach((leaf) => {
        leaf.mesh.position.y = leaf.cfg.yRatio * u.currentHeight;
        const ls = leafScale * leaf.cfg.baseScale;
        leaf.mesh.scale.set(ls, ls, ls);
      });
    }

    // Animación de MAYBETH y los corazones de Uli
    if (centralMaybethGroup) {
      const maybethSprite = centralMaybethGroup.children[0];
      if (maybethSprite) {
        const pulse = 1.0 + Math.sin(elapsedTime * 2.0) * 0.022;
        maybethSprite.scale.set(88 * pulse, 22 * pulse, 1);
      }

      for (let i = 1; i < centralMaybethGroup.children.length; i++) {
        const child = centralMaybethGroup.children[i];
        if (child.userData.isHeart) {
          const angle = child.userData.orbitAngle + elapsedTime * child.userData.orbitSpeed * 0.45;
          child.position.x = Math.cos(angle) * child.userData.orbitRadius;
          child.position.z = Math.sin(angle) * (child.userData.orbitRadius * 0.5);
          child.position.y = child.userData.yOffset + Math.sin(elapsedTime * 2.5 + i) * 1.5;
        }
      }
    }

    // 20 Flores Orbitando como Planetas alrededor de Maybeth
    flowersGroup.children.forEach((fGroup) => {
      const u = fGroup.userData;
      if (u.orbitSpeed) {
        u.currentAngle += u.orbitSpeed * delta * 0.5;
        fGroup.position.x = Math.cos(u.currentAngle) * u.radius;
        fGroup.position.z = Math.sin(u.currentAngle) * u.radius;
        fGroup.position.y = u.baseY + Math.sin(elapsedTime * u.bobSpeed + u.bobOffset) * 1.4;
      }
    });

    // Meteoritos grandes cruzando la galaxia
    if (meteorsGroup && isStarted && !isIntroAnimating) {
      meteorsGroup.children.forEach((mGroup) => {
        const u = mGroup.userData;
        u.life += delta;

        if (u.life < u.delay) return;

        const effectiveLife = u.life - u.delay;
        if (effectiveLife > u.maxLife) {
          u.life = 0;
          u.delay = Math.random() * 3.5;
          mGroup.position.set(
            -220 + Math.random() * 160,
            25 + Math.random() * 75,
            -300 + Math.random() * 220
          );
          return;
        }

        mGroup.position.x += u.vx * delta;
        mGroup.position.y += u.vy * delta;
        mGroup.position.z += u.vz * delta;

        const prog = effectiveLife / u.maxLife;
        let opacity = (prog < 0.15) ? (prog / 0.15) : (prog > 0.75 ? (1 - prog) / 0.25 : 1.0);

        mGroup.children.forEach(child => {
          if (child.material) {
            child.material.opacity = Math.max(0, Math.min(1, opacity)) * 0.92;
          }
        });
      });
    }

    if (!isIntroAnimating) {
      controls.update();
    }

    renderer.render(scene, camera);
  }

  // --- UTILIDADES ---
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

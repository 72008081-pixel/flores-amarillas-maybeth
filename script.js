/**
 * ==========================================================================
 * FLORES AMARILLAS PARA MAYBETH - 3D INTERACTIVE GALAXY & FLOWERS
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

  // --- LISTA DE FLORES Y DEDICATORIAS PARA MAYBETH ---
  const FLOWERS_DATA = [
    {
      id: 'flor-1',
      title: 'Gracias por quedarte',
      desc: 'No todos se quedan cuando las cosas no son perfectas. Tú sí. Y eso, para mí, vale más que mil palabras bonitas. Gracias por estar incondicionalmente a mi lado, Maybeth.',
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
      desc: 'Donde sea que estés, ahí quiero estar yo también. En mis días buenos y en los difíciles, tú eres el lugar al que siempre quiero volver. Feliz día, amor mío.',
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
      desc: 'Dicen que los girasoles buscan la luz del sol en el cielo para florecer... yo no necesito buscar muy lejos, porque el sol que ilumina toda mi vida eres tú, Maybeth.',
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
      desc: 'Hoy, como todos los días, estás presente en cada uno de mis pensamientos. Cada recuerdo contigo es una sonrisa sincera que no puedo evitar.',
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
      desc: 'El universo es inmenso y tiene miles de millones de estrellas, pero mi mayor fortuna y bendición es haberte encontrado a ti en este mundo. Gracias por existir, Maybeth.',
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
      desc: 'Mi lugar favorito en el mundo no es ninguna ciudad lejana ni un paisaje exótico... es simplemente estar abrazado a ti, escuchando tu risa y sintiendo tu paz.',
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
      desc: 'Si pudiera regalarte un girasol por cada motivo que me das para sonreír y ser feliz, tendrías un universo entero de flores solo para ti.',
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
      desc: 'Que este 21 de septiembre quede grabado en tu corazón con la certeza de que mi amor por ti florece con más brillo y fuerza con cada amanecer.',
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
      desc: 'Dicen que el amarillo es el color de la alegría y los nuevos comienzos, pero a mí simplemente me recuerda a tu luz tan única y a tu sonrisa hermosa.',
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
      desc: 'Gracias por tu ternura, por tu comprensión, por hacerme reír y por convertir los momentos más sencillos en recuerdos inolvidables.',
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
      desc: 'En cada paso, en cada sueño y en cada camino que elijamos recorrer, quiero ir de tu mano. Mi mayor deseo es verte feliz y cuidarte siempre, Maybeth.',
      type: 'roses',
      sprite: 'assets/sprite_roses.png',
      svg: 'assets/roses.svg',
      angle: 4.5,
      radius: 104,
      height: 9
    },
    {
      id: 'flor-12',
      title: 'Para ti, Maybeth',
      desc: 'Esta galaxia dorada fue creada con todo mi amor pensando únicamente en ti. Eres lo más valioso y especial de mi vida. ¡Feliz Día de las Flores Amarillas, te amo!',
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
  let flowersGroup = new THREE.Group();
  let interactiveObjects = [];
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();
  let hoveredObject = null;
  let clock = new THREE.Clock();
  let isStarted = false;
  let textureLoader = new THREE.TextureLoader();

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

  // --- INICIALIZACIÓN PRINCIPAL ---
  function init() {
    const container = document.getElementById('canvas-container');

    // 1. Escena y Niebla
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030206, 0.0016);

    // 2. Cámara
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(55, aspect, 0.5, 3000);
    // Posición inicial panorámica inclinada
    camera.position.set(0, 95, 155);

    // 3. Renderizador WebGL
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 4. Controles Orbitales (OrbitControls)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.maxDistance = 400;
    controls.minDistance = 35;
    controls.target.set(0, 0, 0);

    // Pausar auto-rotación al interactuar
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
    const ambientLight = new THREE.AmbientLight(0xfff8e1, 1.2);
    scene.add(ambientLight);

    const centerPointLight = new THREE.PointLight(0xffd700, 3, 200);
    centerPointLight.position.set(0, 5, 0);
    scene.add(centerPointLight);

    // 6. Construir componentes del universo
    createStarfield();
    createSpiralGalaxy();
    createSkySunflower();
    createCentralMaybeth();
    createInteractiveFlowers();

    // 7. Event Listeners
    setupEventListeners();

    // 8. Ocultar banner de ayuda después de 12 segundos
    setTimeout(() => {
      if (bottomBanner) {
        bottomBanner.style.opacity = '0.5';
      }
    }, 12000);

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
    const starCount = 3500;
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
      // Radio con distribución exponencial hacia el núcleo pero dejando espacio al disco central
      const r = 10 + Math.pow(Math.random(), power) * (radius - 10);

      // Ángulo según brazo espiral y giro
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const spinAngle = r * spin * 0.05;

      // Dispersión aleatoria
      const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * randomness * (r + 10);
      const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * randomness * (r * 0.2 + 2);
      const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? 1 : -1) * randomness * (r + 10);

      const x = Math.cos(branchAngle + spinAngle) * r + randomX;
      const y = randomY;
      const z = Math.sin(branchAngle + spinAngle) * r + randomZ;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Mezcla de colores dorados / cálidos
      const mixedColor = insideColor.clone();
      if (r < radius * 0.45) {
        mixedColor.lerp(midColor, (r - 10) / (radius * 0.45));
      } else {
        mixedColor.lerp(midColor, 0.7);
        mixedColor.lerp(outsideColor, (r - radius * 0.45) / (radius * 0.55));
      }

      // Toques aleatorios de chispas brillantes
      if (Math.random() > 0.92) {
        mixedColor.addScalar(0.3);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Textura de partícula resplandeciente
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

  // --- GIRASOL CELESTIAL GIGANTE EN EL CIELO (COMO EN EL VIDEO) ---
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

    // Partículas del centro del girasol gigante (disco denso)
    const centerParticles = 1200;
    for (let i = 0; i < centerParticles; i++) {
      const r = Math.sqrt(Math.random()) * centerRadius;
      const angle = Math.random() * Math.PI * 2;

      positions[pIdx * 3] = Math.cos(angle) * r;
      positions[pIdx * 3 + 1] = Math.sin(angle) * r;
      positions[pIdx * 3 + 2] = (Math.random() - 0.5) * 3;

      // Color cálido ámbar / dorado intenso
      colors[pIdx * 3] = 1.0;
      colors[pIdx * 3 + 1] = 0.75 + Math.random() * 0.2;
      colors[pIdx * 3 + 2] = 0.15;
      pIdx++;
    }

    // Partículas de los pétalos (10 pétalos estilizados)
    const petalParticles = particleCount - centerParticles;
    const particlesPerPetal = Math.floor(petalParticles / petals);

    for (let p = 0; p < petals; p++) {
      const petalAngle = (p / petals) * Math.PI * 2;
      const cosA = Math.cos(petalAngle);
      const sinA = Math.sin(petalAngle);

      for (let j = 0; j < particlesPerPetal; j++) {
        // Posición a lo largo del pétalo
        const progress = Math.random();
        const dist = centerRadius + progress * petalLength;

        // Ancho máximo en el medio del pétalo (forma de gota/pétalo)
        const w = Math.sin(progress * Math.PI) * petalWidth;
        const lateral = (Math.random() - 0.5) * w;

        // Coordenadas locales rotadas
        const lx = dist;
        const ly = lateral;

        const gx = lx * cosA - ly * sinA;
        const gy = lx * sinA + ly * cosA;
        const gz = (Math.random() - 0.5) * 4;

        positions[pIdx * 3] = gx;
        positions[pIdx * 3 + 1] = gy;
        positions[pIdx * 3 + 2] = gz;

        // Color amarillo dorado brillante
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
    // Posicionar alto en el cielo sobre la galaxia, mirando hacia la cámara inicial
    skySunflowerPoints.position.set(0, 68, -55);
    skySunflowerPoints.rotation.x = -0.15;
    scene.add(skySunflowerPoints);
  }

  // --- NÚCLEO CENTRAL CON EL NOMBRE "MAYBETH" Y CORAZONES ---
  function createCentralMaybeth() {
    centralMaybethGroup = new THREE.Group();

    // 1. Textura de Billboard MAYBETH
    const maybethTexture = textureLoader.load('assets/sprite_maybeth.png');
    const spriteMat = new THREE.SpriteMaterial({
      map: maybethTexture,
      transparent: true,
      opacity: 1.0,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const maybethSprite = new THREE.Sprite(spriteMat);
    // Proporción destacada para que se lea con total claridad en el centro
    maybethSprite.scale.set(48, 12, 1);
    maybethSprite.position.set(0, 8.5, 0);
    maybethSprite.userData = {
      isCenter: true,
      title: 'MAYBETH • Mi Universo Entero',
      desc: 'Eres el centro de mi galaxia, la persona que ilumina cada rincón de mi vida y mi motivo favorito para sonreír cada día. ¡Te amo con todo mi corazón, Maybeth!',
      svg: 'assets/roses.svg'
    };
    centralMaybethGroup.add(maybethSprite);
    interactiveObjects.push(maybethSprite);

    // 2. Corazones flotantes dorados que orbitan alrededor de MAYBETH
    const heartCount = 6;
    for (let i = 0; i < heartCount; i++) {
      const heartCanvas = document.createElement('canvas');
      heartCanvas.width = 128;
      heartCanvas.height = 128;
      const ctx = heartCanvas.getContext('2d');
      ctx.font = '72px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 15;
      ctx.fillStyle = i % 2 === 0 ? '#ffd700' : '#ffca28';
      ctx.fillText('💛', 64, 64);

      const hTexture = new THREE.CanvasTexture(heartCanvas);
      const hMat = new THREE.SpriteMaterial({ map: hTexture, transparent: true });
      const hSprite = new THREE.Sprite(hMat);
      hSprite.scale.set(5.5, 5.5, 1);
      hSprite.userData = {
        orbitAngle: (i / heartCount) * Math.PI * 2,
        orbitRadius: 20 + (i % 3) * 3,
        orbitSpeed: 0.8 + (i * 0.1),
        yOffset: (i % 2 === 0 ? 6 : 10)
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

      // Coordenadas basadas en ángulo y radio
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

      // Escala de la flor
      const scaleVal = flowerData.type === 'bouquet' ? 14 : (flowerData.type === 'roses' ? 13 : 11);
      flowerSprite.scale.set(scaleVal, scaleVal, 1);
      flowerSprite.position.set(0, scaleVal * 0.35, 0);

      // Metadatos para interacción
      flowerSprite.userData = {
        isFlower: true,
        parentGroup: flowerSubGroup,
        baseScale: scaleVal,
        data: flowerData
      };

      flowerSubGroup.add(flowerSprite);
      interactiveObjects.push(flowerSprite);

      // 2. Halo de Luz / Anillo brillante bajo la flor
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

    // Fondo / Contorno oscuro para legibilidad perfecta contra estrellas
    ctx.strokeStyle = 'rgba(5, 2, 10, 0.88)';
    ctx.lineWidth = 7;
    ctx.strokeText(text, 256, 64);

    // Resplandor dorado
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

  // --- MANEJO DE EVENTOS (MOUSE, TOUCH, MODAL, AUDIO) ---
  function setupEventListeners() {
    // 1. Clic en pantalla inicial "Toca para iniciar"
    introScreen.addEventListener('click', startExperience);
    introScreen.addEventListener('touchstart', startExperience, { passive: true });

    // 2. Redimensionamiento de ventana
    window.addEventListener('resize', onWindowResize);

    // 3. Hover (Raycasting)
    window.addEventListener('mousemove', onMouseMove);

    // 4. Clic en flores
    window.addEventListener('click', onFlowerClick);
    window.addEventListener('touchend', onTouchEnd);

    // 5. Botón de cerrar modal
    modalCloseBtn.addEventListener('click', closeModal);
    flowerModal.addEventListener('click', (e) => {
      if (e.target === flowerModal) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // 6. Botón de Música
    btnAudio.addEventListener('click', toggleAudio);

    // 7. Botón de restablecer cámara
    btnResetCam.addEventListener('click', resetCameraView);
  }

  // --- INICIAR EXPERIENCIA CON EXPLOSIÓN DE FLORES ---
  function startExperience() {
    if (isStarted) return;
    isStarted = true;

    // Reproducir música
    playAudio();

    // Transición visual: desvanecer pantalla de intro
    introScreen.classList.add('fade-out');
    setTimeout(() => {
      if (introScreen) introScreen.style.display = 'none';
    }, 1200);

    // Animación de cámara inicial: entrada elegante
    const startY = 160;
    const targetY = 95;
    const startZ = 240;
    const targetZ = 155;
    const duration = 2400;
    const startTime = performance.now();

    function flyIn(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cúbico out
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

  // --- DETECCIÓN DE HOVER (RAYCASTING) ---
  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
      const hitObj = intersects[0].object;
      document.body.style.cursor = 'pointer';

      if (hoveredObject !== hitObj) {
        // Restaurar anterior si existía
        if (hoveredObject && hoveredObject.userData.baseScale) {
          hoveredObject.scale.set(
            hoveredObject.userData.baseScale,
            hoveredObject.userData.baseScale,
            1
          );
        }
        hoveredObject = hitObj;
        // Efecto hover: agrandar suavemente
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

  // --- CLIC EN FLOR (ABRIR MODAL) ---
  function onFlowerClick(event) {
    // Ignorar clic si ocurrió dentro de controles de la UI
    if (event.target.closest('#ui-overlay') || event.target.closest('#flower-modal')) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);

    if (intersects.length > 0) {
      const selected = intersects[0].object;
      if (selected.userData.isFlower) {
        openModal(selected.userData.data);
      } else if (selected.userData.isCenter) {
        openModal({
          title: selected.userData.title,
          desc: selected.userData.desc,
          svg: selected.userData.svg
        });
      }
    }
  }

  let touchStartTime = 0;
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
      if (selected.userData.isFlower) {
        openModal(selected.userData.data);
      } else if (selected.userData.isCenter) {
        openModal({
          title: selected.userData.title,
          desc: selected.userData.desc,
          svg: selected.userData.svg
        });
      }
    }
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
      const pos = skySunflowerPoints.geometry.attributes.position;
      skySunflowerPoints.rotation.z = Math.sin(elapsedTime * 0.4) * 0.03;
      skySunflowerPoints.position.y = 68 + Math.sin(elapsedTime * 0.8) * 1.5;
    }

    // 4. Animación del núcleo central "MAYBETH" y sus corazones
    if (centralMaybethGroup) {
      // Pulso suave del texto MAYBETH
      const maybethSprite = centralMaybethGroup.children[0];
      if (maybethSprite) {
        const pulse = 1.0 + Math.sin(elapsedTime * 2.5) * 0.05;
        maybethSprite.scale.set(38 * pulse, 9.5 * pulse, 1);
      }

      // Orbitar corazones alrededor de MAYBETH
      for (let i = 1; i < centralMaybethGroup.children.length; i++) {
        const h = centralMaybethGroup.children[i];
        if (h.userData.orbitAngle !== undefined) {
          const angle = h.userData.orbitAngle + elapsedTime * h.userData.orbitSpeed * 0.4;
          h.position.x = Math.cos(angle) * h.userData.orbitRadius;
          h.position.z = Math.sin(angle) * h.userData.orbitRadius;
          h.position.y = h.userData.yOffset + Math.sin(elapsedTime * 2 + i) * 1.2;
        }
      }
    }

    // 5. Flotación oscilante (bobbing) de cada flor y su frase
    flowersGroup.children.forEach((fGroup) => {
      const u = fGroup.userData;
      fGroup.position.y = u.baseY + Math.sin(elapsedTime * u.bobSpeed + u.bobOffset) * 1.4;
    });

    // 6. Actualizar Controles Orbitales
    controls.update();

    // 7. Renderizar
    renderer.render(scene, camera);
  }

  // Iniciar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

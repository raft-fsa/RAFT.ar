const onxrloaded = () => {

  let animateCube
  let animateNameCubeOne
  let animatePhoneCubeOne
  let animateGitCubeOne
  let animateNameCubeTwo
  let animatePhoneCubeTwo
  let animateGitCubeTwo
  
  const initXrScene = ({scene, camera}) => {
    // CUBE
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const iconGeometry = new THREE.BoxGeometry(5, 5, 0.5);
      //materials
    const material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/logo.png'), transparent: true})
    const nameMaterials = [
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/name-icon.png'), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/name-icon.png'), transparent: true, side: THREE.FrontSide})
    ]
    const phoneMaterials = [
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/phone-icon.png'), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/phone-icon.png'), transparent: true, side: THREE.FrontSide})
    ]
    const gitMaterials = [
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/git-icon.png'), transparent: true, side: THREE.FrontSide}),
      new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('img/git-icon.png'), transparent: true, side: THREE.FrontSide})
    ]
      //meshes
    const cube = new THREE.Mesh(geometry, material);
    const nameCubeOne = new THREE.Mesh(iconGeometry, nameMaterials);
    const phoneCubeOne = new THREE.Mesh(iconGeometry, phoneMaterials);
    const gitCubeOne = new THREE.Mesh(iconGeometry, gitMaterials);
    const nameCubeTwo = new THREE.Mesh(iconGeometry, nameMaterials);
    const phoneCubeTwo = new THREE.Mesh(iconGeometry, phoneMaterials);
    const gitCubeTwo = new THREE.Mesh(iconGeometry, gitMaterials);
      //animations
    animateCube = cube;
    animateNameCubeOne = nameCubeOne;
    animatePhoneCubeOne = phoneCubeOne;
    animateGitCubeOne = gitCubeOne;
    animateNameCubeTwo = nameCubeTwo;
    animatePhoneCubeTwo = phoneCubeTwo;
    animateGitCubeTwo = gitCubeTwo;
      //positions
    cube.position.set(0, 2, -12);
    nameCubeOne.position.set(-96, 24, -50);
    phoneCubeOne.position.set(-97, 14, -50);
    gitCubeOne.position.set(-98, 4, -50);
    nameCubeTwo.position.set(35, 21, -50);
    phoneCubeTwo.position.set(35, 11, -50);
    gitCubeTwo.position.set(35, 1, -50);
      //scene
    scene.add(cube, nameCubeOne, phoneCubeOne, gitCubeOne, nameCubeTwo, phoneCubeTwo, gitCubeTwo)

    // LIGHT
    const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1 );
    const light1 = new THREE.DirectionalLight( 0xFFFFFF, 2, 50);
    light1.position.x = -5;
    scene.add(ambientLight, light1)

    // TEXT

    const ryanLoader = new THREE.FontLoader()
    ryanLoader.load("fonts/Amatic SC_Bold.js", function (font) {
      const nameGeometry = new THREE.TextGeometry("Ryan Ferreras", {
        font: font,
        size: 7,
        height: 1,
        curveSegments: 1,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelEnabled: true
      })
      const phoneGeometry = new THREE.TextGeometry("(201) 867-5309", {
        font: font,
        size: 7,
        height: 1,
        curveSegments: 1,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelEnabled: true
      })
      const gitGeometry = new THREE.TextGeometry("github.com/ryanferreras", {
        font: font,
        size: 7,
        height: 1,
        curveSegments: 1,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelEnabled: true
      })
      const textMaterial = new THREE.MeshLambertMaterial(
        {color: 0x2299E8, specular: 0x000000}
      )
      const name = new THREE.Mesh(nameGeometry, textMaterial)
      const phone = new THREE.Mesh(phoneGeometry, textMaterial)
      const git = new THREE.Mesh(gitGeometry, textMaterial)
      scene.add(name, phone, git)
      name.position.set(-90, 20, -50)
      phone.position.set(-90, 10, -50)
      git.position.set(-90, 0, -50)
      name.lookAt(camera.position)
      phone.lookAt(camera.position)
      git.lookAt(camera.position)
    })

    const alvinLoader = new THREE.FontLoader()
    alvinLoader.load("fonts/Didact Gothic_Regular.js", function (font) {
      const nameGeometry = new THREE.TextGeometry("Alvin Tang", {
        font: font,
        size: 4,
        height: 1,
        curveSegments: 1,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelEnabled: true
      })
      const phoneGeometry = new THREE.TextGeometry("(678) 999-8212", {
        font: font,
        size: 4,
        height: 1,
        curveSegments: 1,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelEnabled: true
      })
      const gitGeometry = new THREE.TextGeometry("github.com/alvinjtang", {
        font: font,
        size: 4,
        height: 1,
        curveSegments: 1,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelEnabled: true
      })
      const textMaterial = new THREE.MeshLambertMaterial(
        {color: 0xE75480}
      )
      const name = new THREE.Mesh(nameGeometry, textMaterial)
      const phone = new THREE.Mesh(phoneGeometry, textMaterial)
      const git = new THREE.Mesh(gitGeometry, textMaterial)
      scene.add(name, phone, git)
      name.position.set(40, 20, -50)
      phone.position.set(40, 10, -50)
      git.position.set(40, 0, -50)
      name.lookAt(camera.position)
      phone.lookAt(camera.position)
      git.lookAt(camera.position)
    })
    camera.position.set(0, 3, 0)
  }

  XR.addCameraPipelineModules([
    XR.GlTextureRenderer.pipelineModule(),
    XR.Threejs.pipelineModule(),
    XR.XrController.pipelineModule(),
    XRExtras.AlmostThere.pipelineModule(),
    XRExtras.RuntimeError.pipelineModule(),
  ])

  XR.addCameraPipelineModule({
    name: 'myawesomeapp',
    onStart: ({canvasWidth, canvasHeight}) => {
      const {scene, camera} = XR.Threejs.xrScene()
      initXrScene({scene, camera})
      XR.XrController.updateCameraProjectionMatrix({
        origin: camera.position,
        facing: camera.quaternion,
      })
    },

    onUpdate: () => {
      animateCube.rotation.x += 0.05
      animateCube.rotation.y += 0.05
      animateNameCubeOne.rotation.y += 0.05
      animatePhoneCubeOne.rotation.y += 0.05
      animateGitCubeOne.rotation.y += 0.05
      animateNameCubeTwo.rotation.y += 0.05
      animatePhoneCubeTwo.rotation.y += 0.05
      animateGitCubeTwo.rotation.y += 0.05
    },
  })

  const pauseButton = document.getElementById('pause')
  pauseButton && pauseButton.addEventListener(
    'click',
    () => {
      if (!XR.isPaused()) {
        XR.pause()
        pauseButton.innerHTML = "RESUME"
        pauseButton.className = 'paused'
      } else {
        XR.resume()
        pauseButton.innerHTML = "PAUSE",
        pauseButton.className = ''
      }
    },
    true)

  const canvas = document.getElementById('camerafeed')
  canvas.addEventListener(
    'touchstart', (e) => { e.touches.length == 2 && XR.XrController.recenter() }, true)

  XR.run({canvas})
}

window.onload = () => {window.XR ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)}

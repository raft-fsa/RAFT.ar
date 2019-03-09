const onxrloaded = () => {

  let animateCube
  const initXrScene = ({scene, camera}) => {
    const geometry = new THREE.CubeGeometry(2, 2, 2);
    const material = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('../img/logo.png'), transparent: true})
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 1, -10);
    animateCube = cube;
    scene.add(cube)

    const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1 );

    const light1 = new THREE.DirectionalLight( 0xFFFFFF, 2, 50);

    light1.position.x = -5;
    scene.add(ambientLight, light1)

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

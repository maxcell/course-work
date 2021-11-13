import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();

const domElement =  document.getElementById('canvas')


const cursor = { x: 0, y: 0 }

const sizes = {
  width: 800,
  height: 600
}

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5 // midpoint
  cursor.y = event.clientY / sizes.height - 0.5 // midpoint
})

const geometry = new THREE.BoxGeometry(1, 1, 1)
const mesh = new THREE.MeshBasicMaterial({
  color: 'red'
})

const cube = new THREE.Mesh(geometry, mesh)

    // const aspectRatio = sizes.width / sizes.height
    //   const camera = new THREE.OrthographicCamera(
    //     -1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 1000
    //   )
const camera = new THREE.PerspectiveCamera(
  75, // FOV
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.z = 3

const orbitControls = new OrbitControls(camera, domElement)
orbitControls.enableDamping = true

scene.add(cube)

// Vectors can be manually changed around as well
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
  canvas: domElement
})

renderer.setSize(sizes.width, sizes.height)

let clock = new THREE.Clock()
function loop() {
orbitControls.update()

  // cube.rotation.y = clock.getElapsedTime() * Math.PI * 0.5
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}

loop()


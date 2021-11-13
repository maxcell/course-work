import * as THREE from 'three';

const scene = new THREE.Scene();

const sizes = {
  width: 800,
  height: 600
}

// const camera = new THREE.PerspectiveCamera(
//   75, // FOV
//   sizes.width / sizes.height,
//   0.1,
//   100
// )
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 1000
)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const mesh = new THREE.MeshBasicMaterial({
  color: 'red'
})

const cube = new THREE.Mesh(geometry, mesh)
camera.position.z = 10

scene.add(cube)

// Vectors can be manually changed around as well
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})

renderer.setSize(sizes.width, sizes.height)

let clock = new THREE.Clock()
function loop() {
  camera.position.x = Math.cos(clock.getElapsedTime()) * Math.PI
  camera.position.y = Math.sin(clock.getElapsedTime()) * Math.PI
  camera.lookAt(cube.position)
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}

loop()


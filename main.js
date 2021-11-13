import * as THREE from 'three';

const scene = new THREE.Scene();

const sizes = {
  width: 600,
  height: 800
}

const camera = new THREE.PerspectiveCamera(
  45, // FOV
  sizes.width / sizes.height,
  0.1,
  1000
)

const geometry = new THREE.TorusGeometry(1, 0.15, Math.PI * 100, 45);
// const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: 'goldenrod'
})

const cube = new THREE.Mesh(geometry, material)
camera.position.z = 10
cube.position.set(0, 0, 3)

cube.rotation.y = 1

// Look into Gimbal Lock
// To avoid this is, you need to use reorder
// Apply the reorder prior to any rotation
scene.add(cube)


// Vectors can be manually changed around as well
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})

renderer.setSize(sizes.width, sizes.height)
let clock = new THREE.Clock()
function loop() {
  let elapsedTime = clock.getElapsedTime()
 // console.log(Math.sin(elapsedTime))
  // cube.rotation.z = Math.sin(elapsedTime)
  //cube.rotation.y = elapsedTime * -Math.PI//Math.cos(elapsedTime)
  
  //cube.position.z = Math.sin(elapsedTime)
  cube.rotation.y = elapsedTime * Math.PI
  // cube.position.x = Math.sin(elapsedTime)
  // cube.position.y = Math.cos(elapsedTime)
  window.requestAnimationFrame(loop)
  renderer.render(scene, camera)
}

loop()
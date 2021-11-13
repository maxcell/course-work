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

const geometry = new THREE.BoxGeometry(1, 1, 1)
const mesh = new THREE.MeshBasicMaterial({
  color: 'red'
})

const cube = new THREE.Mesh(geometry, mesh)
camera.position.z = 10
cube.position.set(1, -0.6, 3)

scene.add(cube)

// Vectors can be manually changed around as well
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera) 
import * as THREE from 'three';

const scene = new THREE.Scene();

const sizes = {
  width: 600,
  height: 800
}

const geometry = new THREE.BoxGeometry(1, 1, 1)
const mesh = new THREE.MeshBasicMaterial({
  color: 'red'
})

const cube = new THREE.Mesh(geometry, mesh)


scene.add(cube)
const camera = new THREE.PerspectiveCamera(
  75, // FOV
  sizes.width / sizes.height,
  0.1,
  1000
)

camera.position.z = 5
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas')
})

renderer.setSize( sizes.width, sizes.height)

renderer.render(scene, camera) 
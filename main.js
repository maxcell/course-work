import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const domElement = document.getElementById('canvas')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', (event) => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

const camera = new THREE.PerspectiveCamera(
  45, // FOV
  sizes.width / sizes.height,
  0.1,
  1000
)

const polyGroup = []
for(let i = 0; i < 5; i++) {
  const geometry = new THREE.IcosahedronGeometry(1, 0)
  // const geometry = new THREE.TorusKnotGeometry(12, 1, 100, 16)
  const mesh = new THREE.MeshNormalMaterial({
  })
  //const mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({map: tex}));
  // const mesh = new THREE.MeshBasicMaterial({
  //   color: 'goldenrod',
  //   wireframe: true
  // })

  const polyhedron = new THREE.Mesh(geometry, mesh)
  polyhedron.position.set(3 * i - 3, 0, 0)



  polyGroup.push(polyhedron)
  scene.add(polyhedron)
}



// const geometry = new THREE.DodecahedronGeometry(1, 0)
// // const geometry = new THREE.TorusKnotGeometry(12, 1, 100, 16)
// const mesh = new THREE.MeshBasicMaterial({
//   color: 'goldenrod',
//   wireframe: true
// })

// const cube = new THREE.Mesh(geometry, mesh)
camera.position.z = 20

// scene.add(cube)


// Vectors can be manually changed around as well
scene.add(camera)

const controls = new OrbitControls(camera, domElement)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({
  canvas: domElement
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const clock = new THREE.Clock()
function loop() {
  polyGroup.forEach((element, index)=> {
      element.rotation.x =  Math.sin(clock.getElapsedTime()) * (index % 2 == 0 ? -1 : 1) * Math.PI
      element.rotation.z =  Math.cos(clock.getElapsedTime()) * 1 * Math.PI
    }
  )

  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}

loop()
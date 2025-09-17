import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

// const geometry = new THREE.BoxGeometry(1, 1, 1)
const ellipseShape = new THREE.Shape();
const xRadius = 2;
const yRadius = 1;
ellipseShape.absellipse(0, 0, xRadius, yRadius, 0, Math.PI * 2, false, 0);

const geometry = new THREE.ShapeGeometry(ellipseShape);
const material = new THREE.MeshBasicMaterial({ color: 0xff5733, side: THREE.DoubleSide });
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function animate() {
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    renderer.render(scene, camera)
}

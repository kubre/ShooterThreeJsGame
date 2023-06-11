import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 0.5;
scene.add(cube);
camera.position.z = 5;
camera.position.y = 2;


const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.DoubleSide,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = Math.PI / 2;
scene.add(ground);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

window.addEventListener(
    "keydown",
    (e) => {
        const speed = 0.1;
        if (e.key === "w") cube.position.z -= speed;
        if (e.key === "s") cube.position.z += speed;
        if (e.key === "a") cube.position.x -= speed;
        if (e.key === "d") cube.position.x += speed;
    },
    false
);

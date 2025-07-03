import * as THREE from 'three';

const target = new THREE.Vector3(0,0,2);

const intersectionPoint = new THREE.Vector3();
const planeNormal = new THREE.Vector3();
const plane = new THREE.Plane();
const myMousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

export function mousePositionTo3D(mousePosition, modelPosition, camera) {
    myMousePosition.set(mousePosition.x, mousePosition.y);
    planeNormal.copy(camera.position).normalize();
    plane.setFromNormalAndCoplanarPoint(planeNormal, modelPosition);
    raycaster.setFromCamera(myMousePosition, camera);
    raycaster.ray.intersectPlane(plane, intersectionPoint);
    target.set(intersectionPoint.x, intersectionPoint.y, 0.5);
    return target;
}
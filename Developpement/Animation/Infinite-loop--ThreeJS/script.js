let scene, camera, rendu, forme;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000);
    camera.position.z = 100;
    
    rendu = new THREE.WebGLRenderer();
    rendu.setSize(window.innerWidth, window.innerHeight);
    rendu.setClearColor(0x132644)
    
    document.body.appendChild(rendu.domElement);
    
    //-------------------------On crée la forme-------------------------------------------
    
    forme = new THREE.Group();
    let geometrie = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    let materiel = new THREE.MeshNormalMaterial({
        color: 0xff000,
        transparent: true,
        opacity: 1,
        wireframe: true,
        wireframeLinewidth: 5,
        wireframeLinejoin: 'round',
        wireframeLinecap: 'round'
    });
    
    forme.add(new THREE.Mesh(geometrie, materiel));
    
    scene.add(forme);
    
    //-------------------------On controle la position de la caméra------------------------
    
    let control = new THREE.OrbitControls(camera);
    control.update();
}

let animer = function() {
    requestAnimationFrame(animer);

    forme.rotation.x += 0.005;
    forme.rotation.y += 0.005;

    rendu.render(scene, camera);
};

// On crée une fonction pour prendre en compte le resize de la fenêtre

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    rendu.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onWindowResize, false);

init();
animer();
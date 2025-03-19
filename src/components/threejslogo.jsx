import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeJSLogo = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        // Check if we've already created a scene
        if (sceneRef.current || !mountRef.current) return;
        
        // Check if there's already a canvas in this container
        if (mountRef.current.querySelector('canvas')) return;
        
        // Create scene only once
        sceneRef.current = true;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        // Set the initial size of the renderer
        const setRendererSize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        // Append the renderer's DOM element to the mountRef
        mountRef.current.appendChild(renderer.domElement);
        setRendererSize(); // Set initial size

        // Add OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.rotateSpeed = 0.5;
        
        // Add lighting to better see the model
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(0, 10, 10);
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load('dist/assets/wplogo.glb', (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            // Center the model
            const box = new THREE.Box3().setFromObject(model);
            const center = new THREE.Vector3();
            box.getCenter(center);
            model.position.sub(center);

            // Adjust camera position
            camera.position.z = 5;
            model.scale.set(0.5, 0.5, 0.5);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            setRendererSize(); // Update renderer size on window resize
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            // Reset sceneRef when component unmounts
            sceneRef.current = null;
        };
    }, []);

    return <div ref={mountRef} className="threejs-logo-container" style={{ width: '100%', height: '100%' }} />;
};

export default ThreeJSLogo;
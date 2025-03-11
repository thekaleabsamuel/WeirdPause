import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeJSLogo from './threejslogo';

const Landing = () => {
    useEffect(() => {
        document.querySelectorAll('a.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        });
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Weird Pause</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#main">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#ourwork">Our Work</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id="main" className="d-flex align-items-center justify-content-center text-white text-center vh-100 bg-dark" style={{ position: "relative", overflow: "hidden" }}>
    <video autoPlay loop muted playsInline style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", top: 0, left: 0, zIndex: 1 }}>
        <source src="dist/assets/weirdpause.mp4" type="video/mp4" />
    </video>

    <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%' 
            }}
        >
            {/* Replace the "Weird Pause" text with the 3D logo */}
            <div style={{ width: '100%', height: '50vh', position: 'relative' }}>
                <ThreeJSLogo />
            </div>
            <a 
                href="#ourwork" 
                className="btn btn-outline-light btn-lg mt-3"
                onClick={(e) => {
                    e.preventDefault(); 
                    document.querySelector("#ourwork").scrollIntoView({ behavior: "smooth" });
                }}
            >
                Learn More
            </a>
        </motion.div>
    </div>
</section>

            {/* Rest of your code remains unchanged */}
        </>
    );
};

export default Landing;
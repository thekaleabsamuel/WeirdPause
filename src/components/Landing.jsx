import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Use loadSlim
import { useEffect, useCallback, useState } from 'react';

const Landing = () => {
    const [particlesInitialized, setParticlesInitialized] = useState(false);
    const [particlesError, setParticlesError] = useState(null);
    const [particlesContainer, setParticlesContainer] = useState(null);

    useEffect(() => {
        document.querySelectorAll('a.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        });

        console.log("Landing component mounted");

        return () => {
            if (particlesContainer) {
                particlesContainer.destroy();
            }
        };
    }, [particlesContainer]);

    const particlesInit = useCallback(async (engine) => {
        console.log("Starting to initialize particles engine...");
        console.log("Engine object:", engine); // Debug log
        try {
            await loadSlim(engine); // Use loadSlim
            console.log("Particles engine initialized successfully");
            setParticlesInitialized(true);
        } catch (error) {
            console.error("Failed to initialize particles:", error);
            setParticlesError(error.message);
        }
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles container loaded:", container);
        setParticlesContainer(container);

        if (container) {
            const canvas = container.canvas.element;
            if (canvas) {
                console.log("Particles canvas properties:", {
                    width: canvas.width,
                    height: canvas.height,
                    visible: canvas.style.visibility !== "hidden",
                    display: canvas.style.display !== "none",
                    zIndex: canvas.style.zIndex
                });
            } else {
                console.warn("Particles canvas element not found");
            }
        }
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
                            {/* <li className="nav-item"><a className="nav-link" href="#whatwedo">What We Do</a></li> */}
                            <li className="nav-item"><a className="nav-link" href="#ourwork">Our Work</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id="main" className="d-flex align-items-center justify-content-center text-white text-center vh-100 bg-dark" style={{ position: "relative", overflow: "hidden" }}>
                {particlesError && (
                    <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,0,0,0.7)", padding: "5px", borderRadius: "5px", zIndex: 100 }}>
                        Particles error: {particlesError}
                    </div>
                )}
                
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
    fullScreen: { enable: false }, // Keeps it inside the section
    particles: {
        number: { value: 50 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        move: {
            enable: true, // Ensures animation happens
            speed: 2, // Speed of particles
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" }
        }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
        }
    }
}}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />
                
                <div className="container" style={{ position: "relative", zIndex: 5 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="display-3 fw-bold">Weird Pause</h1>
                        <p className="lead">We create sleek and modern experiences.</p>
                        <a href="#whatwedo" className="btn btn-outline-light btn-lg mt-3">Learn More</a>
                    </motion.div>
                </div>
            </section>
            {/* Our Work Section */}
            <section id="ourwork" className="py-5 custom-bg">
            <div className="container text-center">
                    <h2 className="text-light">Our Expertise</h2>
                    <p className="lead text-secondary">The things we do best.</p>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <img src="dist/assets/content.png" className="card-img-top" alt="Project 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-light">Content Production</h5>
                                    <p className="card-text text-secondary">Bring your corporate needs to life with our team of higly skilled and talented content producers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <img src="dist/assets/social.png" className="card-img-top" alt="Project 2" />
                                <div className="card-body">
                                    <h5 className="card-title text-light">Social Media Integration</h5>
                                    <p className="card-text text-secondary">Help bring new life into your business as we help you expand your business into the social media platforms best suited to your cause.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                            <img src="dist/assets/product.png" className="card-img-top" alt="Project 3" />
                            <div className="card-body">
                                    <h5 className="card-title text-light">Product Management</h5>
                                    <p className="card-text text-secondary">Our team will work closely with yours to help faciliate, plan and execute the release and development of products from inception to rollout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="py-5 custom-bg">
                <div className="container text-center">
                    <h2>Contact Us</h2>
                    <p className="lead text-light">We'd love to hear from you. Get in touch!</p>
                    <form className="mt-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <input type="text" className="form-control mb-3 bg-dark text-white border-secondary" placeholder="Your Name" />
                                <input type="email" className="form-control mb-3 bg-dark text-white border-secondary" placeholder="Your Email" />
                                <textarea className="form-control mb-3 bg-dark text-white border-secondary" rows="4" placeholder="Your Message"></textarea>
                                <button type="submit" className="btn btn-outline-light">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-3 bg-dark text-white">
                <p className="mb-0">&copy; 2025 Weird Pause. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Landing;
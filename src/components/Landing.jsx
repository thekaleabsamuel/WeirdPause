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
                        {/* Fixed container for the 3D logo */}
                        <div style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '80%', height: '100%', position: 'relative' }}>
                                <ThreeJSLogo />
                            </div>
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
                                    <p className="card-text text-secondary">Bring your corporate needs to life with our team of highly skilled and talented content producers.</p>
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
                                <img src="dist/assets/product.png" className="card-img-top" alt="Project 3" style={{ width: "90%" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-light">Product Management</h5>
                                    <p className="card-text text-secondary">Our team will work closely with yours to help facilitate, plan, and execute the release and development of products from inception to rollout.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <footer className="text-center py-3 bg-dark text-white">
                <p className="mb-0">&copy; 2025 Weird Pause. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Landing;
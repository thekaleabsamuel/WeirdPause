import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useEffect } from 'react';

const Landing = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
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
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Weird Pause</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#main">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#whatwedo">What We Do</a></li>
                            <li className="nav-item"><a className="nav-link" href="#ourwork">Our Work</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Section */}
            <section id="main" className="d-flex align-items-center justify-content-center text-white text-center vh-100 bg-dark">
                <div>
                    <h1>Weird Pause</h1>
                    <p className="lead">We create sleek and modern experiences.</p>
                    <a href="#whatwedo" className="btn btn-outline-light">Learn More</a>
                </div>
            </section>

            {/* What We Do Section */}
            <section id="whatwedo" className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="text-light">What We Do</h2>
                    <p className="lead text-secondary">We specialize in creating content that is essential for growing your business</p>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <i className="bi bi-laptop display-4 text-light"></i>
                            <h4 className="text-light">Content Creation</h4>
                            <p className="text-secondary">Crafting beautiful and responsive videos.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-code-slash display-4 text-light"></i>
                            <h4 className="text-light">Web Development</h4>
                            <p className="text-secondary">Building powerful and scalable web applications.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-bar-chart display-4 text-light"></i>
                            <h4 className="text-light">SEO Optimization</h4>
                            <p className="text-secondary">Ensuring your website ranks high on search engines.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <section id="ourwork" className="py-5 bg-white">
                <div className="container text-center">
                    <h2 className="text-light">Our Work</h2>
                    <p className="lead text-secondary">Here are some of our recent projects.</p>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Project 1" />
                                <div className="card-body">
                                    <h5 className="card-title text-light">Project One</h5>
                                    <p className="card-text text-secondary">A modern web project with sleek design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Project 2" />
                                <div className="card-body">
                                    <h5 className="card-title text-light">Project Two</h5>
                                    <p className="card-text text-secondary">A seamless user experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Project 3" />
                                <div className="card-body">
                                    <h5 className="card-title text-light">Project Three</h5>
                                    <p className="card-text text-secondary">A bold and creative website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className="py-5 bg-black text-white">
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
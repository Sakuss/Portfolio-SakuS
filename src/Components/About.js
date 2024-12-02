import React from "react";
import './About.css';
import image from '../kuva1.png';

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2 className="about-heading">Saku Suorajärvi</h2>
                    <p className="about-description">
                        I am a 24-year-old software development student from Oulu, Finland, nearing the completion of my degree. 
                        I am mainly looking for internship positions in my field of work, but I could also work part-time.
                        My main interests are junior level software development and testing, but I'm open to other positions aswell.
                    </p>
                    <div className="about-links">
                        <a href="https://github.com/Sakuss" target="_blank" rel="noopener noreferrer" className="about-link">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/saku-suoraj%C3%A4rvi-111bb6231/" target="_blank" rel="noopener noreferrer" className="about-link">
                            LinkedIn
                        </a>
                    </div>
                </div>
                <div className="about-image">
                    <img src={image} alt="Saku Suorajärvi" className="profile-picture" />
                </div>
            </div>
        </section>
    );
}

export default About;
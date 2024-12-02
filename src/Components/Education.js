import React from "react";
import './Education.css';

function Education() {
    return (
        <section id="education" className="education-section">
            <h2 className="education-heading">Education</h2>
            <ul className="education-list">
                <li className="education-item">
                    <h3 className="education-title">Bachelor of Engineering in ICTs, Software Development</h3>
                    <p className="education-description">Institution: Oulu University of Applied Sciences</p>
                    <p className="education-description">Year: 2021 - 2025</p>
                    <p className="education-description">I'm in my fourth and last year, just a thesis and internship away from completing my engineering degree.</p>
                </li>
                <li className="education-item">
                    <h3 className="education-title">Matriculation Examination</h3>
                    <p className="education-description">Institution: Kempele High School</p>
                    <p className="education-description">Year: 2016 - 2019</p>
                </li>
            </ul>
        </section>
    );
}

export default Education;
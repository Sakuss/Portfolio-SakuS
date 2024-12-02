import React from "react";
import './Skills.css'; // Import the new CSS file

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-heading">Skills</h2>
            <ul className="skills-list">
                <li className="skill-item">
                    <h3 className="skill-title">Coding languages:</h3>
                    <p className="skill-description">I have primarily worked on school projects using React, Python,
                        and Flutter, such as developing a fitness tracker mobile app, climate change data chart website
                        and an AI chatbot using OpenAI's API. I also have basic knowledge of C, C++, Java, MySQL,
                        and Kotlin, supported by coursework and small projects. 
                        Additionally, I have experience in Linux shell scripting.</p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Version control:</h3>
                    <p className="skill-description">I have hands-on experience with Git for version control, 
                        managing repositories and workflows during numerous school projects. 
                        I am proficient in branching, merging, resolving conflicts, and creating pull requests.</p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Windows-operating system and Office 365:</h3>
                    <p className="skill-description">I am proficient in the Windows operating system, including advanced 
                        features like system troubleshooting, performance optimization, and file management. In the Office 
                        365 environment, I have experience utilizing Excel, Word, Powerpoint and Teams. </p>
                </li>
                <li className="skill-item">
                    <h3 className="skill-title">Problem solving ability:</h3>
                    <p className="skill-description">I have a strong aptitude for quickly learning new devices and technologies. 
                        I am efficient at troubleshooting and able to come up with rather innovative solutions.</p>
                </li>
            </ul>
        </section>
    );
}

export default Skills;
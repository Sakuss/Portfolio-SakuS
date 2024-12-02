import React from "react";
import './Projects.css'; // Import the CSS file

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h3 className="projects-heading">My Projects</h3>
            <ul className="projects-list">
                <li className="project-item">
                    <h3 className="project-title">
                        Climate change visualization tool 
                    </h3>
                    <p className="project-description">Description: School project about visualizing climate data into interactive graphs. 
                        Everyone in the group worked as full-stack developers.</p>
                    <p className="project-tech">Technologies: Git, MySQL, Java Spring Boot, React</p>
                    <a href="https://github.com/Sakuss/Climate-change-visualization-project" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to project</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        Walking game
                    </h3>
                    <p className="project-description">Description: School project where every group had carte blanche so we did a game that tracks 
                        your steps and gives you points and achievements for walking. As in the previous project,
                        whole group worked as full-stack developers.</p>
                    <p className="project-tech">Technologies: Flutter, Firebase, Git</p>
                    <a href="https://github.com/Sakuss/Kavelypeli" target="_blank" rel="noopener noreferrer">
                        <p>Link to project</p>
                    </a>
                </li>
                <li className="project-item">
                    <h3 className="project-title">
                        ContextualAI Chatbot
                    </h3>
                    <p className="project-description">Description: School product development project about creating an Ai-bot that uses specified context 
                        to answer user's questions. The bot was also prompted to not just copy what the context says, but give suggestions and ideas based on the question and the context. 
                        Everyone in the group worked as full-stack developers.</p>
                    <p className="project-tech">Technologies: Git, MySQL, React Vite, Python</p>
                    <a href="https://github.com/Sakuss/YP2-Chatbot" target="_blank" rel="noopener noreferrer"> 
                            <p>Link to project</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Projects;
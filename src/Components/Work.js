import React from "react";
import './Work.css'; // Import the new CSS file

function WorkExperience() {
    return (
        <section id="work" className="work-section">
            <h2 className="work-heading">Work Experience</h2>
            <ul className="work-list">
                <li className="work-item">
                    <h3 className="work-title">Cleaner</h3>
                    <p className="work-description">Company: Coor</p>
                    <p className="work-description">Year: 2022 - </p>
                    <p className="work-description">I do regular and thorough cleanings at this firm with zero-hours contract.</p>
                </li>
                <li className="work-item">
                    <h3 className="work-title">Night Security/Location Unit</h3>
                    <p className="work-description">Company: Whatevergroup</p>
                    <p className="work-description">Year: 2021 - 2024</p>
                    <p className="work-description">I've done some gigs for this company, mainly focusing on securing filming locations during the night or helping as a member of the location unit during filming.</p>
                </li>
                <li className="work-item">
                    <h3 className="work-title">Summer Jobs</h3>
                    <p className="work-description">Companies: Service One, Oulun teatteri, Polar Electro </p>
                    <p className="work-description">Year: 2014 - 2020</p>
                    <p className="work-description">I was cleaner at Service one in 2019, doing same things I do now at Coor. I was maintanence painter at Oulun teatteri in 2016. 
                        At Polar Electro, i was on preassembly team in 2014. The job included testing and assembling heart rate monitors.</p>
                </li>
            </ul>
        </section>
    );
}

export default WorkExperience;
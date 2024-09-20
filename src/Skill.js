import React from 'react';
import './Skill.css'; // Ensure this CSS file is created

// Import your own icons
import htmlIcon from './image/html.png'; // Adjust the path accordingly
import uiIcon from './image/UI.png';
import reactIcon from './image/react.png';
import angularIcon from './image/angularjs.png';
import jsIcon from './image/javascript.png';

const SkillsSection = () => {
    return (
        <div className="skills-section">
            <h2 className="skills-header">Design & Development Skills</h2>
            <p className="skills-intro">
                These are the core design and development skills that I have honed throughout my journey.
            </p>

            <div className="skills-list">
                <div className="skill-card">
                    <h3 className="skill-title">
                        <img src={htmlIcon} alt="HTML/CSS" className="skill-icon" /> HTML / CSS
                    </h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '90%' }}>90%</div>
                    </div>
                </div>

                <div className="skill-card">
                    <h3 className="skill-title">
                        <img src={reactIcon} alt="ReactJS" className="skill-icon" /> ReactJS
                    </h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '70%' }}>70%</div>
                    </div>
                </div>

                <div className="skill-card">
                    <h3 className="skill-title">
                        <img src={angularIcon} alt="Angular" className="skill-icon" /> Angular
                    </h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '50%' }}>50%</div>
                    </div>
                </div>

                <div className="skill-card">
                    <h3 className="skill-title">
                        <img src={jsIcon} alt="JavaScript" className="skill-icon" /> JavaScript
                    </h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '60%' }}>60%</div>
                    </div>
                </div>

                <div className="skill-card">
                    <h3 className="skill-title">
                        <img src={uiIcon} alt="UI Design" className="skill-icon" /> UI Design
                    </h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '80%' }}>80%</div>
                    </div>
                </div>
            </div>

            {/* Background Spheres */}
            <div className="bg-sphere sphere1"></div>
            <div className="bg-sphere sphere2"></div>
            <div className="bg-sphere sphere3"></div>
        </div>
    );
};

export default SkillsSection;

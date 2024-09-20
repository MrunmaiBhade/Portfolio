import React from 'react';
import './Footer.css'; // Ensure this CSS file is created

// Import your icons
import phoneIcon from './image/phone.png'; // Adjust the path accordingly
import linkedinIcon from './image/linkdein.png';
import emailIcon from './image/email.png';
import githubIcon from './image/github.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-title">Contact Me</h3>
                <div className="footer-links">
                    <a href="tel:9130095150" className="footer-link">
                        <div className="icon-container">
                            <img src={phoneIcon} alt="Phone" className="footer-icon" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/mrunmai-bhade-5ab526244" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <div className="icon-container">
                            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
                        </div>
                    </a>
                    <a href="mailto:m.bhade2003@gmail.com" className="footer-link">
                        <div className="icon-container">
                            <img src={emailIcon} alt="Email" className="footer-icon" />
                        </div>
                    </a>
                    <a href="https://github.com/MrunmaiBhade" className="footer-link" target="_blank" rel="noopener noreferrer">
                        <div className="icon-container">
                            <img src={githubIcon} alt="GitHub" className="footer-icon" />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

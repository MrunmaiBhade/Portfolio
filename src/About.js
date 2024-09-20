import React from 'react';
import './About.css';
import girl from './image/girl.png'; // Ensure the path is correct

const About = () => {
    return (
        <div className="about-page">
            {/* Background Spheres */}
            <div className="sphere sphere1"></div>
            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>

            <h1 className="about-header">About Me</h1>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! I'm Mrunmai Bhade, a passionate Front-End Developer with experience in creating dynamic and responsive web applications.
                        I specialize in using technologies like React, Angular, and JavaScript to build sleek, user-friendly interfaces.
                    </p>
                    <p>
                        I’m driven by curiosity and always eager to learn new things. Over the years, I have honed my skills in designing aesthetically pleasing
                        UIs, working on diverse projects that push my limits. Whether it's designing an engaging landing page or coding a complex web application,
                        I always ensure my work is optimized, performant, and user-centered.
                    </p>
                    <p>
                        Apart from coding, I love traveling and exploring different cultures. The blend of my technical expertise and creative flair allows me
                        to bring fresh perspectives to my projects, continuously striving for excellence.
                    </p>
                </div>

                <div className="about-photo">
                    <img src={girl} alt="About Me" className="about-image" /> {/* Use the imported variable here */}
                </div>
            </div>
        </div>
    );
}

export default About;

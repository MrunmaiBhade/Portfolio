import React, { useEffect, useRef } from 'react';
import './Home.css';
import mainImage from './image/women.jpeg'; // Main image file
import resume from './image/Mrunmai.pdf'; // Import your resume file if it's in your project

const Home = () => {
    const titleRef = useRef(null);
    const introRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const typeWriter = (element, text, speed) => {
            let index = 0;
            element.innerHTML = ""; // Clear the existing content
            const interval = setInterval(() => {
                if (index < text.length) {
                    element.innerHTML += text.charAt(index);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, speed);
        };

        // Type the content on page load
        if (titleRef.current) typeWriter(titleRef.current, "CREATIVE PORTFOLIO", 100);
        if (introRef.current) setTimeout(() => typeWriter(introRef.current, "Hi, I'm Mrunmai Bhade, a Frontend Developer", 100), 1500);
        if (descriptionRef.current) setTimeout(() => typeWriter(descriptionRef.current, "I am an enthusiastic frontend developer and designer.", 100), 3000);
    }, []);

    return (
        <div className="home-container">
            {/* Circle Overlaps */}
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>

            {/* Image Section */}
            <div className="outer-container">
                <div className="image-section">
                    <img
                        src={mainImage} // Replace with your actual image URL
                        alt="Photographer"
                        className="main-image"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="year typing-effect">2024</div>
                <h1 className="title" ref={titleRef}></h1>
                <p className="intro" ref={introRef}></p>
                <p className="description" ref={descriptionRef}></p>
                {/* Resume Button */}
                <a href={resume} className="contact-btn" target="_blank" rel="noopener noreferrer">
                    View Resume
                </a>
            </div>
        </div>
    );
};

export default Home;

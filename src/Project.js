import React, { useState } from 'react';
import './ProjectCard.css';
import ProjectCard from './ProjectCard';

const ProjectPage = () => {
    // All project data
    const projects = [
        {
            title: 'Weather App*',
            description: 'An Angular-based weather app displaying current weather conditions with animated transitions.',
            link: '#',
            category: 'Angular'
        },
        {
            title: 'React-Based Restaurant Website',
            description: 'A React-based application with all basic to advanced React concepts.',
            link: 'https://github.com/MrunmaiBhade/ReactApp-RestaurentWebsite',
            category: 'React'
        },
        {
            title: 'Business Contract Validation',
            description: 'An application used for validating contracts in a company.',
            link: 'https://github.com/Sagar55526/Intel-UNNATI-Data-Dynamo',
            category: 'JavaScript'
        },
        {
            title: 'Nartan Demo Dance Website',
            description: 'An application used for practicing the traditional dance form Bharatnatyam in an efficient way.',
            link: 'https://github.com/MrunmaiBhade/Nartan',
            category: 'HTML/CSS'
        },
        // Add more projects as needed
    ];

    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Function to filter projects based on category
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="project-page">
            {/* Spheres in the background */}
            <div className="sphere sphere1"></div>
            <div className="sphere sphere2"></div>
            <div className="sphere sphere3"></div>

            <h1 className="project-header">Projects</h1>
            <p className="project-intro">
                Here are some of the projects that showcase my skills and experiences in front-end development.
            </p>

            {/* Project Filters */}
            <div className="project-filters">
                <button
                    className={`filter-button ${selectedCategory === 'All' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('All')}
                >
                    All
                </button>
                <button
                    className={`filter-button ${selectedCategory === 'Angular' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('Angular')}
                >
                    Angular
                </button>
                <button
                    className={`filter-button ${selectedCategory === 'React' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('React')}
                >
                    React
                </button>
                <button
                    className={`filter-button ${selectedCategory === 'JavaScript' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('JavaScript')}
                >
                    JavaScript
                </button>
                <button
                    className={`filter-button ${selectedCategory === 'HTML/CSS' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('HTML/CSS')}
                >
                    HTML/CSS
                </button>
            </div>

            <div className="project-list">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        category={project.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectPage;

import { useState } from 'react';
import styles from './ProjectCarousele.module.css';
import ProjectElement from "./ProjectElement";

const projects = [
    { title: "TalkMeow",
        tags: ['Java 21', 'Spring Boot', 'JavaScript', 'Azure', 'Docker', 'PostgreSQL'],
        completed: true,
        completionData: '2024-10-16',
        value: "talkmeow",
        description: "TalkMeow is a web application that allows users to communicate with each other via chat in real time. The application is written in Java 21 using the Spring Boot framework. The frontend is built using JavaScript and the database is deployed on Azure while failover database is running on Docker. All data is stored in a PostgreSQL database."
    }, {
        title: "MerchStore",
        tags: ['Java', 'Spring Boot', 'JavaScript', 'Docker', 'PostgreSQL', 'Maven'],
        completed: true,
        completionData: '2024-09-31',
        value: "merchstore",
        description: "MerchStore is a comprehensive e-commerce platform enabling seamless online shopping and selling experiences. Developed with Java and Spring Boot, it features secure authentication, user roles, a product management system, currency exchange rate updates via API, and custom error handling. The application leverages cookies for personalized user experiences and is deployed with Docker and PostgreSQL."
    }, {
        title: "FlightRadar",
        tags: ['C#', 'OOD', 'JSON', 'Data Synchronization', 'GUI'],
        completed: true,
        completionData: '2024-06-03',
        value: "flightradar",
        description: "FlightRadar is an aviation data management application designed to demonstrate Object-Oriented Design (OOD) principles using C#. The project includes data loading and serialization, integration with real-time data from a simulated TCP server, data synchronization with a graphical user interface, and command-based data queries. Features include dynamic data updates, a world map displaying aircraft positions, and a news report generation system that outputs aircraft-related news every 10 seconds. The application provides robust command functionality for displaying, updating, and managing aviation data in a table format."
    }

];

function ProjectCarousele() {

    const [selectedItem, setSelectedItem] = useState(projects[0].value);

    return (
        <div className={styles.ProjectCarousele}>
            <div className={'LeftZone'}>
                <ul className={styles.ProjectList}>
                    {projects.map(project => (
                        <ProjectElement
                            key={project.value}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            completed={project.completed}
                            completionDate={project.completionData}
                            learnMore={() => console.log(`Learn More about ${project.title}`)}
                            value={project.value}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                        />
                    ))}
                </ul>
            </div>
            <div className={'RightZone'}></div>
        </div>
    );
}

export default ProjectCarousele;

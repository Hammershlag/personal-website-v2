import '../../App.css';

import styles from './Body.module.css';

import TechnologyCard from "../technologyCard/TechnologyCard";

import springLogo from '../../static/logos/spring-logo.png';
import javaLogo from '../../static/logos/java-logo.png';
import reactLogo from '../../static/logos/react-logo.png';
import dockerLogo from '../../static/logos/docker-logo.png';
import gitLogo from '../../static/logos/git-logo.png';
import htmlLogo from '../../static/logos/html-logo.png';
import cssLogo from '../../static/logos/css-logo.png';
import javascriptLogo from '../../static/logos/javascript-logo.png';
import ProjectCarousele from "../projectCarousele/ProjectCarousele";
import {useEffect} from "react";
import ContactButton from "../contactButton/ContactButton";

import linkedInLogo from '../../static/logos/contact/linkedin.png';
import emailLogo from '../../static/logos/contact/email.png';
import facebookLogo from '../../static/logos/contact/facebook.png';
import githubLogo from '../../static/logos/contact/github.png';
import instagramLogo from '../../static/logos/contact/instagram.png';


function Body(props) {

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'about', element: document.getElementById('about') },
                { id: 'skills', element: document.getElementById('skills') },
                { id: 'portfolio', element: document.getElementById('portfolio') },
                { id: 'contact', element: document.getElementById('contact') }
            ];

            let closestSection = null;
            let minDistance = Infinity;

            sections.forEach(section => {
                const topPosition = section.element.getBoundingClientRect().top;
                if (topPosition >= 80 && topPosition < minDistance) {
                    closestSection = section.id;
                    minDistance = topPosition;
                }
            });

            if (closestSection) {
                props.setLastVisible(closestSection);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <div className={styles.Body}>
                <div className={styles.AboutMe}>
                    <h2 className='Grayable' id="about">About Me</h2>
                    <span className='Grayable'>📖 <span className='Hoverable'>21 years</span> old <span className='Hoverable'>Computer Science</span> student on my <span className='Hoverable'>3rd</span> year </span>
                    <span className='Grayable'>🧠 Currently studying at <span className='Hoverable'>Warsaw University of Technology</span> </span>
                    <span className='Grayable'>🌍 I speak <span className='Hoverable'>Polish</span> natively, <span className='Hoverable'>English</span> at C1 level, <span className='Hoverable'>German</span> at B2 level </span>
                    <span className='Grayable'>🥋 Recreationally, I train <span className='Hoverable'>Martial Arts</span>, and I'm a certified <span className='Hoverable'>Scuba Diver</span> </span>
                </div>
                <div className={styles.TechnologyStack}>
                    <h2 className='Grayable' id="skills">Technology Stack</h2>
                    <div className={styles.TechnologyCardContainer}>
                        <TechnologyCard
                            title='Spring'
                            description='Java framework for enterprise applications'
                            logo={springLogo}
                            scale={4}
                        />
                        <TechnologyCard
                            title='Java'
                            description='Java programming language'
                            logo={javaLogo}
                            scale={4.5}
                        />
                        <TechnologyCard
                            title='React'
                            description='JavaScript library for building user interfaces'
                            logo={reactLogo}
                            scale={3.5}
                        />
                        <TechnologyCard
                            title='Docker'
                            description='Containerization platform'
                            logo={dockerLogo}
                            scale={4}
                        />
                        <TechnologyCard
                            title='Git'
                            description='Version control system'
                            logo={gitLogo}
                            scale={4.5}
                        />
                        <TechnologyCard
                            title='HTML'
                            description='Hypertext Markup Language'
                            logo={htmlLogo}
                            scale={4}
                        />
                        <TechnologyCard
                            title='CSS'
                            description='Cascading Style Sheets'
                            logo={cssLogo}
                            scale={4}
                        />
                        <TechnologyCard
                            title='JavaScript'
                            description='Programming language'
                            logo={javascriptLogo}
                            scale={4}
                        />
                    </div>
                    <a href={'#'} className='Grayable'>See more...</a>
                </div>
                <div className={styles.Portfolio}>
                    <h2 className='Grayable' id="portfolio">Portfolio</h2>
                    <ProjectCarousele/>
                </div>
                <div className={styles.Contact}>
                    <h2 className='Grayable' id="contact">Contact</h2>
                    <span className='Grayable'>
                        <span className={'Hoverable'}>Thank you</span> for visiting my portfolio!
                        If you have any questions, project ideas, or just want to connect,
                        feel free to reach out. I’m available via
                        <span className={'Hoverable'}> email</span> or on
                        <span className={'Hoverable'}> social media</span>,
                        and I’m always open to new opportunities.
                        Although you may view this website in various languages,
                        I prefer communicating in English for the best clarity and collaboration
                    </span>
                    <div className={styles.ContactContainer}>
                        <ContactButton title={'Send me an email'} link={'mailto:tomekzbroszczyk@gmail.com'} image={emailLogo}/>
                        <ContactButton title={'Visit my LinkedIn'} link={'https://www.linkedin.com/in/tomasz-zbroszczyk-61b316278/'} image={linkedInLogo}/>
                        <ContactButton title={'See my work on Github'} link={'https://github.com/Hammershlag'} image={githubLogo}/>
                        <ContactButton title={'Visit my Facebook'} link={'https://www.facebook.com/tomasz.zbroszczyk.7/'} image={facebookLogo}/>
                        <ContactButton title={'Follow me on Instagram'} link={'https://www.instagram.com/tzbroszczyk/'} image={instagramLogo  }/>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Body;
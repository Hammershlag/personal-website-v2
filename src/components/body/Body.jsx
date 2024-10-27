import '../../App.css';

import styles from './Body.module.css';

import TechnologyCard from "../technologyCard/TechnologyCard";

import springLogo from '../../static/spring-logo.png';
import javaLogo from '../../static/java-logo.png';
import reactLogo from '../../static/react-logo.png';
import dockerLogo from '../../static/docker-logo.png';
import gitLogo from '../../static/git-logo.png';
import htmlLogo from '../../static/html-logo.png';
import cssLogo from '../../static/css-logo.png';
import javascriptLogo from '../../static/javascript-logo.png';
import ProjectCard from "../projectCard/ProjectCard";
import ProjectCarousele from "../projectCarousele/ProjectCarousele";


function Body() {
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
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>
                <p className='Grayable'>This is some <span className='Hoverable'>random</span> paragraph</p>

            </div>
        </>
    );
}

export default Body;
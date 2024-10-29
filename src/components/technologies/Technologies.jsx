import styles from './Technologies.module.css';
import TechnologyCard from "../technologyCard/TechnologyCard";
import technologiesData from '../../data/technologiesData';
import { useState } from "react";

function Technologies() {
    const [seeAll, setSeeAll] = useState(false);

    const handleToggle = () => {
        setSeeAll(!seeAll);
    };

    return (
        <>
            <div className={styles.Technologies}>
                <div className={styles.TechnologyCardContainer}>
                    {seeAll ?
                        technologiesData
                            .sort((a, b) => b.scale - a.scale)
                            .map((tech, index) => (
                            <TechnologyCard
                                key={index}
                                title={tech.title}
                                description={tech.description}
                                logo={tech.logo}
                                scale={tech.scale}
                            />
                        )) :
                        technologiesData
                            .filter(tech => tech.top)
                            .sort((a, b) => b.scale - a.scale)
                            .map((tech, index) => (
                                <TechnologyCard
                                    key={index}
                                    title={tech.title}
                                    description={tech.description}
                                    logo={tech.logo}
                                    scale={tech.scale}
                                />
                            ))
                    }
                </div>
                <a href={'#'} className='Grayable' onClick={handleToggle}>
                    {seeAll ? 'See less...' : 'See more...'}
                </a>
            </div>
        </>
    );
}

export default Technologies;
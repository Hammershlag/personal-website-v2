import styles from './Technologies.module.css';
import TechnologyCard from "../technologyCard/TechnologyCard";
import TechnologiesList from '../../data/TechnologiesList';
import { useState } from "react";

function Technologies() {
    const [seeAll, setSeeAll] = useState(false);

    const handleToggle = () => {
        setSeeAll(!seeAll);
    };

    const filteredTechnologies = seeAll
        ? TechnologiesList()
        : TechnologiesList().filter(tech => tech.top);

    return (
        <div className={styles.Technologies}>
            <div className={styles.TechnologyCardContainer}>
                {filteredTechnologies
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
    );
}

export default Technologies;
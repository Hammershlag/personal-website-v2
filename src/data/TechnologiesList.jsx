import technologiesData from '../data/technologiesData.json';

const technologiesList = [];

function TechnologiesList() {
    if (technologiesList.length === 0) {
        technologiesData.forEach(tech => {
            try {
                tech.logo = require(`../static/technologies/${tech.logo_title}`);
            } catch (error) {
                console.error(`Logo for ${tech.title} not found`);
            }
            technologiesList.push(tech);
        });
    }
    return technologiesList;
}

export default TechnologiesList;
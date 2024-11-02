import technologiesData from '../data/technologiesData.json';

const technologiesList = [];

function TechnologiesList() {
    if (technologiesList.length === 0) {
        technologiesData.forEach(tech => {
            console.log(tech.logo_title);
            try {
                tech.logo = require(`../static/technologies/${tech.logo_title}`);
                console.log(tech.logo);
            } catch (error) {
                console.error(`Logo for ${tech.title} not found`);
            }
            technologiesList.push(tech);
        });
    }
    return technologiesList;
}

export default TechnologiesList;
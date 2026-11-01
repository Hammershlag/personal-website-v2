import PageHeader from '../../components/pageHeader/PageHeader';
import ExperienceEntry from '../../components/experienceEntry/ExperienceEntry';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { experience } from '../../content/experience';

function Experience() {
    useDocumentTitle('Experience');

    return (
        <>
            <PageHeader index="02" title="Experience" />
            {experience.map((entry) => (
                <ExperienceEntry key={entry.company} entry={entry} />
            ))}
        </>
    );
}

export default Experience;

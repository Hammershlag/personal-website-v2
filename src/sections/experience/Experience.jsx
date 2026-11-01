import PageSection from '../../components/pageSection/PageSection';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import Timeline from '../../components/timeline/Timeline';
import { experience } from '../../content/experience';

function Experience() {
    return (
        <PageSection id="experience">
            <SectionHeader index="02" title="Experience" />
            <Timeline entries={experience} />
        </PageSection>
    );
}

export default Experience;

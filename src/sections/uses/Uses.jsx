import PageSection from '../../components/pageSection/PageSection';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import Subsection from '../../components/subsection/Subsection';
import DetailList from '../../components/detailList/DetailList';
import { uses } from '../../content/uses';

function Uses() {
    return (
        <PageSection id="uses">
            <SectionHeader index="04" title="Infrastructure & /uses" />
            {uses.map((group) => (
                <Subsection key={group.heading} id={group.id} heading={group.heading}>
                    <DetailList items={group.items} />
                </Subsection>
            ))}
        </PageSection>
    );
}

export default Uses;

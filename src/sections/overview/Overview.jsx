import styles from './Overview.module.css';
import PageSection from '../../components/pageSection/PageSection';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import DetailList from '../../components/detailList/DetailList';
import Subsection from '../../components/subsection/Subsection';
import SkillMatrix from '../../components/skillMatrix/SkillMatrix';
import Portrait from '../../components/portrait/Portrait';
import { overview } from '../../content/profile';

function Overview() {
    return (
        <PageSection id="home">
            <SectionHeader index="01" title="Overview">
                <Portrait />
            </SectionHeader>
            <DetailList items={overview} />

            <div className={styles.Skills}>
                <Subsection id="skills" heading="Skills">
                    <SkillMatrix />
                </Subsection>
            </div>
        </PageSection>
    );
}

export default Overview;

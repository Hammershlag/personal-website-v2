import PageSection from '../../components/pageSection/PageSection';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import ProjectEntry from '../../components/projectEntry/ProjectEntry';
import { projects } from '../../content/projects';

function Projects() {
    return (
        <PageSection id="projects">
            <SectionHeader index="03" title="Projects & Research" />
            {projects.map((project, i) => (
                <ProjectEntry key={project.id} project={project} position={i + 1} />
            ))}
        </PageSection>
    );
}

export default Projects;

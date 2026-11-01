import PageHeader from '../../components/pageHeader/PageHeader';
import ProjectEntry from '../../components/projectEntry/ProjectEntry';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { projects } from '../../content/projects';

function Projects() {
    useDocumentTitle('Projects & Research');

    return (
        <>
            <PageHeader index="03" title="Projects & Research" />
            {projects.map((project, i) => (
                <ProjectEntry key={project.id} project={project} position={i + 1} />
            ))}
        </>
    );
}

export default Projects;

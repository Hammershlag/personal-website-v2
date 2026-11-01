import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './ProjectPage.module.css';
import PageSection from '../../components/pageSection/PageSection';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import DetailList from '../../components/detailList/DetailList';
import Prose from '../../components/prose/Prose';
import VideoSlot from '../../components/videoSlot/VideoSlot';
import { projects } from '../../content/projects';
import { profile } from '../../content/profile';
import { snappy } from '../../motion/springs';

function BackLink({ projectId }) {
    return (
        <Link to="/projects" state={{ scrollTo: projectId }} className={styles.Back}>
            <motion.span className={styles.Arrow} whileHover={{ x: -3 }} transition={snappy}>
                ←
            </motion.span>
            Projects & Research
        </Link>
    );
}

function NextProject({ project }) {
    return (
        <nav className={styles.Next} aria-label="Next project">
            <span className={styles.NextLabel}>Next project</span>
            <Link to={`/projects/${project.id}`} className={styles.NextLink}>
                <motion.span whileHover={{ x: 3 }} transition={snappy}>
                    {project.name} →
                </motion.span>
            </Link>
        </nav>
    );
}

function ProjectPage() {
    const { projectId } = useParams();
    const index = projects.findIndex((project) => project.id === projectId);
    const project = projects[index];

    useEffect(() => {
        if (!project) {
            return undefined;
        }
        window.scrollTo(0, 0);
        document.title = `${project.name} · ${profile.name}`;
        return () => {
            document.title = profile.name;
        };
    }, [project]);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    const next = projects[(index + 1) % projects.length];

    return (
        <PageSection id={`${project.id}-page`}>
            <BackLink projectId={project.id} />

            <SectionHeader index={`03 / ${String(index + 1).padStart(2, '0')}`} title={project.name} />
            {project.subtitle && (
                project.subtitleIsCode
                    ? <code className={styles.Code}>{project.subtitle}</code>
                    : <p className={styles.Subtitle}>{project.subtitle}</p>
            )}

            <DetailList items={project.details} />
            <Prose paragraphs={project.description} />
            {project.hasVideo && <VideoSlot title={project.name} />}

            <NextProject project={next} />
        </PageSection>
    );
}

export default ProjectPage;

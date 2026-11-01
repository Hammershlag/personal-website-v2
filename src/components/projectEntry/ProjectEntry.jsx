import { motion } from 'framer-motion';

import styles from './ProjectEntry.module.css';
import DetailList from '../detailList/DetailList';
import VideoSlot from '../videoSlot/VideoSlot';
import Prose from '../prose/Prose';
import { snappy } from '../../motion/springs';

const indexVariants = {
    rest: { opacity: 0.55 },
    hover: { opacity: 1 },
};

const titleVariants = {
    rest: { x: 0 },
    hover: { x: 3 },
};

function ProjectEntry({ project, position }) {
    return (
        <motion.article
            id={project.id}
            className={styles.ProjectEntry}
            initial="rest"
            animate="rest"
            whileHover="hover"
        >
            <header className={styles.Header}>
                <motion.span className={styles.Index} variants={indexVariants} transition={snappy}>
                    {String(position).padStart(2, '0')}
                </motion.span>
                <div>
                    <motion.h3 className={styles.Name} variants={titleVariants} transition={snappy}>
                        {project.name}
                    </motion.h3>
                    {project.subtitle && (
                        project.subtitleIsCode
                            ? <code className={styles.Code}>{project.subtitle}</code>
                            : <p className={styles.Subtitle}>{project.subtitle}</p>
                    )}
                </div>
            </header>

            <DetailList items={project.details} />
            <Prose paragraphs={project.description} />
            {project.hasVideo && <VideoSlot title={project.name} />}
        </motion.article>
    );
}

export default ProjectEntry;

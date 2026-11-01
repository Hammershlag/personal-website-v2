import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './ProjectEntry.module.css';
import DetailList from '../detailList/DetailList';
import { snappy } from '../../motion/springs';

const indexVariants = {
    rest: { opacity: 0.55 },
    hover: { opacity: 1 },
};

const titleVariants = {
    rest: { x: 0 },
    hover: { x: 3 },
};

// Summary card in the Projects section; the title opens the project's own page.
function ProjectEntry({ project, position }) {
    const pinned = project.details.filter((item) => item.pinned);

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
                    <h3 className={styles.Name}>
                        <Link to={`/projects/${project.id}`} className={styles.TitleLink}>
                            <motion.span className={styles.NameText} variants={titleVariants} transition={snappy}>
                                {project.name}
                                <span className={styles.Arrow} aria-hidden="true"> →</span>
                            </motion.span>
                        </Link>
                    </h3>
                    {project.subtitle && (
                        project.subtitleIsCode
                            ? <code className={styles.Code}>{project.subtitle}</code>
                            : <p className={styles.Subtitle}>{project.subtitle}</p>
                    )}
                </div>
            </header>

            <DetailList items={pinned} />
        </motion.article>
    );
}

export default ProjectEntry;

import { motion } from 'framer-motion';

import styles from './SkillChip.module.css';
import { hasSkillDetails } from '../../content/skills';
import { snappy } from '../../motion/springs';
import skillPanelId from '../skillDetail/skillPanelId';

function SkillChip({ skill, isOpen, onToggle }) {
    if (!hasSkillDetails(skill)) {
        return <span className={styles.SkillChip}>{skill.name}</span>;
    }

    return (
        <motion.button
            type="button"
            className={`${styles.SkillChip} ${styles.Interactive} ${isOpen ? styles.Open : ''}`}
            aria-expanded={isOpen}
            aria-controls={skillPanelId(skill)}
            onClick={() => onToggle(skill.name)}
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            transition={snappy}
        >
            {skill.name}
            <motion.span
                className={styles.Marker}
                aria-hidden="true"
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={snappy}
            >
                +
            </motion.span>
        </motion.button>
    );
}

export default SkillChip;

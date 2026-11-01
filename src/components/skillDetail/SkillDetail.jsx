import { motion } from 'framer-motion';

import styles from './SkillDetail.module.css';
import Prose from '../prose/Prose';
import skillPanelId from './skillPanelId';
import { resolveReference } from '../../content/references';
import { snappy } from '../../motion/springs';
import scrollToId from '../../utils/scrollToId';

function SkillDetail({ skill }) {
    const references = (skill.usedIn ?? []).map(resolveReference).filter(Boolean);

    return (
        <motion.div
            id={skillPanelId(skill)}
            className={styles.SkillDetail}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={snappy}
        >
            <div className={styles.Inner}>
                <p className={styles.Name}>{skill.name}</p>

                {references.length > 0 && (
                    <>
                        <p className={styles.Label}>Where I used it</p>
                        <ul className={styles.References}>
                            {references.map((reference) => (
                                <li key={reference.id}>
                                    <button
                                        type="button"
                                        className={styles.Reference}
                                        onClick={() => scrollToId(reference.id)}
                                    >
                                        <span>{reference.label}</span>
                                        <span className={styles.Kind}>{reference.kind}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                <Prose paragraphs={skill.notes} />
            </div>
        </motion.div>
    );
}

export default SkillDetail;

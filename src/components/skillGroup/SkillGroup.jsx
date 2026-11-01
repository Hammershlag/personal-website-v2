import { AnimatePresence } from 'framer-motion';

import styles from './SkillGroup.module.css';
import SkillChip from '../skillChip/SkillChip';
import SkillDetail from '../skillDetail/SkillDetail';

function SkillGroup({ skills, openSkill, onToggle }) {
    const openInGroup = skills.find((skill) => skill.name === openSkill);

    return (
        <>
            <ul className={styles.SkillGroup}>
                {skills.map((skill) => (
                    <li key={skill.name}>
                        <SkillChip
                            skill={skill}
                            isOpen={skill.name === openSkill}
                            onToggle={onToggle}
                        />
                    </li>
                ))}
            </ul>
            <AnimatePresence mode="wait" initial={false}>
                {openInGroup && <SkillDetail key={openInGroup.name} skill={openInGroup} />}
            </AnimatePresence>
        </>
    );
}

export default SkillGroup;

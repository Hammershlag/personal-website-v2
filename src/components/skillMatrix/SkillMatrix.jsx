import { useEffect, useState } from 'react';

import DetailList from '../detailList/DetailList';
import SkillGroup from '../skillGroup/SkillGroup';
import { skillCategories } from '../../content/skills';

function SkillMatrix() {
    const [openSkill, setOpenSkill] = useState(null);

    useEffect(() => {
        if (!openSkill) {
            return undefined;
        }
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setOpenSkill(null);
            }
        };
        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [openSkill]);

    const toggle = (name) => setOpenSkill((current) => (current === name ? null : name));

    const items = skillCategories.map((category) => ({
        label: category.label,
        content: <SkillGroup skills={category.skills} openSkill={openSkill} onToggle={toggle} />,
    }));

    return <DetailList items={items} />;
}

export default SkillMatrix;

// Stable DOM id for a skill's detail panel ("C++" -> "skill-cplusplus").
function skillPanelId(skill) {
    const slug = skill.name
        .toLowerCase()
        .replace(/\+/g, 'plus')
        .replace(/#/g, 'sharp')
        .replace(/[^a-z0-9]+/g, '-');
    return `skill-${slug}`;
}

export default skillPanelId;

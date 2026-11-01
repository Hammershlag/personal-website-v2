/*
 * Skills shown in the Overview section, grouped by category.
 *
 * Clicking a skill opens a panel, but only if it has something personal to show:
 * - usedIn: ids of experience entries, projects or /uses groups (see references.js)
 * - notes:  your own paragraphs, e.g. ['What I built with it at Freeport Metrics...']
 * A skill with neither renders as a plain, non-clickable tag.
 */
export const skillCategories = [
    {
        label: 'Languages',
        skills: [
            { name: 'Java', usedIn: ['apreel', 'freeport', 'travelaide'] },
            { name: 'Python', usedIn: ['texas-holdem-rl'] },
            { name: 'JavaScript' },
            { name: 'SQL' },
            { name: 'C' },
            { name: 'C++' },
            { name: 'C#' },
            { name: 'Assembly' },
            { name: 'HTML' },
            { name: 'CSS' },
        ],
    },
    {
        label: 'Frameworks & Libraries',
        skills: [
            { name: 'Spring Boot', usedIn: ['apreel', 'travelaide'] },
            { name: 'Angular', usedIn: ['apreel', 'freeport'] },
            { name: 'React' },
            { name: 'LangChain4j', usedIn: ['travelaide'] },
            { name: 'LangGraph4j', usedIn: ['travelaide'] },
        ],
    },
    {
        label: 'Databases',
        skills: [
            { name: 'Oracle DB', usedIn: ['apreel', 'homelab'] },
            { name: 'PostgreSQL', usedIn: ['homelab'] },
            { name: 'NoSQL' },
        ],
    },
    {
        label: 'Cloud & Infrastructure',
        skills: [
            { name: 'AWS', usedIn: ['freeport'] },
            { name: 'Azure' },
            { name: 'Cloudflare' },
            { name: 'Docker', usedIn: ['homelab'] },
            { name: 'Nginx', usedIn: ['homelab'] },
        ],
    },
    {
        label: 'Tools',
        skills: [
            { name: 'Git' },
            { name: 'Azure DevOps' },
            { name: 'Jira' },
            { name: 'IntelliJ IDEA' },
            { name: 'Linux' },
            { name: 'UNIX' },
            { name: 'MATLAB' },
            { name: 'LaTeX' },
        ],
    },
];

export const hasSkillDetails = (skill) =>
    Boolean(skill.usedIn?.length || skill.notes?.length);

/*
 * Experience timeline, newest first.
 * Optional per entry: description: ['paragraph', ...] for a longer write-up
 * shown under the details.
 */
export const experience = [
    {
        id: 'apreel',
        company: 'Apreel',
        client: 'Warta',
        roles: [
            { title: 'Full-Stack Software Developer', period: 'August 2026 – Present' },
        ],
        details: [
            { label: 'Platform', value: 'eAgent enterprise insurance platform.' },
            { label: 'Tech Stack', tags: ['Java', 'Spring Boot', 'RESTful APIs', 'Oracle', 'Angular'] },
            { label: 'Key Work', value: 'Backend architecture, reactive frontend forms, and logic/validation fixes.' },
        ],
    },
    {
        id: 'freeport',
        company: 'Freeport Metrics / STX Next',
        client: 'Smile Train',
        roles: [
            { title: 'Junior Software Developer', period: 'October 2025 – August 2026' },
            { title: 'Software Developer Intern', period: 'July 2025 – September 2025' },
        ],
        details: [
            { label: 'Tech Stack', tags: ['Java', 'Angular'] },
            { label: 'Key Work', value: 'Full-stack development for web applications.' },
        ],
    },
];

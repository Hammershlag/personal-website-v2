import freediving from '../static/freediving.jpg';

// A group may carry a `photo`, shown in a column beside its rows.
export const uses = [
    {
        id: 'homelab',
        heading: 'Homelab, Cloud & Infrastructure',
        items: [
            { label: 'Infrastructure', value: 'Dockerized PostgreSQL/Oracle databases, Nginx reverse proxies.' },
            { label: 'Cloud & Networking', tags: ['AWS', 'Azure', 'Cloudflare'] },
            { label: 'Tools & CI/CD', tags: ['Azure DevOps (AzDO)', 'Jira'] },
        ],
    },
    {
        heading: 'Dev Environment',
        items: [
            { label: 'IDE', value: 'IntelliJ IDEA.' },
        ],
    },
    {
        heading: 'Off-Screen',
        items: [
            { label: 'Martial Arts', value: 'Karate practitioner since age five, kickboxing training, and former youth martial arts coach.' },
            { label: 'Cooking', value: 'Empirical approach to recipes (scratch-made butter chicken, strawberry ganache macarons).' },
        ],
        photo: {
            src: freediving,
            alt: 'Tomasz freediving head-first into deep blue water beneath sun rays',
            caption: 'Freediving',
        },
    },
];

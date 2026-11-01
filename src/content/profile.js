export const profile = {
    name: 'Tomasz Zbroszczyk',
    title: 'Full-Stack Software Engineer',
    // To show your photo: put it in src/static/ and set e.g.
    // photo: require('../static/portrait.jpg'),
    photo: null,
    contact: [
        { label: 'GitHub', href: 'https://github.com/Hammershlag' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tomasz-zbroszczyk-61b316278/' },
        { label: 'Email', href: 'mailto:tomekzbroszczyk@gmail.com' },
    ],
};

// Each route scrolls to the page section with the matching id.
export const navigation = [
    { to: '/', section: 'home', label: 'Home' },
    { to: '/experience', section: 'experience', label: 'Experience' },
    { to: '/projects', section: 'projects', label: 'Projects & Research' },
    { to: '/uses', section: 'uses', label: '/uses' },
];

export const sectionIds = navigation.map((item) => item.section);

export const overview = [
    {
        label: 'Current Status',
        value: 'Pursuing M.Sc. in Computer Science and Information Systems, specializing in Artificial Intelligence Methods (Metody Sztucznej Inteligencji) at Warsaw University of Technology (MiNI PW).',
    },
    {
        label: 'Previous Degree',
        value: 'B.Sc. in Engineering (Inżynier Informatyki), Warsaw University of Technology (Feb 2026).',
    },
    {
        label: 'Core Stack',
        tags: ['Java', 'Spring Boot', 'Angular', 'React', 'Oracle DB', 'PostgreSQL'],
    },
    {
        label: 'Specializations',
        value: 'Relational database modeling, agentic AI frameworks (LangChain4j/LangGraph4j).',
    },
];

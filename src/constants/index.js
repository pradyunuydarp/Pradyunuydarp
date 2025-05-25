export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '',
    },
    {
        id: 2,
        name: 'About',
        href: 'about',
    },
    {
        id: 3,
        name: 'Work',
        href: 'work',
    },
    {
        id: 4,
        name: 'Contact',
        href: 'contact',
    },
];

// export const clientReviews = [
//     {
//         id: 1,
//         name: 'Emily Johnson',
//         position: 'Marketing Director at GreenLeaf',
//         img: 'assets/review1.png',
//         review:
//             'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
//     {
//         id: 2,
//         name: 'Mark Rogers',
//         position: 'Founder of TechGear Shop',
//         img: 'assets/review2.png',
//         review:
//             'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//     },
//     {
//         id: 3,
//         name: 'John Dohsas',
//         position: 'Project Manager at UrbanTech ',
//         img: 'assets/review3.png',
//         review:
//             'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//     },
//     {
//         id: 4,
//         name: 'Ether Smith',
//         position: 'CEO of BrightStar Enterprises',
//         img: 'assets/review4.png',
//         review:
//             'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//     },
// ];
//
export const myProjects = [
    {
        title: 'LinguaLeap - Interactive Language Learning Platform',
        desc : 'A gamified language learning platform featuring multiple interactive games and real-time multiplayer challenges to help users learn new languages in a fun and engaging way.',
        // subdesc:
        //     'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
        subdesc: 'Tech Stack\n' +
            'Frontend\n' +
            'React 18 with TypeScript\n' +
            'Vite for build tooling\n' +
            'Tailwind CSS for styling\n' +
            'Framer Motion for animations\n' +
            'Zustand for state management\n' +
            'React Router for navigation\n' +
            'Socket.IO Client for real-time features\n' +
            'React Hot Toast for notifications\n' +
            'Backend\n' +
            'Node.js with Express\n' +
            'MongoDB with Mongoose\n' +
            'Socket.IO for real-time communication\n' +
            'JWT for authentication\n' +
            'Redis for caching (with fallback)\n' +
            'Cookie-based sessions\n' +
            'Google\'s Generative AI for content generation',
        href: 'https://praninara.github.io/LinguaLeap/',
        texture: 'textures/project/project-1.mov',
        logo: 'assets/project-1-logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            boxShadow: '0px 0px 60px 0px #0422b7D',
        },
        spotlight: 'assets/spotlight1.png',
        tags: [
            {
              id:1,
              name: "Docker",
              path: "assets/docker.png",
            },
            {
              id: 2,
              name: 'Redis',
              path: 'assets/redis.png',
            },
            {
                id: 3,
                name: 'React.js',
                path: 'assets/react.svg',
            },
            {
                id: 4,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 5,
                name: 'TypeScript',
                path: 'assets/typescript.png',
            },
            {
                id: 6,
                name: 'Nginx',
                path: 'assets/nginx.png',
            },
            {
                id: 7,
                name: 'Vite',
                path: 'assets/vite.png',
            }
        ],
    },
    {
        title: 'Column-Store DBMS - A lightweight Column-Oriented Database Management System',
        desc:'Column-Store DBMS is a custom-built, lightweight database management system developed in C++ that stores data in a column-oriented format for efficient analytical processing. It supports defining database schemas using XML, with data stored as individual binary files for each column. The system allows importing data from CSV files while enforcing relational constraints like primary, unique, and foreign keys, ensuring data integrity during insertion. It includes support for simple SQL-style SELECT queries and provides a basic utility framework for future operations like updates and deletions.',
        subdesc: 'The project emphasizes modular design and low-level data handling, showcasing strong systems programming skills. It includes a basic query engine, a custom data loader, and view support to define reusable virtual tables. Built without relying on existing database libraries, the DBMS demonstrates an understanding of how data is stored, validated, and retrieved at a fundamental level. Planned extensions include support for joins, indexing, and transaction logging to enhance performance and reliability.\n',
        href: 'https://praninara.github.io/LinguaLeap/',
        texture: 'textures/project/project-1.mov',
        logo: 'assets/project-1-logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            boxShadow: '0px 0px 60px 0px #0422b7D',
        },
        spotlight: 'assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'CPP',
                path: 'assets/c++.png',
            },
            {
                id: 2,
                name: 'XML',
                path: 'assets/xml.png',
            },
            // {
            //     id: 3,
            //     name: 'TailwindCSS',
            //     path: 'assets/tailwindcss.png',
            // },
            // {
            //     id: 4,
            //     name: 'TypeScript',
            //     path: 'assets/typescript.png',
            // },
            // {
            //     id: 5,
            //     name: 'Framer Motion',
            //     path: 'assets/framer.png',
            // },
        ],
    }
    ]

export const mypublications = [
    {
        title: 'Parameterized Complexity of Coupon Coloring of Graphs',
        authors: 'Pradeesha Ashok, Pradyun Devarakonda, Shiven Phogat, Swaroop A. Ram Rayala & J. A. Sherin ',
        journal: 'CALDAM 2025',
        year: '2025',
        link: 'https://link.springer.com/chapter/10.1007/978-3-031-83438-7_3',
        texture: 'textures/publication/publication-1.mov',
    }
    // ,
    // {
    //     title: 'Advanced Techniques in Computer Vision',
    //     authors: 'Jane Doe, Pradyun Devarakonda',
    //     journal: 'Journal of Computer Vision',
    //     year: '2023',
    //     link: '#'
    // },
    // {
    //     title: 'Machine Learning for Image Recognition',
    //     authors: 'Alice Johnson, Pradyun Devarakonda',
    //     journal: 'International Journal of AI Research',
    //     year: '2022',
    //     link: '#'
    // }
];
// export const calculateSizes = (isSmall, isMobile, isTablet) => {
//     return {
//         deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
//         deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
//         cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
//         reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
//         ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
//         targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
//     };
// };
//
// export const workExperiences = [
//     {
//         id: 1,
//         name: 'Framer',
//         pos: 'Lead Web Developer',
//         duration: '2022 - Present',
//         title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
//         icon: '/assets/framer.svg',
//         animation: 'victory',
//     },
//     {
//         id: 2,
//         name: 'Figma',
//         pos: 'Web Developer',
//         duration: '2020 - 2022',
//         title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
//         icon: '/assets/figma.svg',
//         animation: 'clapping',
//     },
//     {
//         id: 3,
//         name: 'Notion',
//         pos: 'Junior Web Developer',
//         duration: '2019 - 2020',
//         title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
//         icon: '/assets/notion.svg',
//         animation: 'salute',
//     },
// ];
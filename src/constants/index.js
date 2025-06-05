export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '/',
        section: 'hero',
    },
    {
        id: 2,
        name: 'About',
        href: 'about',
        section: 'about',
    },
    {
        id: 3,
        name: 'Work',
        href: '/',
        section: 'projects',

    },
    {
        id: 4,
        name: 'Contact',
        href: '/',
        section: 'connect',
    },
    {
        id: 5,
        name: 'Resume',
        href: '/resume',
        section: 'resume',
    },
    // {
    //     id: 6,
    //     name: 'Publications',
    //     href: '/publications',
    //     section: 'publications',
    // },
    {
        id: 7,
        name: 'Skills',
        href: '/',
        section: 'skills',
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
        desc: 'LinguaLeap is a gamified language learning platform designed to make acquiring new languages both engaging and effective. It offers a suite of interactive games such as a Memory Match Game, DinoLingo Runner, and Multiplayer Word Battle. With real-time scoring & leaderboards, adaptive difficulty, and a rewarding XP-based leveling system, learners stay motivated while tracking their progress.',
        // desc : 'A gamified language learning platform featuring multiple interactive games and real-time multiplayer challenges to help users learn new languages in a fun and engaging way.',
        // subdesc:
        //     'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
        subdesc: 'Beyond solo learning, LinguaLeap enhances engagement through its Multiplayer Word Battle, which allows users to compete in real-time language challenges via private rooms or auto-matchmaking. Global leaderboards and progress persistence foster a sense of community and achievement. Built using a modern, containerized(Dockerized) microservices architecture, the platform utilizes a robust tech stack including React 18 with TypeScript, Express.js, MongoDB, Redis, and Socket.IO. Advanced integrations like Google’s Generative AI for content creation and Grafana-Prometheus for monitoring ensure LinguaLeap is both scalable and intelligent—delivering a dynamic and future-ready language learning experience.\n' ,
            // 'Vite for build tooling\n' +
            // 'Tailwind CSS for styling\n' +
            // 'Framer Motion for animations\n' +
            // 'Zustand for state management\n' +
            // 'React Router for navigation\n' +
            // 'Socket.IO Client for real-time features\n' +
            // 'React Hot Toast for notifications\n' +
            // 'Backend\n' +
            // 'Node.js with Express\n' +
            // 'MongoDB with Mongoose\n' +
            // 'Socket.IO for real-time communication\n' +
            // 'JWT for authentication\n' +
            // 'Redis for caching (with fallback)\n' +
            // 'Cookie-based sessions\n' +
            // 'Google\'s Generative AI for content generation',
        href: 'https://praninara.github.io/LinguaLeap/',
        texture: 'textures/project/project-1.mov',
        logo: 'assets/project-1-logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            width: '20rem',
            height: '6rem',
            objectFit: 'cover',
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
                name: 'MongoDB',
                path: 'assets/mongodb.png',
            },
            {
                id: 7,
                name: 'Nginx',
                path: 'assets/nginx.png',
            },
            {
                id: 8,
                name: 'Vite',
                path: 'assets/vite.png',
            }
        ],
    },
    {
        title: 'Column-Store DBMS - A lightweight Column-Oriented Database Management System',
        desc:'Column-Store DBMS is a custom-built, lightweight database management system developed in C++ that stores data in a column-oriented format for efficient analytical processing. It supports defining database schemas using XML, with data stored as individual binary files for each column. The system allows importing data from CSV files while enforcing relational constraints like primary, unique, and foreign keys, ensuring data integrity during insertion. It includes support for simple SQL-style SELECT queries and provides a basic utility framework for future operations like updates and deletions.',
        subdesc: 'The project emphasizes modular design and low-level data handling, showcasing strong systems programming skills. It includes a basic query engine, a custom data loader, and view support to define reusable virtual tables. Built without relying on existing database libraries, the DBMS demonstrates an understanding of how data is stored, validated, and retrieved at a fundamental level. Planned extensions include support for joins, indexing, and transaction logging to enhance performance and reliability.\n',
        href: 'https://github.com/pradyunuydarp/Column-Store-DBMS/',
        texture: 'textures/project/col.mov',
        logo: 'assets/ColStore logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            borderRadius: '1rem',
            height: '6.25rem',
            width: '6.25rem',
            radius: '1rem',
            // objectFit: 'cover',
            boxShadow: '0px 0px 60px 0px #0422b7D',
        },
        spotlight: 'assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'CPP',
                path: 'assets/c++.png',
            },
            {
                id: 2,
                name: 'MySQL',
                path: 'assets/mysql.png',
            },
            {
                id: 3,
                name: 'Makefile',
                path: 'assets/makefile.png',
            },
            {
                id: 4,
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
    },
    {
        title:'Mortal-Kombat-X-AirStriker: PPO Reinforcement Learning Agent',
        desc: 'This project centers on training agents to play 2D retro games using reinforcement learning, specifically the Proximal Policy Optimization (PPO) algorithm. PPO was chosen for its stability and efficiency in policy updates, making it suitable for complex environments like classic video games. The agents were trained on games such as AirStriker Genesis and Mortal Kombat II, with each game modeled as a Markov Decision Process (MDP) to formalize the state, action, and reward structure.\n',
        subdesc: 'For implementation, the project utilizes the stable-retro library for creating retro game environments and stable-baselines3 for reinforcement learning algorithms, both of which are actively maintained and compatible with modern Python and RL workflows. Key concepts include frame stacking for temporal context, vectorized environments for parallel training, and custom reward functions tailored to each game\'s mechanics. These frameworks and methods collectively enable robust agent training and evaluation in diverse gaming scenarios.\n',
        href: 'https://github.com/Swaroop3/Mortal-Kombat-X-AirStriker',
        texture: 'textures/project/mortal.mov',
        logo: 'assets/Mortal-Kombat-agent logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            borderRadius: '1rem',
            height: '6.25rem',
            width: '6.25rem',
            radius: '1rem',
            // objectFit: 'cover',
            boxShadow: '0px 0px 60px 0px #0422b7D',
        },
        spotlight: 'assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'assets/python.png',
            },
            {
                id: 2,
                name: 'PyTorch',
                path: 'assets/pytorch.png',
            },
            {
                id: 3,
                name: 'Gym/Gymnasium',
                path: 'assets/gymnasium.svg',
            },
            {
                id: 4,
                name: 'Stable-retro',
                path: 'assets/stable-retro.png',
            },
        ],
    },
    {
        title: 'Twitchalytics++',
        desc: 'Twitchalytics++ is a comprehensive streaming analytics project that analyzes Twitch streamer performance data to provide insights into viewership trends, follower growth, and engagement patterns. The project examines key metrics including watch time, stream time, peak viewers, average viewers, and follower counts to help streamers make data-driven decisions about their content strategy and audience engagement. By analyzing both quantitative performance indicators and qualitative factors like partnership status and content ratings, the platform offers a holistic view of streaming performance across diverse channel types.',
        subdesc: 'The technical implementation uses a Python-based analytics stack with Matplotlib and Seaborn for data visualization, processing comprehensive datasets containing channel information, temporal metrics, and audience engagement data. The project follows standard development practices with Git version control and pip dependency management, featuring modular code organization for collaborative development. Future enhancements include machine learning models for predictive analytics and sentiment analysis integration, developed by the core team of Pradyun, Tahir, and Narayana.',
        href: 'https://github.com/pradyunuydarp/Twitchalytics-plus-plus',
        texture: 'textures/project/project-1.mov',
        logo: 'assets/Twitchalytics-logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            borderRadius: '1rem',
            height: '6.25rem',
            width: '6.25rem',
            radius: '1rem',
            // objectFit: 'cover',
            boxShadow: '0px 0px 60px 0px #0422b7D',
        },
        spotlight: 'assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: 'assets/python.png',
            },
            {
                id: 2,
                name: 'Matplotlib',
                path: 'assets/matplotlib.webp',
            },
            {
                id: 3,
                name: 'Seaborn',
                path: 'assets/seaborn.svg',
            },
            {
                id: 4,
                name: 'Jupyter Notebook',
                path: 'assets/jupyter.png',
            },
            {
                id: 5,
                name: 'Pandas',
                path: 'assets/pandas.svg',
            },
            {
                id: 6,
                name: 'NumPy',
                path: 'assets/numpy.png',
            },
        ],
    }

    ,{
        title: 'Imageffects - Image Effects Application',
        desc: 'Imageffects is a comprehensive image processing software that applies eleven distinct visual effects to JPEG and PNG images, including brightness adjustment, contrast modification, dominant color extraction, image flipping, blur, greyscale conversion, hue saturation manipulation, color inversion, rotation, sepia tone, and sharpening. The software features a dual-service architecture with a Photo Effect Service for image transformations and a Logging Service that tracks all applied effects with timestamp functionality, enabling users to maintain detailed records of their image processing workflows including filtering logs by specific effects and querying within time ranges.',
        subdesc: 'The technical implementation leverages a hybrid architecture combining C++ for core image processing algorithms with Java wrappers using JNI (Java Native Interface) to enable seamless integration between the two languages. Images are represented as vector-based pixel structures within the C++ functions for efficient manipulation. The project follows object-oriented design principles with three abstract effect categories (NoParameterEffects, SingleParameterEffects, and DoubleParameterEffects) and corresponding concrete implementations, along with a robust exception handling system featuring specialized exception classes for different parameter types and illegal parameter validation. ',
        href: 'https://github.com/pradyunuydarp/Imageffects',
        texture: 'textures/project/project-1.mov',
        logo: 'assets/Twitchalytics-logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            borderRadius: '1rem',
            height: '6.25rem',
            width: '6.25rem',
            radius: '1rem',
            // objectFit: 'cover',
            boxShadow: '0px 0px 60px 0px #0422b7D',
        },
        spotlight: 'assets/spotlight1.png',
        tags:[
            {
                id: 1,
                name: 'C++',
                path: 'assets/c++.png',
            },
            {
                id: 2,
                name: 'Java',
                path: 'assets/java.png',
            }
        ],
        // tags: [
        //     {
        //         id: 1,
        //         name: 'Python',
        //         path: 'assets/python.png',
        //     },
        //     {
        //         id: 2,
        //         name: 'Tkinter',
        //         path: 'assets/tkinter.png',
        //     },
        //     {
        //         id: 3,
        //         name: 'Pillow',
        //         path: 'assets/pillow.png',
        //     },
        // ],
    },
    {
        title: 'miniC - Custom Syntax Interpreter',
        desc:'The miniC project is a custom syntax interpreter that implements a simplified C-like programming language with essential programming constructs. The project supports fundamental operations including variable assignment, arithmetic expressions, conditional statements (if/else), and a specialized printing format. Built with a modular architecture, the interpreter consists of separate header and source files for different functionalities: interpreter.h/c for core interpretation logic, arithmetic.h/c for mathematical operations, condition.h/c for conditional processing, print.h/c for output handling, and variable.h/c for variable management. The language supports up to 15 alphabetic characters for variable names and includes nested conditional statements, making it suitable for basic programming tasks and educational purposes.',
        subdesc:'The technical implementation uses C programming language with a straightforward compilation process managed through Makefiles and GCC compiler. The interpreter supports arithmetic operations including addition, subtraction, multiplication, division, modulus, and exponentiation, though it evaluates expressions strictly from left to right without BODMAS precedence rules. The printing system features unique syntax elements such as parentheses for string literals, tilde (~) for newline characters, and exclamation marks (!) for tab characters. The project maintains space-independent syntax similar to standard C and operates without variable scope restrictions, allowing any declared variable to be accessed throughout the program. Users can compile and run the interpreter using standard GCC commands or the provided Makefile, with the main.c file serving as the entry point for writing and testing miniC code.',
        href: 'https://github.com/pradyunuydarp/miniC',
        texture: 'textures/project/project-1.mov',
        logo: 'assets/project-1-logo.png',
        logoStyle: {
            backgroundColor: '#050a23',
            border: '0.8px solid #36201D',
            borderRadius: '1rem',
            height: '6.25rem',
            width: '6.25rem',
            radius: '1rem',
            // objectFit: 'cover',
            boxShadow: '0px 0px 60px 0px #0422b7D',
        },
        spotlight: 'assets/spotlight5.png',
        tags:[
            {
                id: 1,
                name: 'C',
                path: 'assets/c.png',
            },
            {
                id: 2,
                name: 'Makefile',
                path: 'assets/makefile.png',
            }
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
        spotlight: 'assets/spotlight3.png',
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


export const aboutme = {
    title: 'About Me',
    desc: 'I’m Pradyun, a senior at the International Institute of Information Technology, Bangalore (IIITB). I am pursuing an integrated bachelor’s and master’s degree in Computer Science with a GPA of 3.67/4. \n' +
        '\nI am proficient in multiple programming languages (C++/Java/Python/C/JavaScript, SQL, HTML/CSS), CS concepts (Data Structures, Algorithms, Database Systems, Operating Systems, Object Oriented Programming, Software Engineering, Data Modeling), and Machine Learning Concepts (Supervised/Unsupervised, Reinforcement Learning).\n' +
        '\n' +
        'I have engaged in the development of several notable projects, including ‘LinguaLeap’(a gamified language learning platform), ‘Column-Store DBMS’(A lightweight, file-based column-store database management system (DBMS)), ‘Imageffects’ (an image effect applying application), and ‘miniC’ (a software interpreter for custom syntax).\n' +
        '\n' +
        'I have worked as a Summer Research Intern in my institute in Summer, 2024 where I gained exposure in theoretical research in the paradigms of algorithms and graph theory. I worked in a team of four guided by Prof. Pradeesha Ashok. Our results were recently accepted to CALDAM 2025(11th Annual International Conference on Algorithms and Discrete Applied Mathematics) and were published.\n' +
        '\n' +
        'I hold a distinguished academic record. I was listed in the Dean’s Merit List of my institute for the year 2023. I also achieved an exceptional score of 98.8% in my intermediate examination and a perfect 10/10 in my Class X examination. I ranked among the top 1% of scorers among over a million engineering aspirants for the Joint Entrance Examination (JEE).\n' +
        '\n' +
        'Beyond my academic achievements, I am also a music enthusiast, audio editor, and poetry writer.\n',
    pic: 'Pradyun_dp.jpeg',

}

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
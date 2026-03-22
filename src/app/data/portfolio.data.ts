import { PortfolioData } from '../models/portfolio.model';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Dangeti Trinadh Manikanta Gangadhar',
    shortName: 'Trinadh Gangadhar',
    role: 'Software Engineer - 2',
    tagline:
      'Full-stack developer focused on Angular frontend and .NET backend to create seamless, scalable user experiences.',
    location: 'Rajahmundry, Andhra Pradesh, India',
    currentLocation: 'Hyderabad, Telangana, India',
    email: 'd.t.m.gangadhar@gmail.com',
    secondaryEmail: 'yoursdangeti@gmail.com',
    phone: '+91 9492055644',
    summary: [
      'As a full-stack software developer with extensive experience in Angular and .NET, I deliver robust and scalable solutions across diverse products.',
      'My expertise spans frontend and backend development, helping teams ship seamless applications with clean architecture and maintainable code.',
      'I enjoy solving complex business workflows through reusable component design, strong API integration, and performance-focused engineering.'
    ],
    strengths: [
      'Angular architecture and reusable UI systems',
      'Angular CLI and Angular Material workflows',
      '.NET and ASP.NET Web API integrations',
      'SQL and MongoDB data handling',
      'Cross-functional Agile collaboration',
      'Mentorship, code quality, and ownership'
    ],
    social: [
      {
        label: 'LinkedIn @dtmg369',
        url: 'https://www.linkedin.com/in/dtmg369/',
        icon: 'work'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/DTMG-Dev',
        icon: 'code'
      },
      {
        label: 'Email',
        url: 'mailto:d.t.m.gangadhar@gmail.com',
        icon: 'mail'
      }
    ],
    resumePath: '/resume.pdf',
    heroStats: [
      {
        value: '4+ Years',
        label: 'Industry Experience',
        icon: 'bolt'
      },
      {
        value: '16+',
        label: 'Verified Certifications',
        icon: 'verified'
      },
      {
        value: '2 Publications',
        label: 'Academic Research Work',
        icon: 'menu_book'
      }
    ]
  },
  aboutBlurb:
    'I build modern web products that balance clean UX with engineering depth. From Angular component systems to .NET APIs and database design, I focus on making systems reliable, extensible, and easy for teams to evolve.',
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'Angular (8+)', level: 94, icon: 'web' },
        { name: 'Angular CLI', level: 91, icon: 'terminal' },
        { name: 'Angular Material', level: 90, icon: 'widgets' },
        { name: 'RxJS', level: 86, icon: 'sync_alt' },
        { name: 'JavaScript', level: 84, icon: 'javascript' },
        { name: 'React.js', level: 72, icon: 'view_quilt' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: '.NET / ASP.NET Web API', level: 91, icon: 'dns' },
        { name: 'C#', level: 89, icon: 'code_blocks' },
        { name: 'LINQ', level: 87, icon: 'filter_alt' },
        { name: 'Node.js / Express', level: 70, icon: 'lan' },
        { name: 'Python', level: 72, icon: 'data_object' }
      ]
    },
    {
      category: 'Databases & Tools',
      items: [
        { name: 'SQL', level: 88, icon: 'table_view' },
        { name: 'MongoDB', level: 89, icon: 'storage' },
        { name: 'Postman', level: 84, icon: 'send' },
        { name: 'Swagger', level: 81, icon: 'rule' },
        { name: 'IoT / Arduino Basics', level: 74, icon: 'memory' }
      ]
    }
  ],
  projects: [
    {
      title: 'Nxt Trendz (ECommerce Clone)',
      period: 'September 2021',
      description:
        'A complete e-commerce style web app where users can authenticate, browse products, search, apply filters, and sort listings.',
      highlights: [
        'Built route-driven flows for login, products, and product details.',
        'Implemented authentication with JWT persistence and authorized API calls.',
        'Added query-parameter-based filtering and product discovery UX.'
      ],
      stack: [
        'React JS',
        'JavaScript',
        'Bootstrap',
        'REST APIs',
        'Local Storage',
        'JWT'
      ],
      links: [
        {
          label: 'Live Demo',
          url: 'https://trinadhtrendz.ccbp.tech',
          icon: 'open_in_new'
        }
      ]
    },
    {
      title: 'IPL Dashboard',
      period: 'July 2021',
      description:
        'A sports dashboard to list IPL teams, detailed team pages, and match insights fetched asynchronously from APIs.',
      highlights: [
        'Designed route-based dashboards and team pages with React Router.',
        'Fetched team and match data through GET APIs with dynamic path params.',
        'Included robust 404 route handling for invalid paths.'
      ],
      stack: ['React.js', 'Routing', 'REST APIs', 'CSS', 'Bootstrap'],
      links: [
        {
          label: 'Live Demo',
          url: 'https://trinadhipldash.ccbp.tech',
          icon: 'open_in_new'
        }
      ]
    },
    {
      title: 'Portfolio Website',
      period: 'December 2021',
      description:
        'A personal portfolio showcasing profile, projects, media embeds, and contact information with a mobile-first responsive approach.',
      highlights: [
        'Structured content with semantic HTML sections and modern Bootstrap layouts.',
        'Implemented responsive design patterns and interactive components.',
        'Integrated multimedia sections using carousel and embedded video modules.'
      ],
      stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      links: [
        {
          label: 'Live Demo',
          url: 'https://trinadhprofile.ccbp.tech',
          icon: 'open_in_new'
        }
      ]
    }
  ],
  timeline: [
    {
      title: 'Software Engineer - 2',
      organization: 'UWorld',
      location: 'Hyderabad, Telangana, India',
      period: 'January 2025 - Present',
      type: 'experience',
      description: [
        'Leading full-stack feature delivery with Angular and .NET for scalable product workflows.',
        'Driving reusable component architecture and production-grade API integrations.'
      ]
    },
    {
      title: 'Career Progression at UWorld',
      organization: 'UWorld',
      location: 'Hyderabad, Telangana, India',
      period: 'April 2022 - February 2025',
      type: 'experience',
      description: [
        'Software Engineer - 1: April 2023 - February 2025',
        'Associate Software Engineer: October 2022 - March 2023',
        'Trainee Software Engineer: April 2022 - September 2022'
      ]
    },
    {
      title: 'NxtWave (Learner and Consultant Roles)',
      organization: 'NxtWave',
      location: 'Hyderabad, Telangana, India',
      period: 'September 2020 - April 2022',
      type: 'experience',
      description: [
        'Aspiring MERN Stack Developer and CCBP learner track participant.',
        'Worked as DO Consultant while building practical frontend and backend foundations.'
      ]
    },
    {
      title: 'IoT Developer',
      organization: 'EmbIOTe Research and Integration Labs Pvt Ltd',
      location: 'Hyderabad, Telangana, India',
      period: 'July 2020 - August 2020',
      type: 'experience',
      description: ['Contributed to IoT-focused development and implementation activities.']
    },
    {
      title: 'Internshala Student Partner',
      organization: 'Internshala',
      location: 'Mandapeta, Andhra Pradesh, India',
      period: 'May 2020 - August 2020',
      type: 'experience',
      description: [
        'Promoted internship awareness and represented RGUKT Srikakulam campus in outreach activities.'
      ]
    },
    {
      title: 'B.Tech (Electronics and Communication Engineering)',
      organization: 'Rajiv Gandhi University of Knowledge Technologies, Srikakulam',
      location: 'Srikakulam, Andhra Pradesh, India',
      period: 'August 2018 - May 2022',
      type: 'education',
      description: ['Graduated with an academic score of 8.6 / 10.']
    },
    {
      title: 'Fellow, CCBP 4.0 Intensive',
      organization: 'NxtWave CCBP 4.0 Intensive',
      location: 'India',
      period: 'December 2021 - August 2022',
      type: 'education',
      description: [
        'Completed intensive, industry-aligned training in software development foundations and project workflows.'
      ]
    }
  ],
  certifications: [
    {
      title: 'MongoDB C# Developer Path',
      issuer: 'MongoDB University',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://learn.mongodb.com/c/JJULlm1VRzGaOQOgMdoaLA',
      credentialId: 'JJULlm1VRzGaOQOgMdoaLA',
      description: 'Hands-on MongoDB with C# including CRUD, schema design, indexing, and high-performance query practices.',
      skills: ['MongoDB', 'C#', 'LINQ', 'Schema Design', 'Indexing']
    },
    {
      title: 'React JS',
      issuer: 'CCBP 4.0 Intensive',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/intensive/react-js?id=AJYKVSSPVU',
      credentialId: 'AJYKVSSPVU',
      description: 'Built component-based frontend applications with routing, state handling, and reusable UI patterns.',
      skills: ['React.js', 'Component Architecture', 'Routing', 'State Management']
    },
    {
      title: 'Introduction to Databases',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/databases?id=QXBUHO14E5',
      credentialId: 'QXBUHO14E5',
      description: 'Core relational database fundamentals and practical SQL for application development.',
      skills: ['SQL', 'Relational Databases', 'Normalization', 'Query Optimization']
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM / Credly',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://www.credly.com/badges/7a077737-4ae2-4c02-90fc-84114269cbdf/linked_in_profile',
      credentialId: '7a077737-4ae2-4c02-90fc-84114269cbdf',
      description: 'Applied machine learning workflows in Python with practical model development techniques.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Modeling']
    },
    {
      title: 'Machine Learning',
      issuer: 'Coursera',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/NMGVZDEXHUMB',
      credentialId: 'NMGVZDEXHUMB',
      description: 'Foundational machine learning concepts across supervised and unsupervised learning approaches.',
      skills: ['Machine Learning', 'Algorithms', 'Model Evaluation', 'Statistics']
    },
    {
      title: 'An Introduction to Programming the Internet of Things (IOT)',
      issuer: 'Coursera',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/2L5QU6FHY4FF',
      credentialId: '2L5QU6FHY4FF',
      description: 'IoT programming specialization focused on embedded systems and connected device workflows.',
      skills: ['IoT', 'Embedded Programming', 'Arduino', 'Sensor Integration']
    },
    {
      title: 'JavaScript Essentials',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/javascript-essentials?id=UJ637R5RSH',
      credentialId: 'UJ637R5RSH',
      description: 'Strengthened JavaScript fundamentals used for interactive UI and API-powered applications.',
      skills: ['JavaScript', 'DOM', 'ES6+', 'Asynchronous Programming']
    },
    {
      title: 'Responsive Web Design using Flexbox',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/flexbox?id=WSU3LDY72U',
      credentialId: 'WSU3LDY72U',
      description: 'Mobile-first responsive interface design with flexible and adaptive layout systems.',
      skills: ['CSS Flexbox', 'Responsive Design', 'HTML', 'UI Layout']
    },
    {
      title: 'Programming Foundations with Python',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/programming-foundations?id=0CUFYLJBU7',
      credentialId: '0CUFYLJBU7',
      description: 'Programming fundamentals through Python including logic building and problem decomposition.',
      skills: ['Python', 'Programming Logic', 'Data Structures', 'Problem Solving']
    },
    {
      title: 'Build Your Own Dynamic Web Application',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/dynamic-web-application?id=R22X3QCVR7',
      credentialId: 'R22X3QCVR7',
      description: 'Built dynamic web experiences with interactive behavior and data-driven UI rendering.',
      skills: ['JavaScript', 'Dynamic UI', 'API Integration', 'Web Development']
    },
    {
      title: 'Build Your Own Responsive Website',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/responsive-website?id=TCVM6BIMZS',
      credentialId: 'TCVM6BIMZS',
      description: 'Developed fully responsive websites using practical mobile-first implementation strategies.',
      skills: ['Responsive Web Design', 'HTML', 'CSS', 'Cross-Device UI']
    },
    {
      title: 'Build Your Own Static Website',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/static-website?id=5ZNUDDMITL',
      credentialId: '5ZNUDDMITL',
      description: 'Built static, semantic, and accessible websites with clean page structure and styling.',
      skills: ['HTML', 'CSS', 'Semantic Markup', 'Accessibility Basics']
    },
    {
      title: 'Developer Foundations',
      issuer: 'CCBP Professional',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/professional/developer-foundations?id=0XETMLV5M4',
      credentialId: '0XETMLV5M4',
      description: 'Core software engineering foundations for modern development lifecycle practices.',
      skills: ['Software Foundations', 'Git Basics', 'Problem Solving', 'Developer Workflow']
    },
    {
      title: 'CCBP 4.0 Foundations',
      issuer: 'CCBP Foundations',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://certificates.ccbp.in/foundations/ai-ml?id=HSHKY5FA7M',
      credentialId: 'HSHKY5FA7M',
      description: 'Foundational preparation in programming, web technologies, and AI/ML orientation.',
      skills: ['Programming Basics', 'Web Fundamentals', 'AI/ML Foundations', 'Logical Thinking']
    },
    {
      title: 'Developing Industrial Internet of Things',
      issuer: 'Coursera',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/JNWJGCHZTABM',
      credentialId: 'JNWJGCHZTABM',
      description: 'Industrial IoT specialization covering architecture, protocols, and connected system design.',
      skills: ['Industrial IoT', 'Connected Systems', 'IoT Architecture', 'Embedded Applications']
    },
    {
      title: 'Python for Everybody',
      issuer: 'Coursera',
      period: 'Credential Available',
      issuedDate: 'See credential page',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HTYQ3PEHM8QY',
      credentialId: 'HTYQ3PEHM8QY',
      description: 'Comprehensive Python specialization with scripting, data handling, and practical coding exercises.',
      skills: ['Python', 'Data Handling', 'Scripting', 'Programming Fundamentals']
    }
  ],
  publications: [
    {
      title: 'Catch Me If You Can Game as Well as Packaging System Efficient Design Using Arduino UNO',
      context: 'IGI Global',
      period: 'Publication Available',
      abstract:
        'A practical engineering design study combining game interaction concepts with Arduino UNO-based system packaging and implementation.',
      publicationUrl: 'https://www.igi-global.com/chapter/catch-me-if-you-can-game-as-well-as-packaging-system-efficient-design-using-arduino-uno/273831'
    },
    {
      title: 'Design of Automatic 5 x 5 Dispenser with three kinds of payment modes using Verilog HDL',
      context: 'IEEE Xplore',
      period: 'Publication Available',
      abstract:
        'Designed an automatic dispenser architecture with multi-mode payment support and Verilog HDL-based control logic implementation.',
      publicationUrl: 'https://ieeexplore.ieee.org/document/9087041'
    }
  ],
  contactPitch:
    'Open to Software Engineer opportunities and freelance development projects focused on Angular and .NET ecosystems. I would love to discuss how we can build something impactful together.'
};
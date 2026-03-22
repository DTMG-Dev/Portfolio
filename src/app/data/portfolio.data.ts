import { PortfolioData } from '../models/portfolio.model';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Dangeti Trinadh Manikanta Gangadhar',
    shortName: 'Trinadh Gangadhar',
    role: 'Software Engineer II',
    tagline:
      'Building scalable, config-driven web applications with Angular, .NET, and high-performance APIs.',
    location: 'Rajahmundry, Andhra Pradesh, India',
    currentLocation: 'Hyderabad, Telangana, India',
    email: 'd.t.m.gangadhar@gmail.com',
    phone: '+91 9492055644',
    summary: [
      'Experienced Software Engineer II with strong full-stack expertise across Angular (v8+), .NET, ASP.NET Web API, SQL, and MongoDB.',
      'I focus on end-to-end product delivery from technical analysis and architecture to clean implementation, integration, and production-quality optimization.',
      'Known for reusable component design, strong debugging, and cross-functional collaboration with backend, QA, and DevOps teams.'
    ],
    strengths: [
      'Config-driven UI architecture',
      'Reusable Angular component systems',
      'API design and optimization',
      'Peer code reviews and mentorship',
      'Agile collaboration and ownership',
      'Performance-focused development'
    ],
    social: [
      {
        label: 'LinkedIn',
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
        label: 'Professional Experience',
        icon: 'bolt'
      },
      {
        value: '20+',
        label: 'Production Components',
        icon: 'deployed_code'
      },
      {
        value: '8.6 / 10',
        label: 'B.Tech Academic Score',
        icon: 'school'
      }
    ]
  },
  aboutBlurb:
    'I enjoy transforming complex product requirements into smooth, maintainable digital experiences. My core strength is combining Angular craftsmanship with robust .NET backend integrations to deliver features that are scalable, testable, and easy for teams to extend.',
  skills: [
    {
      category: 'Frontend',
      items: [
        { name: 'Angular (8+)', level: 93, icon: 'web' },
        { name: 'Angular Material', level: 90, icon: 'widgets' },
        { name: 'RxJS', level: 86, icon: 'sync_alt' },
        { name: 'JavaScript', level: 82, icon: 'javascript' },
        { name: 'React.js', level: 70, icon: 'view_quilt' },
        { name: 'HTML / CSS / Bootstrap', level: 91, icon: 'brush' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: '.NET / ASP.NET Web API', level: 90, icon: 'dns' },
        { name: 'C#', level: 88, icon: 'terminal' },
        { name: 'LINQ', level: 86, icon: 'filter_alt' },
        { name: 'Node.js / Express', level: 68, icon: 'lan' },
        { name: 'Python', level: 65, icon: 'data_object' }
      ]
    },
    {
      category: 'Databases & Tools',
      items: [
        { name: 'SQL', level: 88, icon: 'table_view' },
        { name: 'MongoDB', level: 89, icon: 'storage' },
        { name: 'Postman', level: 84, icon: 'send' },
        { name: 'Swagger', level: 80, icon: 'rule' },
        { name: 'Agile Collaboration', level: 90, icon: 'groups' }
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
      title: 'Software Engineer II',
      organization: 'UWorld Pvt. Ltd.',
      location: 'Hyderabad, India',
      period: 'March 2022 - Present',
      type: 'experience',
      description: [
        'Developed full-stack applications using Angular, .NET, ASP.NET Web API, SQL, and MongoDB for scalable business workflows.',
        'Built config-driven reusable Angular components with CKEditor 4/5, drag-and-drop, video/HTML rendering, and tree structures using Angular Material.',
        'Optimized backend APIs with LINQ, C# MongoDB Driver, and native SQL readers for high-performance data operations.',
        'Mentored peers through code reviews, collaborated in Agile ceremonies, and improved code quality and modularity.'
      ]
    },
    {
      title: 'B.Tech (Electronics and Communication Engineering)',
      organization: 'Rajiv Gandhi University of Knowledge Technologies',
      location: 'Srikakulam, Andhra Pradesh',
      period: '2018 - 2022',
      type: 'education',
      description: ['Graduated with an academic score of 8.6 / 10.']
    },
    {
      title: 'MongoDB C# Developer Path',
      organization: 'MongoDB Certification Track',
      location: 'Remote',
      period: 'September 2023',
      type: 'certification',
      description: [
        'Completed advanced coursework in CRUD operations, schema design, aggregation, indexing, and performance tuning with MongoDB and C# drivers.'
      ]
    }
  ],
  contactPitch:
    'Open to Software Engineer opportunities and freelance development projects focused on Angular and .NET ecosystems. I would love to discuss how we can build something impactful together.'
};
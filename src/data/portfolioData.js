const base = import.meta.env.BASE_URL;

export const portfolioData = {
  personalInfo: {
    name: "Jishan Singh",
    titles: [
      "Software Development Engineer II",
      "Backend Developer",
      "Full Stack Developer",
    ],
    bio: "I'm a Software Development Engineer with 3+ years of experience building scalable backend systems. Currently at Sixt R&D designing centralized data synchronization services, and previously at SAP Labs where I optimized API performance and redesigned core frameworks. I'm passionate about system design, performance optimization, and building tools that make engineering teams more productive.",
    social: {
      github: "https://github.com/jishansingh",
      linkedin: "https://www.linkedin.com/in/jishan-singh-793979193/",
      email: "singhjishan2@gmail.com",
    },
    contact: {
      email: "singhjishan2@gmail.com",
      phone: "+91 6280 482 061",
    },
    profileImage: `${base}images/profile.jpeg`,
  },

  experience: [
    {
      company: "Sixt R&D",
      location: "Bengaluru, Karnataka",
      title: "Software Development Engineer II",
      period: "September 2025 - Present",
      description: [
        "B2B-Event-Sync: Designed and implemented a centralized data synchronization service between a Java backend and Salesforce.",
      ],
      technologies: ["Java", "Spring Boot", "Salesforce", "Kafka"],
      details: {
        summary:
          "Leading the design and implementation of critical B2B data synchronization infrastructure at Sixt R&D.",
        highlights: [
          {
            title: "B2B-Event-Sync Service",
            points: [
              "Designed and implemented a centralized data synchronization service between a Java backend and Salesforce.",
              "Built-in retry mechanism with configurable backoff strategies for transient failures.",
              "Implemented rescheduling logic to handle Salesforce maintenance windows and downtime gracefully.",
              "Downtime handling ensures no data loss — events are queued and replayed automatically upon recovery.",
              "Eliminated duplicated synchronization logic that was previously scattered across multiple services, reducing maintenance overhead significantly.",
            ],
          },
        ],
        impact:
          "Centralized sync logic reduced code duplication across services and improved reliability of B2B data flow.",
      },
    },
    {
      company: "SAP Labs",
      location: "Bengaluru, Karnataka",
      title: "Software Developer",
      period: "July 2022 - August 2025",
      description: [
        "Efficient Translation: 17% reduction in request time. Optimized API Requests: 12% payload size reduction. Story 2.0: Major framework overhaul.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "SAP HANA",
        "REST API",
        "JUnit",
        "Mockito",
      ],
      details: {
        summary:
          "Worked on SAP Analytics Cloud (SAC) backend, focusing on performance optimization, API efficiency, and framework redesign over 3 years.",
        highlights: [
          {
            title: "Efficient Translation",
            points: [
              "Identified that the existing approach fetched translations on every single API request — a major bottleneck.",
              "Designed and implemented Spring Boot APIs for batch-fetching translations and storing them in the database.",
              "All subsequent data fetch requests now return pre-translated data directly from DB, eliminating repeated translation calls.",
              "Achieved a 17% reduction in request time for data retrieval.",
            ],
          },
          {
            title: "Optimized API Requests",
            points: [
              "Analyzed API payloads and identified seldom-used attributes bloating response sizes.",
              "Refactored user-created stories by removing unnecessary attributes from API responses.",
              "Relocated certain data fields to the database for on-demand retrieval instead of eager loading.",
              "Reduced API payload size by 12%, improving network efficiency and minimizing redundant data transfer.",
            ],
          },
          {
            title: "Story 2.0",
            points: [
              "Contributed to a major overhaul of the story framework — the redesigned version became the new standard.",
              "Identified key performance bottlenecks in the previous approach through profiling and analysis.",
              "Implemented more efficient data handling and processing solutions.",
              "Focused on streamlining the data pipeline and reducing unnecessary computations.",
            ],
          },
        ],
        impact:
          "Combined optimizations resulted in measurably faster APIs (17% request time reduction, 12% payload reduction) and a more maintainable codebase.",
      },
    },
    {
      company: "SAP Labs",
      location: "Bengaluru, Karnataka",
      title: "Software Developer - Intern",
      period: "January 2022 - June 2022",
      description: [
        "Time Period Hierarchy for Drill-Down Analysis: Integrated time period columns into a hierarchical structure for improved data navigation.",
      ],
      technologies: ["Java", "SAP HANA", "JavaScript"],
      details: {
        summary:
          "Internship focused on enhancing the analytics drill-down capabilities of the SAP Analytics Cloud platform.",
        highlights: [
          {
            title: "Time Period Hierarchy for Drill-Down Analysis",
            points: [
              "Integrated existing time period columns (year, quarter, month, week, day) into a unified hierarchical structure.",
              "Enabled drill-down filtering so users can navigate from yearly data down to daily granularity seamlessly.",
              "Improved the data analysis and navigation experience for end users working with time-series data.",
              "Worked across the full stack — backend Java services and frontend JavaScript components.",
            ],
          },
        ],
        impact:
          "Delivered a production-ready hierarchical time drill-down feature used across SAC analytics dashboards.",
      },
    },
  ],

  skills: {
    languages: [
      "Java",
      "Go",
      "Python",
      "JavaScript",
      "C",
      "C++",
      "SQL",
      "CQL",
    ],
    frameworks: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JDBC",
      "Hibernate",
      "Django",
      "React",
    ],
    tools: [
      "AWS",
      "GCP",
      "Docker",
      "RabbitMQ",
      "Apache Kafka",
      "Playwright",
      "Maven",
      "JUnit",
      "Mockito",
      "Lombok",
      "Jasmine",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SAP HANA",
      "Cassandra",
      "ScyllaDB",
      "BigQuery",
      "Redis",
      "Elasticsearch",
      "Caffeine",
    ],
  },

  projects: [
    {
      title: "ScanForge",
      description:
        "A user-centric PDF scanner app that’s free, fully functional, and has no ads or hidden costs.",
      technologies: ["Kotlin", "Jetpack Compose", "Android", "PDF"],
      github: "https://github.com/jishansingh/ScanForge",
      live: null,
      image: null,
      detailDescription:
        "ScanForge is a user-centric PDF scanner built to be truly free: no ads, no paywalls, and no hidden costs. It focuses on a clean scanning experience and producing share-ready PDFs with minimal friction.",
      media: [
        {
          type: "youtube",
          url: "https://www.youtube.com/embed/vGFhq98imUU",
          caption: "ScanForge — Tutorial",
        },
      ],
    },
    {
      title: "Flash Arithmetic",
      description:
        "An Android app for practicing mental arithmetic. Numbers flash on screen one at a time and you compute the running total in your head, then type your answer before time runs out.",
      technologies: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM"],
      github: "https://github.com/jishansingh/FlashArithmetic",
      live: null,
      image: `${base}images/projects/flash-arithmetic-start.jpeg`,
      detailDescription:
        "Built a complete Android app using Kotlin and Jetpack Compose with Material 3 design. Features configurable difficulty settings (digit count, number count, speed, operation type), a state-machine game loop powered by ViewModel + StateFlow, and persistent user preferences via DataStore. Supports addition, subtraction, multiplication, division, and mixed operations.",
      media: [
        {
          type: "image",
          url: `${base}images/projects/flash-arithmetic-start.jpeg`,
          caption: "Start Screen",
        },
        {
          type: "image",
          url: `${base}images/projects/flash-arithmetic-problems.jpeg`,
          caption: "Numbers Flashing",
        },
        {
          type: "image",
          url: `${base}images/projects/flash-arithmetic-correct.jpeg`,
          caption: "Correct Answer",
        },
        {
          type: "image",
          url: `${base}images/projects/flash-arithmetic-wrong.jpeg`,
          caption: "Wrong Answer",
        },
        {
          type: "image",
          url: `${base}images/projects/flash-arithmetic-settings.jpeg`,
          caption: "Settings",
        },
      ],
    },
    {
      title: "Performance Analyzer for Backend Optimization",
      description:
        "A side project to monitor backend system performance by tracking execution times of functions and logging data into a RabbitMQ queue.",
      technologies: ["Java", "Spring Boot", "RabbitMQ"],
      github: null,
      live: null,
      image: null,
      detailDescription:
        "Developed a performance monitoring tool that hooks into backend API execution pipelines, tracking function-level execution times. Performance data is logged asynchronously into a RabbitMQ queue, categorized by request type for downstream analysis. Designed as a pluggable extension of the SAC backend API — can be attached to any Spring Boot service with minimal configuration.",
      media: [],
    },
    {
      title: "3D Game Engine Development",
      description:
        "A game engine capable of loading 3D models with textures and maps, enabling users to create scenes with various lighting effects.",
      technologies: ["C++", "OpenGL", "GLFW", "GLEW"],
      github: "https://github.com/jishansingh/myGameEngine",
      live: null,
      image: `${base}images/projects/game-engine.png`,
      detailDescription:
        "Built a custom 3D game engine from scratch following Cherno's game engine series. The engine can load 3D models with full texture and normal map support, render scenes with multiple lighting effects (directional, point, spot lights), and handle shadow mapping. Worked with C++ DLL files to reduce dependencies and improve modularity. Designed using OOP principles, allowing flexible class extensions for enhanced customization and scalability.",
      media: [
        {
          type: "image",
          url: `${base}images/projects/game-engine.png`,
          caption: "Game Engine — Scene View",
        },
        {
          type: "image",
          url: `${base}images/projects/opengl-asteroid.png`,
          caption: "OpenGL — Asteroid Field Rendering",
        },
        {
          type: "image",
          url: `${base}images/projects/opengl-pbr.png`,
          caption: "PBR Rendering with HDR Lighting",
        },
        {
          type: "image",
          url: `${base}images/projects/2d-game.png`,
          caption: "2D Brick Breaker Game (earlier project)",
        },
      ],
    },
    {
      title: "Gtorrent",
      description:
        "A Django-based platform that enables users to monetize their Google Drive storage by granting access in exchange for coins.",
      technologies: ["Django", "Python", "Google Drive API", "HTML/CSS"],
      github: "https://github.com/jishansingh/HackTrix-Proj",
      live: null,
      image: null,
      detailDescription:
        "Built for HackTrix Hackathon (selected in top 10). Users can give access to their Google Drive and earn coins in exchange. Files uploaded are split into parts and distributed across different drive accounts. A specific software downloads these parts and combines them — reducing bandwidth by sharing parts across accounts instead of re-uploading. Features user authentication, file management, and a coin-based economy system.",
      media: [
        {
          type: "youtube",
          url: "https://www.youtube.com/embed/e7OULhZOIhY",
          caption: "Gtorrent Demo Video",
        },
      ],
    },
    {
      title: "Zomato Clone",
      description:
        "A prototype clone of Zomato implementing a user and valet system with restaurant listings, ordering, and delivery tracking.",
      technologies: ["Django", "Python", "HTML", "CSS"],
      github: "https://github.com/jishansingh/zomato_clone",
      live: null,
      image: null,
      detailDescription:
        "Built a full-stack Zomato clone using Django. The project implements a user system and a valet/delivery system, allowing users to browse restaurants, place orders, and track deliveries. Features include user authentication, restaurant management, and an order workflow with valet assignment.",
      media: [
        {
          type: "video",
          url: "https://raw.githubusercontent.com/jishansingh/zomato_clone/master/zomato.mp4",
          caption: "Zomato Clone Demo",
        },
      ],
    },
  ],

  education: [
    {
      institution: "Indian Institute of Information Technology Allahabad",
      degree: "Bachelor of Technology in Computer Science",
      gpa: "7.60",
      location: "Allahabad, UP, India",
      period: "2018 - 2022",
    },
  ],
};

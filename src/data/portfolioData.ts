export interface Project {
  title: string;
  subtitle: string;
  date: string;
  technologies: string[];
  description: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  architecture?: {
    overview: string;
    modules: {
      name: string;
      details: string[];
    }[];
  };
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  iconType: 'java' | 'ai' | 'code' | 'data';
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon: string }[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    summary: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Amruth M Shetty",
    title: "Computer Science Engineering Student & Full Stack Developer",
    email: "amruthmshetty333@gmail.com",
    phone: "+91 8921966142",
    location: "Mangaluru, Karnataka, India",
    github: "https://github.com/amruth-shetty",
    linkedin: "https://linkedin.com/in/amruth-shetty",
    summary: "A driven Computer Science Engineering student specializing in Data Science, AI, and Machine Learning, with a strong foundation in Full Stack Development, Backend Development, and Frontend Development. Proficient in Python, Django, and Java, with hands-on experience applying Software Engineering methodologies to build secure, scalable web and mobile systems. A proactive problem solving enthusiast dedicated to continuous learning and creating efficient software development solutions."
  },
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", icon: "SiPython" },
        { name: "Java", icon: "FaJava" },
        { name: "C++", icon: "SiCplusplus" },
        { name: "JavaScript (ES6+)", icon: "SiJavascript" },
        { name: "SQL", icon: "SiSqlite" },
        { name: "HTML", icon: "SiHtml5" },
        { name: "CSS", icon: "SiCss3" }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Django", icon: "SiDjango" },
        { name: "Django REST Framework", icon: "SiDjango" },
        { name: "AJAX", icon: "SiJavascript" },
        { name: "REST APIs", icon: "SiPostman" },
        { name: "Bootstrap 5", icon: "SiBootstrap" },
        { name: "Firebase SDK", icon: "SiFirebase" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "SQLite", icon: "SiSqlite" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "Firebase Realtime DB", icon: "SiFirebase" },
        { name: "Database Design", icon: "FaDatabase" }
      ]
    },
    {
      category: "Libraries",
      skills: [
        { name: "NumPy", icon: "SiNumpy" },
        { name: "Pandas", icon: "SiPandas" },
        { name: "Matplotlib", icon: "SiMatplotlib" },
        { name: "Seaborn", icon: "SiPython" },
        { name: "Pillow", icon: "SiPython" },
        { name: "ReportLab", icon: "SiPython" },
        { name: "Machine Learning libraries", icon: "SiScikitlearn" }
      ]
    },
    {
      category: "Tools & Methods",
      skills: [
        { name: "Git", icon: "SiGit" },
        { name: "GitHub", icon: "SiGithub" },
        { name: "VS Code", icon: "SiVisualstudiocode" },
        { name: "Render", icon: "SiRender" },
        { name: "Android Studio", icon: "SiAndroidstudio" },
        { name: "Android Development", icon: "SiAndroid" },
        { name: "Responsive Web Design", icon: "FaLaptopCode" },
        { name: "Jupyter Notebook", icon: "SiJupyter" },
        { name: "Google Colab", icon: "SiGooglecolab" }
      ]
    },
    {
      category: "Core Subjects",
      skills: [
        { name: "Data Structures", icon: "FaCodeBranch" },
        { name: "Algorithms", icon: "FaBrain" },
        { name: "DBMS", icon: "FaDatabase" },
        { name: "Object-Oriented Programming (OOP)", icon: "FaCubes" },
        { name: "Software Engineering", icon: "FaSync" },
        { name: "Operating Systems", icon: "FaCogs" },
        { name: "Computer Networks", icon: "FaNetworkWired" }
      ]
    }
  ],
  projects: [
    {
      title: "BlueCart",
      subtitle: "Full Stack E-Commerce Web Application",
      date: "2026",
      featured: true,
      technologies: ["Django", "SQLite", "Python", "Bootstrap 5", "HTML5", "CSS3", "JavaScript", "ReportLab", "Pillow", "REST APIs", "Render"],
      description: [
        "Engineered a modular, Full Stack architecture using Django and Python, developing a responsive frontend layout utilizing Bootstrap and custom CSS.",
        "Designed a normalized SQLite relational database schema utilizing advanced Database Design principles to enforce integrity constraints (Category, Product, Cart, Wishlist, Order, Review).",
        "Secured user data by implementing custom authentication pipelines, secure password hashing, CSRF token validation, and session-based cart management.",
        "Optimized transactional operations using Django's atomic transactions (transaction.atomic) and row-level locking (select_for_update) to handle concurrent checkouts and eliminate race conditions.",
        "Developed an automated invoice generator using ReportLab to dynamically produce vector-based PDF receipts detailing taxes, shipping, and item details upon checkout.",
        "Created an interactive order tracking engine enabling customers to retrieve real-time fulfillment status via unique order ID and billing email matching."
      ],
      githubUrl: "https://github.com/amruthmshetty333-art/blucart",
      liveUrl: "#",
      architecture: {
        overview: "A monolithic architecture utilizing Django's Model-View-Template (MVT) pattern, with SQLite as the relational storage engine, secured via middleware validation and transactional database-level locking.",
        modules: [
          {
            name: "Shopping Cart & Wishlist",
            details: [
              "Session-based anonymous cart management syncing with user accounts post-login.",
              "Wishlist item toggling and transfer to shopping cart with inventory checks."
            ]
          },
          {
            name: "Authentication & Security",
            details: [
              "Custom user authentication flows using Django PBKDF2 password hashing.",
              "Cross-Site Request Forgery (CSRF) token checks and SQL Injection prevention via Django ORM."
            ]
          },
          {
            name: "Checkout & Order Tracking",
            details: [
              "Atomic checkouts using transaction.atomic and select_for_update to prevent double-purchasing.",
              "Fulfillment tracking with unique tracking code and email query system."
            ]
          },
          {
            name: "PDF Invoice Generation",
            details: [
              "On-the-fly vector-based receipt creation with ReportLab, calculating tax and shipping items dynamically."
            ]
          }
        ]
      }
    },
    {
      title: "Funsta",
      subtitle: "Full Stack Social Media Platform",
      date: "2026",
      featured: true,
      technologies: ["Django", "PostgreSQL", "SQLite", "Python", "Bootstrap 5", "HTML5", "CSS3", "JavaScript", "AJAX", "REST APIs", "Render"],
      description: [
        "Engineered a production-ready social media platform with multi-image carousel posts, custom caption hashtag/mention parsing, and infinite scrolling feeds.",
        "Built asynchronous zero-reload features (like toggles, comment nesting, and live unread notifications) using JavaScript and AJAX Fetch requests.",
        "Designed an ER-mapped relational database schema for complex social interactions including followers/following, post/comment likes, and nested multi-threaded comments.",
        "Configured automated deployment workflows on Render with white-noise static compression and automated migration runs integrated with PostgreSQL."
      ],
      githubUrl: "https://github.com/amruthmshetty333-art/funsta",
      liveUrl: "#",
      architecture: {
        overview: "A clean monolithic Django application built with PostgreSQL/SQLite, featuring zero-page-reload AJAX updates on the frontend, standard session authentication, custom template tags, and Render-optimized deployment configurations.",
        modules: [
          {
            name: "Social Networking Engine",
            details: [
              "Follower-following user relationship structures supporting personalized feeds.",
              "Multi-threaded nested commenting systems and saved posts functionality."
            ]
          },
          {
            name: "Asynchronous Interaction Flow",
            details: [
              "AJAX-driven zero-reload like toggles and comments with immediate UI rendering.",
              "Real-time unread notification triggers for user likes, comments, and follows."
            ]
          },
          {
            name: "Content Feed & Analytics",
            details: [
              "Curated main feed alongside explore grid and trending metrics based on engagement.",
              "Operator analytics dashboard tracking total posts, followers, and interaction metrics."
            ]
          },
          {
            name: "Database & Deployments",
            details: [
              "Fully normalized PostgreSQL/SQLite relational schema mapping database integrity.",
              "Integrated Gunicorn/Whitenoise for compressed assets and automated builds on Render cloud."
            ]
          }
        ]
      }
    },
    {
      title: "Poultry Farm Management System",
      subtitle: "Native Android Operation Tracker",
      date: "2025",
      featured: false,
      technologies: ["Android Studio", "Kotlin", "Firebase Realtime Database", "Android Development", "Android SDK"],
      description: [
        "Developed a native mobile application using Kotlin and Android Studio for Android Development to digitize paper logs for regional poultry operations, reducing administrative overhead by 40%.",
        "Integrated Firebase Realtime Database to achieve instantaneous cloud synchronization of daily feed logs, bird weight charts, and mortality metrics.",
        "Engineered predictive modules within the application to forecast flock weight trends based on historical feed consumption and environment metrics.",
        "Built an analytics dashboard displaying feed-to-weight ratios and set up push notifications to alert operators of critical thresholds and abnormal mortality spikes."
      ],
      githubUrl: "https://github.com/amruth-shetty/poultry-farm",
      liveUrl: "#"
    }
  ],
  education: [
    {
      institution: "Canara Engineering College",
      location: "Mangaluru, Karnataka",
      degree: "Bachelor of Engineering (B.E.) — Computer Science & Engineering (Data Science & AI/ML)",
      period: "2023 — 2027 (Expected)"
    },
    {
      institution: "Canara PU College",
      location: "Mangaluru, Karnataka",
      degree: "Pre-University Course (Computers & Electronics)",
      period: "2021 — 2023"
    }
  ],
  certifications: [
    {
      name: "Java Programming",
      issuer: "Infosys Springboard",
      iconType: "java"
    },
    {
      name: "Prompt Engineering",
      issuer: "Infosys Springboard",
      iconType: "ai"
    },
    {
      name: "C Programming",
      issuer: "Spoken Tutorial, IIT Bombay",
      iconType: "code"
    },
    {
      name: "Introduction to Data Science",
      issuer: "Commonwealth Bank (Forage)",
      iconType: "data"
    }
  ]
};

/**
 * Prasad Thorat - Central Portfolio Data
 * Easily customize personal information, links, projects, and skills here.
 */

export const personalInfo = {
  name: "Prasad Thorat",
  firstName: "Prasad",
  title: "Full Stack Developer & AI/ML Enthusiast",
  tagline: "I build modern full-stack web applications, AI-powered solutions, and intelligent systems that solve real-world problems.",
  heroHeadline: "I BUILD DIGITAL PRODUCTS THAT SOLVE REAL PROBLEMS.",
  heroDescription: "Full-stack developer exploring AI/ML and building useful software through thoughtful engineering.",
  availability: "AVAILABLE FOR OPPORTUNITIES",
  location: "India",
  // Clearly marked placeholders for user to customize
  email: "prasad28.thorat9b@gmail.com", // [PLACEHOLDER_EMAIL] - Replace with your email
  github: "https://github.com/Prasad-132006", // [PLACEHOLDER_GITHUB] - Replace with your GitHub profile
  linkedin: "www.linkedin.com/in/prasad-thorat-a3224635b", // [PLACEHOLDER_LINKEDIN] - Replace with your LinkedIn profile
  leetcode: "https://leetcode.com/u/Prasad_2006/", // [PLACEHOLDER_LEETCODE] - Replace with your LeetCode profile
  resumeUrl: "#", // [PLACEHOLDER_RESUME_URL] - Add link to your resume PDF
};

export const interests = [
  "Full Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Backend Development",
  "Problem Solving",
  "Data Structures & Algorithms"
];

export const stats = [
  {
    value: "Multiple",
    label: "Projects Built",
    description: "Full-stack & AI applications"
  },
  {
    value: "4+",
    label: "Major Projects",
    description: "End-to-end architectures"
  },
  {
    value: "10+",
    label: "Technologies",
    description: "Across stack & AI tools"
  },
  {
    value: "∞",
    label: "Problems to Solve",
    description: "Continuous learning mindset"
  }
];

export const engineeringSnapshot = {
  focus: "Full Stack Development",
  interests: "AI / ML / Backend Systems",
  languages: "C++ / Java / Python / JavaScript",
  currentlyImproving: "DSA / System Design / AI Engineering"
};

export const currently = [
  { label: "Building", value: "Full-stack applications and AI-powered tools" },
  { label: "Learning", value: "AI/ML, system design, and backend architecture" },
  { label: "Practicing", value: "Data structures, algorithms, and problem solving" },
];

export const skillCategories = [
  {
    category: "Languages",
    description: "Core programming and scripting languages",
    skills: [
      { name: "C++", level: "Core", icon: "Code2" },
      { name: "Java", level: "Object Oriented", icon: "Coffee" },
      { name: "Python", level: "AI / ML / Scripting", icon: "Binary" },
      { name: "JavaScript", level: "ES6+ / Web", icon: "FileCode" },
    ]
  },
  {
    category: "Frontend",
    description: "Modern, responsive client-side development",
    skills: [
      { name: "React", level: "Components & Hooks", icon: "Layers" },
      { name: "Next.js", level: "SSR & Full Stack", icon: "Globe" },
      { name: "Tailwind CSS", level: "Modern Styling", icon: "Palette" },
      { name: "HTML5", level: "Semantic Structure", icon: "Layout" },
      { name: "CSS3", level: "Flex/Grid & Animations", icon: "Sparkles" },
    ]
  },
  {
    category: "Backend",
    description: "Scalable APIs and robust server logic",
    skills: [
      { name: "FastAPI", level: "High Performance Python APIs", icon: "Zap" },
      { name: "Spring Boot", level: "Enterprise Java", icon: "ShieldCheck" },
      { name: "Node.js", level: "Runtime Environment", icon: "Server" },
      { name: "Express.js", level: "Web Framework", icon: "Cpu" },
      { name: "REST APIs", level: "API Design & Integration", icon: "Network" },
    ]
  },
  {
    category: "Databases",
    description: "Relational, document, and ORM data modeling",
    skills: [
      { name: "PostgreSQL", level: "Relational Database", icon: "Database" },
      { name: "MongoDB", level: "NoSQL Document Store", icon: "HardDrive" }
    ]
  },
  {
    category: "AI / ML",
    description: "Intelligent systems and generative architectures",
    skills: [
      { name: "Machine Learning", level: "Classification & Regression", icon: "Brain" },
      { name: "RAG", level: "Retrieval-Augmented Gen", icon: "SearchCheck" },
      { name: "LLM Applications", level: "Prompt & Context Engineering", icon: "Sparkles" },
      { name: "AI APIs", level: "OpenAI / Claude / Gemini Integration", icon: "Bot" },
    ]
  },
  {
    category: "Tools",
    description: "Development environment, version control and IDEs",
    skills: [
      { name: "Git", level: "Version Control", icon: "GitBranch" },
      { name: "GitHub", level: "Collaboration & CI/CD", icon: "Github" },
      { name: "VS Code", level: "Primary Code Editor", icon: "Terminal" },
      { name: "IntelliJ IDEA", level: "Java Development", icon: "FolderCode" },
    ]
  }
];

export const projects = [
  {
    id: "trailai",
    number: "01",
    name: "TrailAI",
    title: "TrailAI — AI Powered Personalized Trip Planner",
    tagline: "Intelligent multi-day travel itineraries customized to user budget, style, and real-time preferences.",
    description: "An AI-powered personalized travel planning platform that generates multi-day itineraries based on user preferences, budget, interests, and travel style.",
    technologies: ["Next.js", "React", "PostgreSQL", "Prisma", "AI/LLM", "RAG", "REST APIs"],
    category: "Full Stack & AI",
    badge: "Featured AI Project",
    color: "from-purple-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#7C3AED",
    features: [
      "Personalized itinerary generation based on interests and pacing",
      "User authentication and encrypted profile storage",
      "Dynamic travel preference customization (budget, dietary, pace)",
      "Trip management with day-by-day interactive scheduling",
      "AI-powered trip planning engine using RAG architecture",
      "Trip-specific conversational AI assistant for local tips",
      "Calendar integration for schedule exports"
    ],
    github: "",
    liveDemo: "",
    modalDetails: {
      problem: "Travel planning is often fragmented across multiple websites, guidebooks, and spreadsheets, resulting in hours of research and static itineraries that fail to adapt to personal preferences or budget constraints.",
      solution: "TrailAI consolidates travel discovery, booking logic, and scheduling into a unified AI engine. Using Retrieval-Augmented Generation (RAG), it delivers accurate, context-aware suggestions tailored to individual travel personas.",
      architecture: "Built with Next.js and React on the frontend, supported by a RESTful backend connected to PostgreSQL via Prisma ORM. Utilizes vector embeddings and LLM pipelines to ground itinerary generation in reliable location datasets.",
      challenges: [
        "Structuring unpredictable LLM outputs into strictly validated JSON itinerary schemas",
        "Balancing day-to-day transit time and realistic activity duration in itinerary models",
        "Ensuring low-latency streaming responses during multi-day trip generation"
      ]
    }
  },
  {
    id: "agroai",
    number: "02",
    name: "AgroAI",
    title: "AgroAI — Smart Irrigation Advisory Platform",
    tagline: "Data-driven irrigation recommendations leveraging live weather and soil moisture analytics.",
    description: "An AI-powered agriculture platform that helps farmers make better irrigation decisions using weather conditions, soil moisture, and intelligent recommendations.",
    technologies: ["React", "Tailwind CSS", "AI/ML", "REST APIs", "Node.js"],
    category: "AI & Agriculture",
    badge: "Smart Advisory",
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10B981",
    features: [
      "Smart irrigation recommendations calibrated for crop type and growth stage",
      "Live weather monitoring and precipitation forecasts",
      "Soil moisture level tracking with actionable threshold alerts",
      "Automated and manual irrigation scheduling calendar",
      "Farmer dashboard with simple, high-contrast visual metrics",
      "Editable recommendations allowing farmers to adjust target water quantities"
    ],
    github: "",
    liveDemo: "",
    modalDetails: {
      problem: "Unoptimized irrigation practices lead to significant water wastage, higher energy costs, and reduced crop yields due to either overwatering or drought stress.",
      solution: "AgroAI provides an accessible, mobile-first dashboard that analyzes environmental parameters and suggests exact irrigation schedules, reducing water consumption while protecting crop health.",
      architecture: "Interactive React single-page application styled with Tailwind CSS, consuming weather and sensor telemetry through REST APIs, paired with lightweight predictive models for moisture depletion.",
      challenges: [
        "Designing an intuitive interface suitable for diverse farmer accessibility needs",
        "Integrating disparate meteorological data feeds and handling intermittent connectivity",
        "Normalizing soil moisture values across variable soil texture types"
      ]
    }
  },
  {
    id: "heatwave-prediction",
    number: "03",
    name: "Heatwave Prediction",
    title: "Heatwave Prediction System",
    tagline: "Machine learning classifier analyzing historical climatological datasets to forecast extreme heat events.",
    description: "A machine learning project that analyzes historical weather data to identify and predict heatwave conditions with high precision.",
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn", "Data Analysis"],
    category: "Machine Learning",
    badge: "Climatic ML Model",
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#F59E0B",
    features: [
      "Historical weather data ingestion and anomaly cleaning",
      "Multi-variable feature engineering (humidity, solar radiation, pressure trends)",
      "Supervised ML classification for heatwave warning categorization",
      "Cross-validated predictive scoring and threshold sensitivity tuning",
      "Data-driven exploratory visual insights and feature importance charts"
    ],
    github: "",
    liveDemo: "",
    modalDetails: {
      problem: "Extreme heat events cause severe public health hazards and strain municipal power grids. Early warning systems require reliable identification of multi-day thermal anomalies beyond simple single-day temperature peaks.",
      solution: "Developed an end-to-end ML pipeline in Python using Scikit-learn, Pandas, and NumPy to model consecutive high-temperature anomalies and accurately predict onset periods.",
      architecture: "Data preprocessing, rolling-window feature extraction, train/test splitting, ensemble classification modeling, and performance evaluation metrics including ROC-AUC, Precision, and Recall.",
      challenges: [
        "Handling class imbalance where extreme heatwave events represent rare occurrences in annual climate records",
        "Creating rolling statistical features (moving average, variance) that capture cumulative heat accumulation",
        "Minimizing false positives to preserve trust in early alert signals"
      ]
    }
  },
  {
    id: "scam-detector",
    number: "04",
    name: "Scam Message & Link Detector",
    title: "AI Scam Message & Link Detector",
    tagline: "Security-focused intelligent inspection tool identifying phishing communications and malicious URLs.",
    description: "A security-focused application designed to analyze suspicious messages, emails, and links and identify potential scam or phishing content.",
    technologies: ["React", "Python", "FastAPI", "Machine Learning", "REST API", "Tailwind CSS"],
    category: "Cybersecurity & AI",
    badge: "Security AI Tool",
    color: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06B6D4",
    features: [
      "Real-time scam message and SMS text parsing",
      "Suspicious link and phishing URL heuristic analysis",
      "Multi-factor risk classification (Safe, Suspicious, High Risk)",
      "Explanatory threat indicators highlighting red flags for users",
      "Responsive, clean security interface without overwhelming jargon"
    ],
    github: "",
    liveDemo: "",
    modalDetails: {
      problem: "Sophisticated social engineering, fake financial alerts, and deceptive links continually victimize internet users who lack technical tools to verify message legitimacy.",
      solution: "Created an AI-assisted detection dashboard that combines natural language urgency indicators with domain structure analysis to produce an actionable risk report in seconds.",
      architecture: "A React web client interfacing with a Python/FastAPI service executing NLP classification heuristics and URL pattern verification.",
      challenges: [
        "Differentiating legitimate urgent notifications (e.g., actual bank OTPs) from phishing attempts",
        "Extracting and normalizing obfuscated or shortener URLs for deep link validation",
        "Delivering explanations in clear, non-intimidating language for everyday users"
      ]
    }
  }
];

export const experience = [
  {
    role: "Software Development Internship",
    company: "[Company / Organization Name - Editable]",
    period: "[Internship Duration - Editable]",
    location: "[Location / Remote - Editable]",
    type: "Internship",
    description: "Worked on full-stack and AI-powered application development, contributing to authentication, user management, frontend development, APIs, and AI-based features.",
    contributions: [
      "Engineered responsive user interface components adhering to clean design principles",
      "Implemented secure authentication flows and robust user role management",
      "Developed and integrated RESTful backend APIs for data handling and third-party services",
      "Assisted in deploying and integrating AI-driven features into customer-facing applications"
    ],
    technologies: ["React", "Node.js", "Python", "REST APIs", "Git", "SQL"]
  }
];

export const problemSolving = {
  heading: "Problem Solving",
  description: "I regularly practice Data Structures & Algorithms to strengthen problem-solving and algorithmic thinking.",
  leetcodeUrl: personalInfo.leetcode,
  cards: [
    {
      title: "LeetCode Practice",
      icon: "Code2",
      description: "Consistent problem solving focusing on clean code, optimal time/space complexity, and edge case handling.",
      badges: ["Patterns", "Complexity Analysis", "Optimal Solutions"]
    },
    {
      title: "Data Structures & Algorithms",
      icon: "Cpu",
      description: "Deep foundation across key paradigms: Arrays, Hash Maps, Linked Lists, Trees, Graphs, Two Pointers, and Dynamic Programming.",
      badges: ["Trees & Graphs", "Dynamic Programming", "Recursion"]
    },
    {
      title: "Algorithmic Thinking",
      icon: "Lightbulb",
      description: "Breaking complex, ambiguous system problems down into tractable, modular components with measurable constraints.",
      badges: ["System Constraints", "Edge Cases", "Scalability"]
    }
  ]
};

export const developmentPhilosophy = [
  {
    step: "01",
    title: "Understand",
    description: "Understand the problem, system constraints, user objectives, and underlying requirements before writing code.",
    icon: "Compass"
  },
  {
    step: "02",
    title: "Design",
    description: "Design a clean, modular, and scalable solution encompassing database models, API contracts, and user flows.",
    icon: "Layout"
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the frontend, backend, APIs, and AI features using maintainable patterns and type-safe architecture.",
    icon: "Code"
  },
  {
    step: "04",
    title: "Improve",
    description: "Test, benchmark, profile performance, gather feedback, and continuously refine user experience.",
    icon: "CheckCircle2"
  }
];

export const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "DSA", href: "#problem-solving" },
  { name: "Contact", href: "#contact" },
];

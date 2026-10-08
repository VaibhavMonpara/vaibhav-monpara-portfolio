// Single source of truth for the portfolio's content.
// To add a role, project or skill, edit this file only — the page renders from it.

export const profile = {
  name: "Vaibhav Monpara",
  title: "Full Stack Engineer",
  location: "New York, NY",
  email: "vaibhav98patel@gmail.com",
  links: {
    github: "https://github.com/VaibhavMonpara",
    linkedin: "https://linkedin.com/in/vaibhav-monpara",
  },
  intro:
    "I build backend services and the pipelines that take them to production. Currently at EXL, owning CI/CD and GitOps releases for Next.js, Flask and Celery services running on GKE.",
  about: [
    "I'm a full stack engineer with six years of industry experience across product startups, Intuit and EXL. I like owning a system end to end: the API, the data model, the pipeline that ships it, and the checks that stop a bad build before it reaches users.",
    "Most of my recent work sits where backend engineering meets delivery and applied AI — release automation on Kubernetes, high-volume document pipelines, and LLM features that have to behave in production, not just in a demo.",
  ],
  focus: [
    {
      title: "Delivery and platform",
      body: "CI/CD for multi-service applications, GitOps releases with ArgoCD, container builds, artifact validation and Kubernetes (GKE) environments.",
    },
    {
      title: "Backend services",
      body: "Python and Node.js APIs, async workers, and data models in PostgreSQL and DynamoDB, built to stay fast under seasonal and peak load.",
    },
    {
      title: "Applied AI",
      body: "LLM classification and extraction pipelines, retrieval (RAG) services, and the monitoring and fallbacks that keep them trustworthy.",
    },
  ],
};

export type Role = {
  company: string;
  role: string;
  location: string;
  start: string; // "YYYY-MM"
  end: string | null; // null = present
  logo?: string;
  stack: string[];
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "EXL",
    role: "Full Stack Engineer",
    location: "New York, NY (hybrid)",
    start: "2026-04",
    end: null,
    logo: "/logos/companies/exl.png",
    stack: ["Next.js", "Flask", "Celery", "GKE", "ArgoCD", "JFrog", "Docker"],
    highlights: [
      "Own CI/CD pipelines for 3 services (Next.js frontend, Flask backend, Celery task worker) deploying into GKE environments, with automated build quality checks and test suites, shipping 1 release per week",
      "Validate JFrog artifacts and run GitOps deployments through ArgoCD, so only approved, tested builds reach production",
      "Implemented dynamic Docker image tagging based on environment and branch, eliminating manual tagging errors across releases",
      "Load and validate historical data from 3 active source channels into production, verifying completeness and accuracy after injection",
      "Test and validate every release across development and production environments, owning pre-release sign-off; caught and fixed a bad-URL bug before it reached production",
    ],
  },
  {
    company: "AirKitchenz",
    role: "Software Engineer",
    location: "Los Angeles, CA (hybrid)",
    start: "2024-08",
    end: "2026-04",
    logo: "/logos/companies/airkitchenz.png",
    stack: ["React", "Node.js", "Python", "DynamoDB", "AWS", "GitHub Actions", "LLM APIs"],
    highlights: [
      "Built the customer-facing kitchen discovery and booking platform from scratch using React and Material UI with a Node.js (Express) backend, enabling end-to-end flows for live food sellers",
      "Designed and implemented backend APIs using Node.js and Python with DynamoDB to manage kitchen availability, pricing rules, and booking state, keeping core API response times under 300 ms",
      "Set up automated CI/CD pipelines using GitHub Actions and AWS, cutting average deployment time from 30 minutes to under 10 minutes",
      "Implemented an AI-driven kitchen matching workflow using Python and LLM APIs, ranking kitchens by location, availability, and seller requirements, reducing manual shortlisting effort by 40%",
      "Architected an early RAG prototype using Python, embeddings, and vector search to answer seller questions about kitchen rules and onboarding, reducing onboarding support follow-ups by 25%",
    ],
  },
  {
    company: "Intuit",
    role: "AI Backend Engineer",
    location: "Los Angeles, CA",
    start: "2024-01",
    end: "2024-07",
    logo: "/logos/companies/intuit.png",
    stack: ["Python", "AWS Lambda", "SQS", "API Gateway", "ECS", "CloudWatch"],
    highlights: [
      "Designed Python-based backend services to ingest, normalize, and validate large-scale tax and financial documents, processing millions of records per filing season",
      "Implemented LLM-powered classification and data extraction pipelines using Python, AWS Lambda, and SQS, reducing manual review workload for tax operations teams by 32% during peak periods",
      "Built an internal RAG service using Python, embeddings, and vector search on AWS-managed storage, cutting analyst tax policy lookup time from minutes to seconds",
      "Integrated AI services with core Intuit platforms via REST APIs deployed on AWS API Gateway and ECS, enforcing IAM-based access control, audit logging, and stable latency during seasonal traffic spikes",
      "Added production monitoring, confidence checks, and safety fallbacks using CloudWatch and Python-based validation logic, reducing incorrect AI-assisted suggestions by 18%",
    ],
  },
  {
    company: "Midocean Technologies",
    role: "Software Engineer",
    location: "Ahmedabad, India",
    start: "2020-10",
    end: "2022-05",
    logo: "/logos/companies/midocean.png",
    stack: ["Django", "React", "TypeScript", "PostgreSQL", "GraphQL", "Flask", "WebSockets"],
    highlights: [
      "Delivered modular enterprise applications using Python (Django), React with TypeScript, and PostgreSQL, supporting 100K+ monthly transactions with 99.95% uptime",
      "Reworked CI/CD and environment workflows using Git-based pipelines and AWS, reducing average deployment time from 45 minutes to 7 minutes and minimizing rollback incidents",
      "Developed REST and GraphQL APIs using Django REST Framework and Node.js (Express), replacing manual business workflows and saving over 5,000 client labor hours annually",
      "Implemented a real-time logistics and shipment tracking system using Python, Flask, WebSockets, and PostgreSQL, enabling live visibility across 15+ countries and reducing delivery delays by 42%",
      "Built executive reporting dashboards with React and Recharts backed by Django APIs, consolidating fragmented data sources and improving reporting accuracy from 68% to 99.6%",
    ],
  },
  {
    company: "Infinite Infolab",
    role: "Full Stack Developer",
    location: "Ahmedabad, India",
    start: "2018-11",
    end: "2020-09",
    logo: "/logos/companies/infiniteinfolab.png",
    stack: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    highlights: [
      "Developed complex user-facing dashboards using React and JavaScript, implementing multi-step forms, role-based views, and client-side state management that reduced task completion time by 35%",
      "Built backend services using Node.js and Express to handle authentication, authorization, and transactional workflows, supporting 1,000+ concurrent active users without session conflicts",
      "Designed and optimized relational data models in PostgreSQL, improving query performance through indexing and join optimization and reducing slow API responses by 40%",
      "Integrated third-party services including payment gateways, email notifications, and file uploads using Node.js, cutting manual operational effort for internal teams by over 50%",
      "Collaborated closely with product and QA teams to ship weekly releases through Git-based workflows, steadily reducing post-release defects over time",
    ],
  },
];

export type Study = {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  logo?: string;
  coursework: string[];
};

export const education: Study[] = [
  {
    degree: "M.S. Computer Science",
    school: "California State University, Fullerton",
    location: "Fullerton, CA",
    start: "2022-08",
    end: "2024-05",
    logo: "/logos/universities/csuf.png",
    coursework: [
      "Advanced Database Management",
      "Advanced Algorithms",
      "Software Management",
      "System and Software Standards",
      "Computer System Architecture",
      "Mobile Development",
    ],
  },
  {
    degree: "B.E. Computer Engineering",
    school: "Gujarat Technological University",
    location: "Ahmedabad, India",
    start: "2016-08",
    end: "2020-07",
    logo: "/logos/universities/gtu.png",
    coursework: [
      "Data Structures",
      "Database Management Systems",
      "Operating Systems",
      "Object-Oriented Programming",
      "Computer Networks",
      "Data Mining and Business Intelligence",
    ],
  },
];

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI recruiting agent",
    summary:
      "Automates recruiter outreach: Google Gemini matches candidates to roles and handles email communication, with a React interface on a Flask and PostgreSQL backend.",
    stack: ["React", "Flask", "PostgreSQL", "Google Gemini"],
    repo: "https://github.com/VaibhavMonpara/AI-Recruiting-Agent",
    featured: true,
  },
  {
    title: "Ride review sentiment analysis",
    summary:
      "A PySpark pipeline that classifies Uber customer reviews as positive, neutral or negative and surfaces the trends behind them.",
    stack: ["PySpark", "Python", "Pandas", "NumPy", "Matplotlib"],
    repo: "https://github.com/VaibhavMonpara/ADV-DBM-PROJECT",
    featured: true,
  },
  {
    title: "Property management system",
    summary:
      "Property management backend with integrated APIs for real-time data retrieval, improving management efficiency by 40%.",
    stack: ["Python", "PostgreSQL", "JavaScript", "XML"],
    repo: "https://github.com/VaibhavMonpara/pms",
    featured: true,
  },
  {
    title: "Energy consumption analytics",
    summary:
      "Forecasts renewable energy usage with scikit-learn and presents consumption and sustainability trends in an interactive Plotly Dash dashboard.",
    stack: ["Python", "Pandas", "scikit-learn", "Plotly Dash"],
    repo: "https://github.com/VaibhavMonpara/ecsa-project",
  },
  {
    title: "E-commerce store",
    summary:
      "Full-stack shop with cart, secure checkout, live inventory updates and order-status tracking.",
    stack: ["Django", "SQLite", "JavaScript"],
    repo: "https://github.com/VaibhavMonpara/MyAwesomeCart",
  },
  {
    title: "Medikit",
    summary:
      "Co-developed healthcare platform for pathology reports, a medical article library and doctor–patient interaction.",
    stack: ["Django", "PostgreSQL", "Bootstrap"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Django", "Flask", "FastAPI", "Celery", "REST", "GraphQL", "gRPC"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux", "Material UI", "Jest"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "DynamoDB", "MongoDB", "MySQL", "Redis", "PySpark", "Pandas"],
  },
  {
    group: "Cloud and delivery",
    items: [
      "AWS (Lambda, ECS, API Gateway, SQS, IAM, CloudWatch)",
      "GCP (GKE)",
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "JFrog Artifactory",
      "GitHub Actions",
    ],
  },
  {
    group: "AI",
    items: ["LLM APIs", "RAG", "Embeddings and vector search", "PyTorch", "scikit-learn"],
  },
];

import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
    navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
    ],

  hero: {
  subtitle: "Software Developer & Data Analyst",
  firstName: "Preeti",
  lastName: "Vasaikar",
  description:
    "Building full-stack applications, dashboards, and data-driven solutions with React, Python, SQL, cloud tools, and scalable backend systems.",
  primaryButton: {
    text: "View Projects",
    href: "#projects",
  },
  secondaryButton: {
    text: "Get In Touch",
    href: "#contact",
  },
},

  about: {
    sectionTag: "About Me",
    title: "Who I Am",
    paragraphs: [
      "I am a Computer Science graduate student with experience in full-stack development, cloud-based applications, and data-driven reporting. My work combines software engineering with analytical problem-solving.",
      "I enjoy building scalable web applications, improving workflows through automation, and using data to support better decision-making. I am currently seeking entry-level opportunities in software development and data analytics.",
    ],
  },

  skills: [
    {
      title: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "HTML5", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React.js", "Angular.js", "Node.js", "Django", "Flask", "Next.js"],
    },
    {
      title: "Data & Databases",
      items: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "NoSQL", "GraphQL"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS", "GCP", "Docker", "CI/CD", "Git", "Linux", "Jira"],
    },
    {
      title: "Analytics & ML",
      items: ["Scikit-learn", "TensorFlow", "PyTorch", "NLP", "Machine Learning"],
    },
  ],

  experiences: [
    {
      date: "Apr 2025 – Present",
      title: "Student Assistant",
      company: "University of Texas at Dallas · Dallas, TX",
      current: true,
      bullets: [
        "Retrieved and analyzed degree program data across 30+ programs using Python and MySQL, reducing discrepancies by 20%.",
        "Generated structured weekly reports and dashboards using Excel and Google Sheets, maintaining 98% accuracy across 3+ concurrent projects.",
        "Automated survey data entry workflows for 500+ undergraduate students, improving processing efficiency by 30%.",
      ],
    },
    {
      date: "Dec 2023 – May 2024",
      title: "Software Engineer Intern",
      company: "Bharat Petroleum · Mumbai, India",
      current: false,
      bullets: [
        "Built and deployed a scalable full-stack application using Angular.js and Node.js on AWS cloud infrastructure, improving system efficiency by 25%.",
        "Developed interactive dashboards for sales and customer data using MySQL, improving operational visibility by 35%.",
        "Implemented Docker and CI/CD-based deployment workflows and reduced defects by 20% through testing and debugging.",
      ],
    },
    {
      date: "May 2023 – Jul 2023",
      title: "Machine Learning Intern",
      company: "FeyNN Labs · Remote",
      current: false,
      bullets: [
        "Engineered AI-driven features using Python, Scikit-learn, and NLP on 80K+ structured records, improving prediction accuracy by 12%.",
        "Deployed ML-backed services on AWS and integrated inference APIs into backend workflows, accelerating product release by 25%.",
        "Managed version control across 20+ feature branches and contributed to code reviews, improving release stability by 18%.",
      ],
    },
  ],

  projects: [
    {
      date: "December 2025",
      title: "Personalized Health Tracker Web App",
      description:
        "A secure health monitoring platform with real-time medication reminders via GraphQL subscriptions, supporting 200+ users. Optimized PostgreSQL schemas improved backend data retrieval performance by 40%.",
      tech: ["React.js", "Next.js", "GraphQL", "TypeScript", "PostgreSQL", "Git"],
      github: "https://github.com/yourusername/health-tracker",
      live: "https://your-live-demo-link.com",
    },
    {
      date: "May 2024",
      title: "Krishi Madad",
      description:
        "A machine learning platform for farmers featuring yield prediction, disease classification, and recommendation support using Django, TensorFlow, and PyTorch, achieving strong real-world model accuracy.",
      tech: ["Python", "Django", "TensorFlow", "PyTorch", "REST APIs", "GCP"],
      github: "https://github.com/yourusername/krishi-madad",
      live: "https://your-live-demo-link.com",
    },
  ],

  metrics: [
    { value: "30+", label: "Programs Analyzed" },
    { value: "98%", label: "Data Accuracy" },
    { value: "500+", label: "Students Automated" },
    { value: "30%", label: "Efficiency Improvement" },
  ],

  contact: [
    {
      label: "Email",
      value: "preetivasaikar05@gmail.com",
      href: "mailto:preetivasaikar05@gmail.com",
    },
    {
      label: "Location",
      value: "Dallas, TX",
    },
    {
      label: "LinkedIn",
      value: "Add your LinkedIn link",
      href: "https://linkedin.com/in/your-link",
    },
    {
      label: "GitHub",
      value: "Add your GitHub link",
      href: "https://github.com/yourusername",
    },
  ],
};
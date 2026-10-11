/*
  EDIT THIS FILE ONLY.
  All the text, projects, links and skills on your site come from here.
  Save the file and refresh the page to see changes.
*/
const PORTFOLIO = {
  name: "Kishan Kumar Maurya",
  role: "Full-Stack Developer (MERN)",
  tagline:
    "B.Tech CSE student building responsive web apps, RESTful APIs and real-time products with the MERN stack.",
  location: "Chandauli, Uttar Pradesh",
  openToWork: true,

  email: "kishanmaurya232110@gmail.com",
  github: "https://github.com/Kishanmaurya09",
  linkedin: "https://www.linkedin.com/in/kishan-maurya-269531295",

  // Résumé PDF lives in the assets folder.
  resume: "assets/resume.pdf",

  about: [
    "I'm a Computer Science and Engineering student with hands-on experience in full-stack web development using the MERN stack. I enjoy building responsive web applications, designing RESTful APIs, implementing authentication, and adding real-time communication.",
    "I like solving problems and turning them into scalable, user-focused applications, and I keep learning new technologies along the way. My projects so far include a real-time interview platform, an online coding judge, and a face and location based attendance system.",
  ],

  facts: [
    { label: "Based in", value: "Chandauli, Uttar Pradesh" },
    { label: "Focus", value: "Full-stack web (MERN)" },
    { label: "Education", value: "B.Tech CSE, 2023 – 2027" },
    { label: "CGPA", value: "8.23 / 10 (up to Sem VI)" },
    { label: "Languages", value: "English, Hindi" },
  ],

  // Add the link of each project's repository in "github".
  // Leave "demo" as "" if the project is not deployed.
  projects: [
    {
      name: "Real-Time Interview Platform",
      description:
        "A collaborative interview platform with secure login, interview rooms and live code sharing.",
      details:
        "Built a real-time collaborative interview platform featuring secure JWT authentication, interview room management and live code sharing. Used Socket.IO for real-time communication and developed RESTful APIs with a responsive React.js frontend and MongoDB integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
      github: "",
      demo: "",
    },
    {
      name: "Student Judge",
      description:
        "An online coding platform where users solve programming problems and get their code judged automatically.",
      details:
        "Built a web-based coding platform that lets users solve programming problems and evaluates submissions against automated test cases. Integrated a code execution API/compiler for evaluation and multi-language support, with secure user authentication and a responsive interface for a better problem-solving experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "",
      demo: "",
    },
    {
      name: "Smart Attendance System",
      description:
        "Automated attendance marking using face recognition and location verification.",
      details:
        "Developed a smart attendance system that automates attendance using face recognition and location verification. Integrated computer vision and webcam support for contactless identity verification, and built a web interface with a Node.js/Express.js backend and MongoDB for attendance data management.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenCV"],
      github: "",
      demo: "",
    },
  ],

  skills: {
    Languages: ["Python", "C++", "JavaScript"],
    Frontend: ["HTML, CSS", "Tailwind CSS", "React"],
    Backend: ["Node.js", "Express.js", "REST APIs, JWT auth"],
    "Database & tools": ["MongoDB", "MySQL", "Git, GitHub, VS Code"],
  },

  education: [
    {
      period: "2023 – 2027",
      title: "B.Tech, Computer Science Engineering",
      org: "Gurukula Kangri (Deemed to be University), Haridwar, Uttarakhand",
      points: ["CGPA: 8.23 / 10 (up to Semester VI)"],
    },
    {
      period: "2022",
      title: "Class XII, UP Board (UPMSP)",
      org: "Uttar Pradesh Board",
      points: ["Percentage: 69%"],
    },
    {
      period: "2020",
      title: "Class X, UP Board (UPMSP)",
      org: "Uttar Pradesh Board",
      points: ["Percentage: 86%"],
    },
  ],

  certificates: [
    "SWAYAM-NPTEL: The Joy of Computing Using Python",
    "Infosys: Computer Vision 101, Data Science",
    "Forage: Software Engineering Job Simulation",
    "Forage: Data Visualisation, Empowering Business with Effective Insights",
    "IBM SkillsBuild: Cloud Computing Fundamentals",
  ],

  activities: "Actively participated in college events and the management team.",
  otherSkills: "Microsoft Excel, PowerPoint, Canva",
};

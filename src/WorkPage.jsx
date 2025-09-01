import NavBar from "./components/NavBar.jsx";
import PageHeader from "./components/PageHeader.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import ExperienceGrid from "./components/ExperienceGrid.jsx";
import ProjectGrid from "./components/ProjectGrid.jsx";
import Footer from "./components/Footer.jsx";

const experiences = [
  {
    duration: "May 2025 - Aug 2025",
    name: "AI/Automation Engineering Intern",
    company: "JuniorKids · Remote",
    desc: "Collaborated directly with the CEO and led two interns to develop a LangGraph-based AI agent powered by Qwen3 via OpenRouter for autonomous lead sourcing. Automated email outreach and scheduling through Gmail and Google Calendar APIs, and engineered a lightweight CRM with the Google Sheets API to track lead statuses and streamline sales operations.",
    techs: ["LangGraph", "Python", "Selenium", "BeautifulSoup", "Qwen3", "Google APIs"],
  },
  {
    duration: "Mar 2025 - Present",
    name: "Technical Co-founder",
    company: "TrainerIQ · DMZ · Toronto, ON",
    desc: "Built and deployed full-stack MVPs, with fully-routed React frontends, REST APIs backends, incorporating relational databases to validate key product workflows.",
    techs: ["React", "Node.js", "SQL", "Deployment"],
  },
  {
    duration: "Jan 2025 - Apr 2025",
    name: "Software Engineering Intern",
    company: "Savi Finance · Toronto, ON",
    desc: "Built an AI-powered PDF parsing pipeline to expand upload flexibility for financial data, enhancing the customer onboarding experience. Developed robust middleware for secure file validation and improved front-end consistency using TypeScript.",
    techs: ["TypeScript", "AI/ML", "PDF Parsing", "React", "Node.js"],
  },
  {
    duration: "Sep 2024 - Mar 2025",
    name: "Electrical Engineer (Student Team)",
    company:
      "RSX (Robotics for Space Exploration) · UofT Design Team · Toronto, ON",
    desc: "Designed and soldered a custom Arduino shield PCB using KiCad, sourcing components via DigiKey while balancing performance and cost. Developed embedded firmware in Arduino IDE and a PyQt-based GUI to control indicator lights, enabling seamless integration for the team’s autonomous rover.",
    techs: ["KiCad", "Arduino", "Soldering", "PCB Design", "Embedded Systems"],
  },
  {
    duration: "Oct 2024 - Dec 2024",
    name: "Full-Stack Web Developer",
    company: "UTRA Hacks · Toronto, ON",
    desc: "Collaborated in a team of five to develop the official UTRA Hacks website, contributing to the front-end application form using Next.js and TypeScript. Practiced effective communication with back-end developers and used Git for version control, ensuring smooth collaboration and project tracking.",
    techs: ["Next.js", "TypeScript", "Git"],
  },
];

const projects = [
  {
    icon: "fas fa-table",
    date: "2025",
    category: "Web Application",
    title: "React CSV Toolkit",
    desc: "Developed a React-based CSV toolkit, a standalone web application using Vite that supports file upload, cell editing, and table manipulation, enabling users to interact with and modify tabular data directly in the browser. Implemented dynamic sorting, row/column operations, and real-time state updates with React hooks and context, resulting in a fast, intuitive, and scalable frontend experience.",
    techs: [
      "React",
      "Vite",
      "JavaScript",
      "CSV Parser",
      "React Hooks",
      "Context API",
    ],
    duration: "1 week",
    teamSize: "Solo",
    btnInfos: [
      {
        link: "https://github.com/alexzjm/react-csv-toolkit",
        icon: "fab fa-github",
        text: "Source Code",
      }
    ]
  },
  {
    icon: "fas fa-map-marked-alt",
    date: "2025",
    category: "Software Application",
    title: "CityScope (ECE297 Final Project)",
    desc: "Developed an interactive C++ GIS application using OpenStreetMap data and custom rendering with OpenGL to explore city maps with zoom, pan, and POI search. Implemented A*, Dijkstra’s, and advanced TSP algorithms (multi-head Dijkstra, 2-opt, simulated annealing, hill climbing) with multithreading for real-time routing. Integrated live weather data via HTTP requests using libcurl.",
    techs: [
      "C++",
      "OpenStreetMap",
      "OpenGL",
      "A*",
      "Dijkstra",
      "TSP Algorithms",
      "Multithreading",
      "libcurl",
      "JSON",
    ],
    duration: "4 months",
    teamSize: "3 developers",
    btnInfos: [
      {
        link: "https://docs.google.com/presentation/d/10uHRt3xVfTFlG5ibUV83jiQUdtKie6ZEYFHBNOpg3UU/edit?usp=sharing",
        icon: "fas fa-file-powerpoint",
        text: "Presentation",
      }
    ]
  },
  {
    icon: "fas fa-music",
    date: "2025",
    category: "Embedded Systems",
    title: "Waveform Synthesizer (ECE243 Final Project)",
    desc: "Built a real-time audio synthesizer in C on a RISC-V soft-core deployed to a DE1-SoC FPGA, supporting polyphonic waveform generation and ADSR envelope shaping. Integrated a PS/2 keyboard for MIDI control and a VGA oscilloscope interface for real-time visualization and interaction using on-board buttons and switches.",
    techs: [
      "C",
      "RISC-V",
      "FPGA (DE1-SoC)",
      "ADSR Envelope",
      "VGA",
      "PS/2",
      "Real-Time Systems",
    ],
    duration: "2 months",
    teamSize: "2 developers",
    btnInfos: [
      {
        link: "https://github.com/alexzjm/ece243-sound-synthesizer",
        icon: "fab fa-github",
        text: "Source Code",
      }
    ]
  },
  {
    icon: "fas fa-robot",
    date: "2025",
    category: "Robotics Hackathon",
    title: "Autonomous Sensor-Guided Robot Car",
    desc: "Developed an autonomous robot car for UTRA Hacks that navigated color-coded obstacle courses using real-time sensor data and control logic. Integrated ultrasonic and color sensors with an Arduino microcontroller to enable lane following, obstacle avoidance, and decision-making through embedded firmware and actuator control.",
    techs: [
      "Arduino",
      "C/C++",
      "Ultrasonic Sensors",
      "Color Sensors",
      "DC Motors",
      "Embedded Systems",
    ],
    duration: "2 days",
    teamSize: "6 engineers",
    btnInfos: [
      {
        link: "https://github.com/Ken-2511/UTRA-Hacks-2025",
        icon: "fab fa-github",
        text: "Source Code",
      }
    ]
  },
  {
    icon: "fas fa-list-check",
    date: "2025",
    category: "Web Application",
    title: "To Do List Webapp",
    desc: "Built a full-stack to-do list application using Django, SQLite3, and Bootstrap, implementing features like routing, templating, and responsive UI styling for a clean and modular user experience. Integrated Django’s authentication system with customizations for secure, encrypted user login and registration.",
    techs: [
      "Django",
      "Python",
      "SQLite3",
      "Bootstrap",
      "HTML/CSS",
      "User Authentication",
    ],
    duration: "2 weeks",
    teamSize: "Solo",
    btnInfos: [
      {
        link: "https://github.com/alexzjm/todolist-webapp",
        icon: "fab fa-github",
        text: "Source Code",
      }
    ]
  },
  {
    icon: "fas fa-gamepad",
    date: "2024",
    category: "FPGA Design Project",
    title: "Sequence Memorization Game (ECE241 Final Project)",
    desc: "Designed and implemented a memory-based game using Verilog on an FPGA, integrating VGA display, on-chip memory, and external inputs for interactive gameplay. Coordinated milestone-based development with Git version control and ModelSim simulations to ensure reliable functionality, efficient collaboration, and streamlined debugging throughout the project lifecycle.",
    techs: [
      "Verilog",
      "FPGA (DE1-SoC)",
      "VGA",
      "On-Chip Memory",
      "ModelSim",
      "Git",
    ],
    duration: "2 months",
    teamSize: "2 engineers",
    btnInfos: [
      {
        link: "https://docs.google.com/presentation/d/1U-1HgBnCo08n5YCZTJ0Hr5Xn87P9HYmPP9DpSTcnZjw/edit?usp=sharing",
        icon: "fas fa-file-powerpoint",
        text: "Presentation",
      }
    ]
  },
  {
    icon: "fas fa-stethoscope",
    date: "2024",
    category: "Web Application",
    title: "SkinGuard AI",
    desc: "Developed a web-based skin cancer detection platform using a self-trained CNN with 80% testing accuracy, enabling users to upload images for real-time classification. Led full-stack development with Flask, HTML/CSS, and JavaScript, while collaborating on startup planning, gaining experience in technical strategy, communication, and product-focused problem-solving.",
    techs: [
      "Python",
      "Flask",
      "CNN",
      "HTML",
      "CSS",
      "JavaScript",
      "PyTorch",
      "Transfer Learning",
    ],
    duration: "3 months",
    teamSize: "2 members",
    btnInfos: [
      {
        link: "https://github.com/alexzjm/skinguard-ai",
        icon: "fab fa-github",
        text: "Source Code",
      }
    ]
  },
  {
    icon: "fas fa-envelope-open-text",
    date: "2024",
    category: "AI Modeling",
    title: "AI Spam Detector for Text",
    desc: "Built a character-level Recurrent Neural Network (RNN) using PyTorch to detect spam in text messages, achieving 98% test accuracy. Applied core NLP techniques, data preprocessing, and hyperparameter tuning, demonstrating strong command of model training and evaluation in a Python-based deep learning workflow.",
    techs: ["Python", "PyTorch", "RNN", "NLP", "NumPy", "Machine Learning"],
    duration: "2 weeks",
    teamSize: "Solo",
    btnInfos: [
      {
        link: "https://colab.research.google.com/drive/15lV7RABnc8AgdJlKz07OuO5Hmu3C0f1t?usp=sharing",
        icon: "fab fa-github",
        text: "Source Code",
      }
    ]
  },
  {
    icon: "fas fa-eye",
    date: "2024",
    category: "AI HealthCare Project",
    title: "Diabetic Retinopathy Detection AI Model (APS360 Final Project)",
    desc: "Developed a diabetic retinopathy detection model using transfer learning and fully connected neural networks in PyTorch, surpassing benchmark accuracy by 10% on eye scan images. Collaborated in a team of four to manage data pipelines, automate storage tasks with Python scripts, and maintain consistent progress through strong communication and task division.",
    techs: ["Python", "PyTorch", "Transfer Learning", "NumPy", "Deep Learning"],
    duration: "3 months",
    teamSize: "4 developers",
    btnInfos: [
      {
        link: "https://github.com/alexzjm/aps360-diabetic-retinopathy-report",
        icon: "fab fa-github",
        text: "View Report",
      }
    ]
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar pageId={1} />

      <div className="max-w-[1200px] bg-white mx-auto px-4 py-20">
        <PageHeader
          pageName="Work"
          pageTitle="My Work"
          pageDesc="A comprehensive showcase of my development work and professional experience, from web applications to career milestones."
        />
      </div>

      {/* Experience Section */}
      <div className="bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-4 py-20">
          <SectionHeader
            title="Professional Experience"
            subtitle="My professional journey and key milestones in development."
          />
          <div className="max-w-[800px] mx-auto">
            {experiences.map((exp) => (
              <ExperienceGrid
                duration={exp.duration}
                name={exp.name}
                company={exp.company}
                desc={exp.desc}
                techs={exp.techs}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <SectionHeader 
          title="Featured Projects"
          subtitle="A showcase of my development work and technical achievements"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map(proj => 
            <ProjectGrid 
              icon={proj.icon}
              date={proj.date}
              category={proj.category}
              title={proj.title}
              desc={proj.desc}
              techs={proj.techs}
              duration={proj.duration}
              teamSize={proj.teamSize}
              btnInfos={proj.btnInfos}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default WorkPage;

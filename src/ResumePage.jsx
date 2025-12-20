import NavBar from "./components/NavBar.jsx";
import PageHeader from "./components/PageHeader.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import Footer from "./components/Footer.jsx";
import ResumeGrid from "./components/ResumeGrid.jsx";
import TranscriptGrid from "./components/TranscriptGrid.jsx";

const resumes = [
  {
    iconClass: "fas fa-code",
    name: "Software Resume",
    desc: "Resume highlighting software engineering, AI/ML, and full-stack web development experience. Includes internships, co-founding experience, robotics team projects, hackathon contributions, and academic AI projects.",
    focusAreas:
      "Full-Stack Development, AI/ML, Automation, Systems Programming",
    targetRoles:
      "Software Engineer, AI/ML Engineer, Full-Stack Developer, Automation Engineer, Research Assistant",
    lastUpdated: "September 2025",
    techs: [
      "Python", "C++", "JavaScript/TypeScript", "React", "Next.js", "PyTorch", "Docker", "AWS"
    ],
    pdfLink: "resumes/ml_software_resume_v2_1_4.pdf",
  },
  {
    iconClass: "fas fa-microchip",
    name: "Hardware Resume",
    desc: "Resume focused on embedded systems, FPGA development, robotics hardware, and low-level programming. Includes FPGA projects, PCB design, robotics competition experience, and embedded hackathon builds.",
    focusAreas:
      "Embedded Systems, FPGA Development, Robotics, Low-Level Programming",
    targetRoles:
      "Embedded Software Engineer, Hardware Engineer, FPGA Engineer, Robotics Engineer, Systems Engineer",
    lastUpdated: "September 2025",
    techs: [
      "C", "C++", "Verilog", "Python", "FPGA/Arduino", "KiCad", "Quartus"
    ],
    pdfLink: "resumes/hardware_resume_v2_1_4.pdf",
  },
];

const transcripts = [
  {
    institution: "University of Toronto",
    degree: "Bachelor of Applied Science in Computer Engineering",
    graduationDate: "Expected 2028",
    gpa: "3.88/4.00",
    pdfLink: "transcripts/uoft_transcript.pdf",
  },
];

function ResumePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar pageId={2} />

      <div className="max-w-[1200px] bg-white mx-auto px-4 py-20">
        <PageHeader
          pageName="Resume"
          pageTitle="Resume"
          pageDesc="Access my professional resumes. Each document is tailored for different opportunities and showcases relevant qualifications."
        />
      </div>

      {/* Resume Section */}
      <div className="max-w-[1200px] mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumes.map((resume) => {
            return (
              <ResumeGrid
                iconClass={resume.iconClass}
                name={resume.name}
                desc={resume.desc}
                focusAreas={resume.focusAreas}
                targetRoles={resume.targetRoles}
                lastUpdated={resume.lastUpdated}
                techs={resume.techs}
                pdfLink={resume.pdfLink}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResumePage;

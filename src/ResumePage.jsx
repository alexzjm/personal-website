import { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import PageHeader from "./components/PageHeader.jsx";
import Footer from "./components/Footer.jsx";

function ResumePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar pageId={2} />

      <div className="max-w-[1200px] bg-white mx-auto px-4 py-20">
        <PageHeader
          pageName="Resume"
          pageTitle="Resume Collections"
          pageDesc="Tailored resumes for different career paths and opportunities. Each version highlights relevant skills and experiences for specific roles."
        />
      </div>

      {/* Main Content Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="text-center max-w-[600px] mx-auto">
          <div className="mb-8">
            <i className="fas fa-file-alt text-6xl text-[#ccc] mb-6"></i>
          </div>
          <h2 className="text-2xl font-semibold text-[#111] mb-4">
            Resume Collections Coming Soon
          </h2>
          <p className="text-lg text-[#666] leading-relaxed mb-6">
            I'm currently preparing tailored resume versions for different career paths and opportunities. 
            Each version will highlight relevant skills and experiences for specific roles.
          </p>
          <p className="text-sm text-[#666]">
            In the meantime, feel free to explore my 
            <a href="/work" className="text-[#111] hover:underline font-medium"> work experience</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResumePage;

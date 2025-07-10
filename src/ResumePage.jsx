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

      <p>resume page</p>

      <Footer />
    </div>
  );
}

export default ResumePage;

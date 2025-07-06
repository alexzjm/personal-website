import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import PageHeader from './components/PageHeader.jsx'
import Footer from './components/Footer.jsx'

function ResumePage () {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <NavBar pageId={2}/>
            <PageHeader 
                pageName="Resume"
                pageTitle="Resume Collections"
                pageDesc="Tailored resumes for different career paths and opportunities. Each version highlights relevant skills and experiences for specific roles."
            />
            <p>resume page</p>
            <Footer />
        </div>
    )
}

export default ResumePage;
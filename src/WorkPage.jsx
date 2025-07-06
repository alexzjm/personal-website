import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

function WorkPage () {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <NavBar pageId={1}/>
            <p>work page</p>
            <Footer />
        </div>
    );
}

export default WorkPage;
import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import PageHeader from './components/PageHeader.jsx'
import Footer from './components/Footer.jsx'

function WorkPage () {
    return (
        <div className="min-h-screen bg-white font-sans">

            <NavBar pageId={1}/>

            <div className="max-w-[1200px] bg-white mx-auto px-4 py-20">
                <PageHeader 
                    pageName="Work"
                    pageTitle="My Work"
                    pageDesc="A comprehensive showcase of my development work and professional experience, from web applications to career milestones."
                />
                <div className="flex justify-between items-center gap-8 mt-8 flex-wrap">
                    <div className="text-center min-w-[150px]">
                        <h3 className="text-4xl font-bold text-[#111] mb-2">10+</h3>
                        <p className="text-sm text-[#666] uppercase tracking-[0.5px] leading-[1.4]">Projects Completed</p>
                    </div>
                    <div className="text-center min-w-[150px]">
                        <h3 className="text-4xl font-bold text-[#111] mb-2">10+</h3>
                        <p className="text-sm text-[#666] uppercase tracking-[0.5px] leading-[1.4]">Hours Committed</p>
                    </div>
                    <div className="text-center min-w-[150px]">
                        <h3 className="text-4xl font-bold text-[#111] mb-2">10+</h3>
                        <p className="text-sm text-[#666] uppercase tracking-[0.5px] leading-[1.4]">Github Contributions</p>
                    </div>
                    <div className="text-center min-w-[150px]">
                        <h3 className="text-4xl font-bold text-[#111] mb-2">10+</h3>
                        <p className="text-sm text-[#666] uppercase tracking-[0.5px] leading-[1.4]">Lines of Code Written</p>
                    </div>
                </div>
            </div>

            

            <Footer />

        </div>
    );
}

export default WorkPage;
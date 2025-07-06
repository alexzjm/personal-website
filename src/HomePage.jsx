import { useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import pfp from './assets/alexzhang.jpg'

function HomePage () {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            
            <NavBar pageId={0}/>

            {/* Hero Section */}
            <div className="grid grid-cols-2 gap-16 items-center">
                <div>
                    <h1 className="text-6xl font-bold leading-tight mb-4 text-[#111]">Alex Zhang</h1>
                    <p className="text-2xl font-medium text-[#666] mb-4">AI-Enthusiast & Full-stack Developer</p>
                    <p className="text-lg text-[#666] mb-8 leading-relaxed">
                        I build to learn. I'm drawn to hard problems, clean systems, and tools that 
                        teach me something new. What matters most is understanding how things work 
                        and pushing into areas I haven't explored before.
                    </p>
                    <div className="flex gap-4 items-center">
                        <Link to="/work" className="inline-block py-3 px-6 text-sm font-medium uppercase tracking-wide rounded border-2 border-[#111] bg-[#111] text-white cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#111]">
                            View Work
                        </Link>
                        <Link to="/resume" className="inline-block py-3 px-6 text-sm font-medium uppercase tracking-wide rounded border-2 border-[#111] bg-[#111] text-white cursor-pointer transition duration-300 ease-in-out hover:bg-transparent hover:text-[#111]">
                            View Resume
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={pfp} />
                </div>
            </div>
            
            <div>
                <div>
                    <h3>Education</h3>
                    <p>Computer Engineering</p>
                    <p>University of Toronto</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p>Toronto ON /</p>
                    <p>Vancouver BC</p>
                </div>
                <div>
                    <h3>Focus</h3>
                    <p>Web Development</p>
                    <p>Artificial Intelligence</p>
                </div>
                <div>
                    <h3>Experience</h3>
                    <p>2+ Years</p>
                    <p>10+ Projects</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>About Me</h3>
                    <div>Get to know more about my background, skills, and passion for development.</div>
                </div>
                <div>
                    <p>
                        I'm a Computer Engineering student at the University of Toronto with a 3.9 GPA, 
                        specializing in AI and web development. I build intelligent web applications 
                        that combine full-stack development with applied machine learning. My work spans 
                        a range of technical areas—from conversational voice agents using Twilio and 
                        LangGraph, to health-focused AI tools and custom backend systems powered by 
                        Python, FastAPI, and cloud infrastructure.
                    </p>
                    <p>
                        I'm also the founder / CTO of TrainerIQ, an AI-enhanced coaching platform supported by 
                        DMZ, where I explore how technology can scale human guidance without losing its 
                        personal touch. On the frontend, I work with frameworks like React and Tailwind 
                        CSS to design responsive, minimal user interfaces that feel intuitive and purposeful.
                    </p>
                    <p>
                        Outside of engineering, I enjoy drawing, producing music, and following European football.
                        I am a huge supporter of Manchester City and Real Madrid.
                    </p>
                </div>
                <div>
                    <div>
                        <h3>3.9</h3>
                        <p>GPA</p>
                    </div>
                    <div>
                        <h3>88%</h3>
                        <p>Cumulative Average</p>
                    </div>
                    <div>
                        <h3>2+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3>10+</h3>
                        <p>Technologies</p>
                    </div>
                </div>

            </div>
            <p>home page</p>
            <Footer />
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );
}

export default HomePage;
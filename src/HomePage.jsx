import { useState } from 'react'
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import pfp from './assets/alexzhang.jpg'

function HomePage () {
    return (
        <div className="min-h-screen bg-white font-sans">

            
            <NavBar pageId={0}/>

            {/* Hero Section */}
            <div className="max-w-[1200px] bg-white mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                    <div className="flex justify-center">
                        <div className="w-[300px] h-[300px] rounded-md overflow-hidden bg-[#f5f5f5] flex items-center justify-center">
                            <img src={pfp} />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Quick Info Cards */}
            <div className="bg-[#fafafa]">
                <div className="max-w-[1200px] mx-auto px-4 py-20">
                    <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                        <div className="bg-white p-8 rounded-md text-center">
                            <div className="text-4xl text-[#111] mb-4"><i class="fas fa-graduation-cap"></i></div>
                            <h3 className="text-xl text-[#111] mb-2 font-medium leading-tight">Education</h3>
                            <p className="text-base text-[#666] mb-4">Computer Engineering <br /> University of Toronto</p>
                        </div>
                        <div className="bg-white p-8 rounded-md text-center">
                            <div className="text-4xl text-[#111] mb-4"><i class="fas fa-map-marker-alt"></i></div>
                            <h3 className="text-xl text-[#111] mb-2 font-medium leading-tight">Location</h3>
                            <p className="text-base text-[#666] mb-4">Toronto ON / <br /> Vancouver BC</p>
                        </div>
                        <div className="bg-white p-8 rounded-md text-center">
                            <div className="text-4xl text-[#111] mb-4"><i class="fas fa-code"></i></div>
                            <h3 className="text-xl text-[#111] mb-2 font-medium leading-tight">Focus</h3>
                            <p className="text-base text-[#666] mb-4">Web Development <br /> Artificial Intelligence</p>
                        </div>
                        <div className="bg-white p-8 rounded-md text-center">
                            <div className="text-4xl text-[#111] mb-4"><i class="fas fa-calendar-alt"></i></div>
                            <h3 className="text-xl text-[#111] mb-2 font-medium leading-tight">Experience</h3>
                            <p className="text-base text-[#666] mb-4">2+ Years <br /> 10+ Projects</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-[1200px] bg-white mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl text-[#111] font-semibold mb-4">About Me</h2>
                    <p className="text-lg text-[#666] mb-4">Get to know more about my background, skills, and passion for development.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 items-start">
                    <div>
                        <p className="text-[#666] mb-6 leading-relaxed">
                            I'm a Computer Engineering student at the University of Toronto, 
                            minoring in AI and Business. I build intelligent web applications 
                            that combine full-stack development with applied machine learning. My work spans 
                            a range of technical areas—from conversational voice agents using Twilio and 
                            LangGraph, to health-focused AI tools and custom backend systems powered by 
                            Python, FastAPI, and cloud infrastructure.
                        </p>
                        <p className="text-[#666] mb-6 leading-relaxed">
                            I'm also the founder / CTO of TrainerIQ, an AI-enhanced coaching platform supported by 
                            DMZ, where I explore how technology can scale human guidance without losing its 
                            personal touch. On the frontend, I work with frameworks like React and Tailwind 
                            CSS to design responsive, minimal user interfaces that feel intuitive and purposeful.
                        </p>
                        <p className="text-[#666] mb-6 leading-relaxed">
                            Outside of engineering, I enjoy drawing, producing music, and following European football.
                            I am a huge supporter of Manchester City and Real Madrid.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="text-center p-6 bg-[#fafafa] rounded">
                            <h3 className="text-4xl font-bold text-[#111] mb-2">3.9</h3>
                            <p className="text-sm text-[#666] uppercase">GPA</p>
                        </div>
                        <div className="text-center p-6 bg-[#fafafa] rounded">
                            <h3 className="text-4xl font-bold text-[#111] mb-2">88%</h3>
                            <p className="text-sm text-[#666] uppercase">Cumulative Average</p>
                        </div>
                        <div className="text-center p-6 bg-[#fafafa] rounded">
                            <h3 className="text-4xl font-bold text-[#111] mb-2">2+</h3>
                            <p className="text-sm text-[#666] uppercase">Years Experience</p>
                        </div>
                        <div className="text-center p-6 bg-[#fafafa] rounded">
                            <h3 className="text-4xl font-bold text-[#111] mb-2">10+</h3>
                            <p className="text-sm text-[#666] uppercase">Technologies</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;
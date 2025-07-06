import { Link } from 'react-router-dom';

function NavBar({ pageId }) {
    return (
        <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-lg z-[1000] border-b border-gray-200 py-4">
            <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="font-bold text-lg text-[#111] no-underline">
                    Alex Zhang
                </Link>
                <div className="flex gap-8 text-[#666]">
                    <Link to="/" className={`relative hover:text-[#111] transition ${pageId==0 && "text-[#111]"}`}>
                        Home
                        {pageId==0 && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#111]"></span>
                        )}
                    </Link>
                    <Link to="/work" className={`relative hover:text-[#111] transition ${pageId==1 && "text-[#111]"}`}>
                        Work
                        {pageId==1 && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#111]"></span>
                        )}
                    </Link>
                    <Link to="/resume" className={`relative hover:text-[#111] transition ${pageId==2 && "text-[#111]"}`}>
                        Resume
                        {pageId==2 && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#111]"></span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

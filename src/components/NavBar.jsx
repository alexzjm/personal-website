import { Link } from 'react-router-dom';

function NavBar({ pageId }) {
    return (
        <nav className="sticky top-0 w-full bg-white/50 backdrop-blur-lg z-[1000] border-b border-gray-200 py-4">
            <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="font-bold text-lg text-gray-900 no-underline">
                    Alex Zhang
                </Link>
                <div className="flex gap-8 text-gray-600">
                    <Link to="/" className={`relative hover:text-gray-900 transition ${pageId==0 && "text-gray-900"}`}>
                        Home
                        {pageId==0 && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-900"></span>
                        )}
                    </Link>
                    <Link to="/work" className={`relative hover:text-gray-900 transition ${pageId==1 && "text-gray-900"}`}>
                        Work
                        {pageId==1 && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-900"></span>
                        )}
                    </Link>
                    <Link to="/resume" className={`relative hover:text-gray-900 transition ${pageId==2 && "text-gray-900"}`}>
                        Resume
                        {pageId==2 && (
                            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-900"></span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

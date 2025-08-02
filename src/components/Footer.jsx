function Footer () {
    return (
        <div className="bg-[#fafafa]">
            <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
                <h2 className="font-semibold text-4xl text-[#111] mb-4">Let's Connect!</h2>
                <p className="text-[#666] mb-6 leading-relaxed">I'm always open to discussing new opportunities and interesting projects.</p>
                <div className="flex gap-6 justify-center">
                    <a 
                        className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200" 
                        href="mailto:alexjunmzhang@gmail.com"
                        aria-label="Email"
                    >
                        <i className="fas fa-envelope text-lg"></i>
                    </a>
                    <a 
                        className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200" 
                        href="https://www.linkedin.com/in/alexzjm/"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a 
                        className="w-12 h-12 bg-[#111] rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200" 
                        href="https://github.com/alexzjm"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github text-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
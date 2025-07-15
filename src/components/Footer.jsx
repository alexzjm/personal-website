function Footer () {
    return (
        <div className="bg-[#fafafa]">
            <div className="max-w-[1200px] mx-auto px-4 py-20 text-center">
                <h2 className="font-semibold text-4xl text-[#111] mb-4">Let's Connect!</h2>
                <p className="text-[#666] mb-6 leading-relaxed">I'm always open to discussing new opportunities and interesting projects.</p>
                <div className="flex gap-6 justify-center">
                    <a className="text-2xl" href="mailto:alexjunmzhang@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a className="text-2xl" href="https://www.linkedin.com/in/alexzjm/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="text-2xl" href="https://github.com/alexzjm">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
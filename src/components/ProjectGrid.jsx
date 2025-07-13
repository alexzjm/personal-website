

function ProjectGrid ({ icon, date, category, title, desc, techs, duration, teamSize, btnLink, btnIcon, btnText }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden flex flex-col border-[#f0f0f0] border-2">
            <div className="bg-[#fafafa] p-8 flex items-center gap-6">
                <div className="w-15 h-15 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                    <i className={icon}></i>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[#666] text-sm font-medium">{date}</span>
                    <span className="text-[#888] text-xs tracking-[0.5px] uppercase">{category}</span>
                </div>
            </div>
            <div className="pad-8 flex flex-col p-4">
                <h3 className="text-xl text-[#111] font-semibold leading-[1.2] mb-3">{title}</h3>
                <p className="text-sm text-[#666] mb-6 leading-[1.6]">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techs.map(tech => <span className="bg-[#fafafa] text-[#666] px-1 py-2 rounded-[4px] text-xs">{tech}</span>)}
                </div>
                <div>
                    <div>
                        <span className="text-sm text-[#666] uppercase tracking-[0.5px]">Duration</span>
                        <span className="ml-2">{duration}</span>
                    </div>
                    <div>
                        <span className="text-sm text-[#666] uppercase tracking-[0.5px]">Team Size</span>
                        <span className="ml-2">{teamSize}</span>
                    </div>
                </div>
            </div>
            <div className="flex mt-auto pt-6 border-t border-t-[#f0f0f0] p-4">
                <div className="text-[#111] no-underline font-medium text-xs uppercase tracking-[0.5px] py-3 px-6 border border-[#e0e0e0] rounded-md transition-all duration-300 ease-in-out text-center w-full flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white">
                    <a href={btnLink}>
                        <i className={btnIcon + " text-base"}></i>
                        <span className="ml-1">{btnText}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectGrid;
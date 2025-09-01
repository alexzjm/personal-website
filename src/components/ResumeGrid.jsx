function ResumeGrid ({ iconClass, name, desc, focusAreas, targetRoles, lastUpdated, techs, pdfLink }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden flex flex-col border-[#f0f0f0] border-2 h-full">
            <div className="bg-[#fafafa] p-8 flex items-center gap-6">
                <div className="w-15 h-15 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                    <i className={iconClass}></i>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[#666] text-sm font-medium">{lastUpdated}</span>
                    <span className="text-[#888] text-xs tracking-[0.5px] uppercase">Resume</span>
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl text-[#111] font-semibold leading-[1.2] mb-3">{name}</h3>
                <p className="text-sm text-[#666] mb-6 leading-[1.6]">{desc}</p>
                
                <div className="space-y-3 mb-6">
                    <div>
                        <span className="text-sm text-[#666] uppercase tracking-[0.5px] font-medium">Focus Areas</span>
                        <p className="text-sm text-[#111] mt-1">{focusAreas}</p>
                    </div>
                    <div>
                        <span className="text-sm text-[#666] uppercase tracking-[0.5px] font-medium">Target Roles</span>
                        <p className="text-sm text-[#111] mt-1">{targetRoles}</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {techs.map((tech, index) => (
                        <span key={index} className="bg-[#fafafa] text-[#666] px-2 py-1 rounded-[4px] text-xs font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-auto pt-6 border-t border-t-[#f0f0f0] p-8">
                <a 
                    href={pdfLink} 
                    download
                    className="text-[#111] no-underline font-medium text-xs uppercase tracking-[0.5px] py-3 px-6 border border-[#e0e0e0] rounded-md transition-all duration-300 ease-in-out text-center w-full flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white"
                >
                    <i className="fas fa-download text-base"></i>
                    <span>Download PDF</span>
                </a>
            </div>
        </div>
    );
}

export default ResumeGrid;
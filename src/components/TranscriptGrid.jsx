function TranscriptGrid ({ institution, degree, graduationDate, gpa, pdfLink }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden flex flex-col border-[#f0f0f0] border-2 h-full">
            <div className="bg-[#fafafa] p-8">
                <div className="flex flex-col gap-1">
                    <span className="text-[#666] text-sm font-medium">{graduationDate}</span>
                    <span className="text-[#888] text-xs tracking-[0.5px] uppercase">Academic Transcript</span>
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <div className="space-y-4 mb-6">
                    <div>
                        <h3 className="text-lg text-[#111] font-semibold mb-1">{institution}</h3>
                        <p className="text-sm text-[#666]">{degree}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                        <span className="text-sm text-[#666] uppercase tracking-[0.5px] font-medium">GPA</span>
                        <span className="text-sm text-[#111] font-medium">{gpa}</span>
                    </div>
                </div>
            </div>
            <div className="mt-auto pt-6 border-t border-t-[#f0f0f0] p-8">
                <div className="flex flex-col gap-2">
                    <a 
                        href={pdfLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#111] no-underline font-medium text-xs uppercase tracking-[0.5px] py-3 px-6 border border-[#e0e0e0] rounded-md transition-all duration-300 ease-in-out text-center w-full flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white"
                    >
                        <i className="fas fa-eye text-base"></i>
                        <span>View PDF</span>
                    </a>
                    <a 
                        href={pdfLink} 
                        download
                        rel="noopener noreferrer"
                        className="text-[#111] no-underline font-medium text-xs uppercase tracking-[0.5px] py-3 px-6 border border-[#e0e0e0] rounded-md transition-all duration-300 ease-in-out text-center w-full flex items-center justify-center gap-2 hover:bg-[#111] hover:text-white"
                    >
                        <i className="fas fa-download text-base"></i>
                        <span>Download PDF</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TranscriptGrid;

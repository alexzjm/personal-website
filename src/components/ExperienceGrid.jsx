function ExperienceGrid ({ duration, name, company, desc, techs }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 mb-12 pb-12 border-b border-gray-200 last:border-b-0">
            <div className="font-semibold text-gray-600 text-sm min-w-[120px]">
                {duration}
            </div>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
                    <div className="text-gray-600 font-medium mb-4">{company}</div>
                    <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {techs.map((tech, index) => (
                        <span 
                            key={index}
                            className="bg-white text-gray-600 px-2 py-1 rounded text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceGrid;
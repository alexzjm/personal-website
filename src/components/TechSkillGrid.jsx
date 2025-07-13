function TechSkillGrid ({title, techs}) {
    return (
        <div className="bg-[#fafafa] p-8 rounded-[1rem]">
            <h3 className="text-xl mb-6 font-medium">{title}</h3>
            <div className="grid grid-cols-2 gap-3">
                {techs.map(tech => <div className="bg-white px-3 py-4 rounded-[4px] font-medium text-center text-sm">{tech}</div>)}
            </div>
        </div>
    );
}

export default TechSkillGrid;
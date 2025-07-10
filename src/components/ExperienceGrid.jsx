

function ExperienceGrid ({ duration, name, company, desc, techs }) {
    return (
        <div>
            <div>
                {duration}
            </div>
            <div>
                <h3>{name}</h3>
                <div>{company}</div>
                <p>{desc}</p>
                <div className="flex gap-2 flex-wrap">
                    {techs.map(tech => <span className="bg-white px-1 py-2 rounded-[4px] font-medium text-center text-sm text-[#111]">{tech}</span>)}
                </div>
            </div>
        </div>
    );
}

export default ExperienceGrid;
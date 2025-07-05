

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
                <div>
                    {techs.map(tech => <span>{tech}</span>)}
                </div>
            </div>
        </div>
    )
}

export default ExperienceGrid;
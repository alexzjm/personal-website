

function ProjectGrid ({ icon, date, category, title, desc, techs, duration, teamSize, repoLink }) {
    return (
        <div>
            <div>
                <div>
                    <i className={icon}></i>
                </div>
                <div>
                    <span>{date}</span>
                    <span>{category}</span>
                </div>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div>
                    {techs.map(tech => <span>{tech}</span>)}
                </div>
                <div>
                    <span>Duration</span>
                    <span>{duration}</span>
                </div>
                <div>
                    <span>Team Size</span>
                    <span>{teamSize}</span>
                </div>
            </div>
            <div>
                <div>
                    <a href={repoLink}>
                        <i className="fab fa-github"></i>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectGrid


function ResumeGrid ({ iconClass, name, desc, focusAreas, targetRoles, lastUpdated, techs, pdfLink }) {
    return (
        <div>
            <div>
                <i className={iconClass}></i>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div>
                    <span>Focus Areas</span>
                    <span>{focusAreas}</span>
                </div>
                <div>
                    <span>Target Roles</span>
                    <span>{targetRoles}</span>
                </div>
                <div>
                    <span>Last Updated</span>
                    <span>{lastUpdated}</span>
                </div>
                <div>
                    {techs.map(tech => <span>{tech}</span>)}
                </div>
            </div>
            <div>
                <button>Download PDF</button>
            </div>
        </div>
    );
}

export default ResumeGrid;
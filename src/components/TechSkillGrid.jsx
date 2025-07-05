import { useState } from "react";

function TechSkillGrid ({title, techs}) {
    return (
        <div>
            <h>{title}</h>
            <div>
                {techs.map(tech => <div>{tech}</div>)}
            </div>
        </div>
    );
}

export default TechSkillGrid;
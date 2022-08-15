/*========================================
        Import Components
========================================*/
import { SkillsListItem } from "./SkillsListItem"

export const SkillsList = ({skills}) => {

    return (
        <ul className="skills-list">
            {skills.map((skill, index) => (
                <li key={index} className="skills-list-item">
                    {/* {console.log(skill[0])} */}
                    <SkillsListItem skill={skill} />
                </li>
            ))}
        </ul>
    )
}

/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import { getSkills } from "../../Data/Skills"
/*========================================
        Import Components
========================================*/
import { SkillsList } from "./SkillsList"


export const Skills = ({ setNavLinks }) => {

    const [skills, setSkills] = useState([])
    useEffect(() => {
        setSkills(getSkills())
        setNavLinks((current) => {
            return {
                ...current,
                activeNavLink: 2
            }
        })
    }, [])

    return (
        <div className="section-skills">
            <div className="skills-text">
                <p>I first started coding by learning and using Visual Basic for Applications (VBA) to drive efficiency. Then I decided I wanted that (programming) to be my job. Below are some frameworks and tools I've attained thus far. </p>
            </div>
            <div className="skills-list-div">
                <SkillsList skills={skills} />
            </div>
        </div>
    )
}

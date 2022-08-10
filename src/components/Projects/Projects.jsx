/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import { ProjectNav } from "../ProjectNav/ProjectNav"
import { getBootcampProjects } from "../../Data/Projects.js"
/*========================================
        Import components
========================================*/
import { ProjectsSectionBootcamp } from "../ProjectsSection/ProjectsSectionBootcamp"
import { ProjectDetail } from "../ProjectDetail/ProjectDetail"
import { ProjectsSectionPersonal } from "../ProjectsSection/ProjectsSectionPersonal"
import { ProjectsSectionAll } from "../ProjectsSection/ProjectsSectionAll"

export const Projects = () => {
    const [projectsNav, setProjectsNav] = useState({
        activeSection: 1,
        allSections: [
            {
                id: 0,
                name: "Personal",
            },
            {
                id: 1,
                name: "Bootcamp",
            },
            {
                id: 2,
                name: "View All",
            },
        ]
    })

    const [projectsBc, setProjectsBc] = useState({
        activeProject: null,
    })

    useEffect(() => {
        setProjectsBc(getBootcampProjects())
    }, [])

    const handleNavClick = (id) => {
        setProjectsNav({
            ...projectsNav,
            activeSection: id,
        })
    }
    return (
        <div className="section-projects">
            <ProjectDetail
                activeProject={projectsBc.activeProject ? projectsBc.projectsBc[projectsBc.activeProject] : null}
            />
            <div className="project-nav">
                <ProjectNav projectsNav={projectsNav} setProjectsNav={setProjectsNav} handleNavClick={handleNavClick} />
                <div className="project-nav-bar"></div>
            </div>
            <div className="project-list">
                {projectsNav.activeSection === 0 ?
                    <ProjectsSectionPersonal />
                    :
                    null
                }
                {projectsNav.activeSection === 1 ?
                    <ProjectsSectionBootcamp projectsBc={projectsBc} />
                    :
                    null
                }
                {projectsNav.activeSection === 2 ?
                    <ProjectsSectionAll projectsBc={projectsBc} />
                    :
                    null
                }
            </div>
        </div>
    )
}

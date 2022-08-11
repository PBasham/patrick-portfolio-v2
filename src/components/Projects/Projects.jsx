/*========================================
        Import Dependencies
========================================*/
import { useState, useEffect } from "react"
import { ProjectNav } from "./ProjectNav/ProjectNav"
import { getProjects } from "../../Data/Projects.js"
/*========================================
        Import components
========================================*/
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx"
import { ProjectsSectionBootcamp } from "./ProjectsSection/ProjectsSectionBootcamp.jsx"
import { ProjectsSectionPersonal } from "./ProjectsSection/ProjectsSectionPersonal.jsx"
import { ProjectsSectionAll } from "./ProjectsSection/ProjectsSectionAll.jsx"

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

    const projectsBc = getProjects()


    const [selectedProject, setSelectedProject] = useState({})

    const handleBcProjClick = (id) => {
        setSelectedProject(projectsBc[id])
    }

    const handleNavClick = (id) => {
        setProjectsNav({
            ...projectsNav,
            activeSection: id,
        })
    }
    return (
        <div id="projects" className="section-projects">
            <ProjectDetail
                selectedProject={selectedProject}
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
                    <ProjectsSectionBootcamp projectsBc={projectsBc} handleBcProjClick={handleBcProjClick}/>
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

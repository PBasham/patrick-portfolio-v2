import { ProjectCard } from "../ProjectCard/ProjectCard"

export const ProjectsSectionBootcamp = ({ projectsBc, handleBcProjClick }) => {
    return (
        <>
            {projectsBc.map(project => (
                <ProjectCard key={project.id} project={project} handleProjectClick={handleBcProjClick}/>
            ))}
        </>
    )
}

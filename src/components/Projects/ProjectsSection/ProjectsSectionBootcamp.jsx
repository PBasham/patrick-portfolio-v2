import { ProjectCard } from "../ProjectCard/ProjectCard"

export const ProjectsSectionBootcamp = ({ projectsBc }) => {
    return (
        <>
            {projectsBc.map(project => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </>
    )
}

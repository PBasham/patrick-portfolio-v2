import { ProjectCard } from "../ProjectCard/ProjectCard"

export const ProjectsSectionPersonal = ( {personalProjects, handleProjectClick} ) => {
        console.log(personalProjects)
    return (
        <>
            {personalProjects.map(project => (
                <ProjectCard key={project.id} project={project} handleProjectClick={handleProjectClick} />
            ))}
        </>
        // <div className="projects-personal">
        //     <h2>Nothing here to show quite yet.</h2>
        // </div>
    )
}

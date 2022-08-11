export const ProjectCard = ({ project, handleProjectClick }) => {

    
    return (
        <div className="project-card" onClick={() => handleProjectClick(project.id)}>
            <img src={project.img} alt="" />
            <div className="project-card-front">
                <p className="title">{project.title}</p>
            </div>
        </div>
    )
}

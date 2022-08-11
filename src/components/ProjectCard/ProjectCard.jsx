export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.img} alt="" />
            <div className="project-card-front">
                <p className="title">{project.title}</p>
            </div>
        </div>
    )
}

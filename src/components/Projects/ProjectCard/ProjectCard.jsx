/*========================================
        Import Dependencies
========================================*/
import { Link as LinkScroll } from "react-scroll"

export const ProjectCard = ({ project, handleProjectClick }) => {


    return (
        <div className="project-card">

            <LinkScroll
                to="projects"
                onClick={() => handleProjectClick(project.id)}
                smooth={true}
                duration={500}
            >
                <div className="img-div">
                    <img src={project.img} alt="" />
                    <div className="title-shape-div">
                        <div className="project-card-front">
                            <p className="title">{project.title}</p>
                        </div>
                    </div>
                </div>
            </LinkScroll>
                <ul className="technologies">
                    {project.technologies.map((tech, index) => (
                        <li key={index} >
                            {/* <div>{tech[0]}</div> */}
                            <p>{tech[1]} /</p>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

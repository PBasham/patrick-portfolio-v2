export const ProjectDetail = ({ selectedProject }) => {
    return (
        <div className="project-detail">
            {!selectedProject ?
                <p className="placeholder-text">Select a project to view details</p>
                :
                <>
                    <div className="project-detail-img">
                        <img src={selectedProject.img} alt="" />
                    </div>
                    <div className="project-detail-details">
                        <p className="details-title">{selectedProject.title}</p>
                        <p className="description">{selectedProject.description}</p>

                        {selectedProject.collaboration ?
                            <>
                                <p className="technologies-title">Collaborators:</p>
                                <ul className="collaborators">
                                    {selectedProject.team.map((member, index) => (
                                        <li className="collaborator">
                                            <a href={member.githubLink} target={"_blank"}>
                                                {`${member.name} ${member.id < (selectedProject.team.length - 1) ? "," : ""}`}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                            :
                            null
                        }

                        <p className="technologies-title">Technologies:</p>
                        <ul className="technologies">
                            {selectedProject.technologies.map((tech, index) => (
                                <li key={index}>{tech[1]}</li>
                            ))
                            }
                        </ul>
                        <div className="links">
                            {selectedProject.githubLink ? <a href={selectedProject.githubLink} target="_blank">Github</a> : null}
                            {selectedProject.deploymentLink ? <><a href={selectedProject.deploymentLink} target="_blank">Deployment</a><p className="windup-message">( Please allow 15-30 seconds for site to load )</p></> : null}
                        </div>

                    </div>
                </>
            }
        </div>
    )
}

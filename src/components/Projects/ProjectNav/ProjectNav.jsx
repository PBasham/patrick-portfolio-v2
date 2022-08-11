export const ProjectNav = ({ projectsNav, handleNavClick }) => {
    
    return (
        <ul className="project-nav-btns">
            {projectsNav.allSections.map(btn => (
                <li
                    key={btn.id}
                    className={`project-nav-btn ${btn.id === projectsNav.activeSection ? "active" : null}`}
                    onClick={() => handleNavClick(btn.id)}
                >{btn.name}</li>
            ))}
        </ul>
    )
}

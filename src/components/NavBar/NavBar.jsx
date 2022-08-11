export const NavBar = ({ navLinks, setNavLinks }) => {


    return (
        <div className="nav">
            <div className="nav-logo">Nav Logo</div>
            <ul className="nav-btns">
                {navLinks.allNavLinks.map((link) => (
                    <li
                        key={link.id}
                        className={`nav-btn ${link.id === navLinks.activeNavLink ? "active" : ""}`}
                        onClick={() => {setNavLinks({...navLinks, activeNavLink: link.id})}}
                    >{link.name}</li>
                ))}
            </ul>
            <div className="nav-socials">
                <a id="link-github" className="profile-link" href="https://github.com/PBasham" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
                <a id="link-linkedin" className="profile-link" href="https://www.linkedin.com/in/patrickbasham/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
    )
}

export const NavBar = ({ navLinks, setNavLinks }) => {


    return (
        <div className="nav-bar">
            <div className="nav-logo">Nav Logo</div>
            <div className="nav-btns">
                {navLinks.allNavLinks.map((link) => (
                    <button className="nav-btn">{link.name}</button>
                ))}
            </div>
            <div className="nav-socials">Socials</div>
        </div>
    )
}

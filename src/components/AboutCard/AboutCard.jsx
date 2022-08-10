export const AboutCard = ({ id, img, name, detail, active, handleClick }) => {
    return (
        <div className={`about-card ${active ? "active" : null}`} onClick={() => handleClick(id)}>
            {active ?
                <div className="about-card-back">
                    {detail}
                </div>
                :
                <div className="about-card-name">
                    <div className="about-card-front">
                        <div className="title">
                            <p>My</p>
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export const AboutCard = ({ id, img, name, detail, active, handleClick }) => {
    return (
        <div className={`about-card ${active ? "active" : null}`} onClick=
            {() => handleClick(id)}>
            <img src={img} alt="" />
            {active ?
                <div className="about-card-back">
                    <p className="description">
                        {detail}
                    </p>
                </div>
                :
                <div className="about-card-front">
                    <div className="title">
                        <p>My</p>
                        <p>{name}</p>
                    </div>
                </div>
            }
        </div>
    )
}

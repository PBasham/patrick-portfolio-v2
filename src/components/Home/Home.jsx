/*========================================
        Import Dependencies
========================================*/
import Typewriter from "typewriter-effect"

export const Home = ({ navLinks, setNavLinks }) => {
    return (
        <div className="section-home">
            <div className="img-div">
                <img src="./img/profile_pic.jpg" alt="Picture of me!" />
            </div>
            <div className="text-div">

                <div className="text">
                    <h1>Hello,</h1>
                    <p>My name is Patrick Basham and I
                        <span className="typed-text text-teal">
                            <Typewriter
                                options={{
                                    strings: [
                                        "am a software engineer.",
                                        "thrive to optimize.",
                                        "am always looking to learn more.",
                                        "am highly motivated.",
                                        "love to code!",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </p>
                </div>
                <a onClick={() => {
                    setNavLinks({ ...navLinks, activeNavLink: 3 })
                }}>Hire me</a>
            </div>
        </div>
    )
}

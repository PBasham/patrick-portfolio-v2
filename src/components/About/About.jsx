
/*========================================
        Import components
========================================*/

import { AboutCards } from "../AboutCards/AboutCards"

export const About = ({aboutCards}) => {
    return (
        <div id="about" className="section-about">
            <div className="quote-div">
                <div className="quote">
                    <p id="quote">The electric light did not come from the continuous improvement of candles.</p>
                    <p>- Oren Harari</p>
                </div>
            </div>
            <div className="about-cards">
                <AboutCards  />
            </div>
        </div>
    )
}

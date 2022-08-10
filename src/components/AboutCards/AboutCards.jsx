/*========================================
        Import Dependencies
========================================*/
import { getAboutCards } from "../../Data/AboutCards"
import { useState, useEffect } from "react"
/*========================================
        Import components
========================================*/
import { AboutCard } from "../AboutCard/AboutCard"

export const AboutCards = () => {

    const [aboutCards, setAboutCards] = useState([])

    useEffect(() => {
        setAboutCards(getAboutCards())
    }, [])

    const handleClick = (id) => {
        console.log("id", id)
        console.log("aboutCards", aboutCards[id].active)
        const updatedCard = aboutCards.map(card => {
            if (card.id === id) {
                return { ...card, active: !card.active }
            }
            return card
        })
        setAboutCards(updatedCard)
    }
    return (
        <>
            {aboutCards.map(card => (
                <AboutCard
                    key={card.id}
                    id={card.id}
                    img={card.img}
                    name={card.name}
                    detail={card.detail}
                    active={card.active}
                    handleClick={handleClick}
                />
            ))}
        </>
    )
}

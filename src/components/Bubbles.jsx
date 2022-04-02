import React, { useState, useEffect, useContext } from 'react'
import { GameContext } from '../context/GameContext'

export const Bubbles = ({ source, alt, relatedPlayer }) => {
    const [isHovered, setIsHovered] = useState(false)
    const { choices, setChoices, setHasChosen } = useContext(GameContext)

    const setValue = (e) => {
        setChoices({ ...choices, player: e.target.getAttribute('value') })
        setHasChosen(true)
    }
    return (
        <>
            <img
                src={isHovered ? source[1] : source[0]}
                alt={alt}
                value={alt}
                className="cursor-pointer bubble"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={setValue}
            />
        </>
    )
}

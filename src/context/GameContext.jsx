import React, { createContext, useState } from 'react'

export const GameContext = createContext()

export function GameContextProvider(props) {
    const levels = ['easy', 'medium', 'hard']
    const [choices, setChoices] = useState({
        player: null,
        opponent: null,
    })
    const [level, setLevel] = useState(levels[0])
    const [scores, setScores] = useState({
        player: 0,
        opponent: 0,
    })

    return (
        <GameContext.Provider value={{ choices, setChoices, level, levels, setLevel, scores, setScores }}>
            {props.children}
            {/* {} */}
        </GameContext.Provider>
    )
}

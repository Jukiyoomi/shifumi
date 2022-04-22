import React, { createContext, useState, useEffect } from 'react'

export const GameContext = createContext()

export function GameContextProvider(props) {
    const levels = ['easy', 'medium', 'hard']
    const items = ['rock', 'paper', 'scissor']
    const maxPointsToWin = 5

    const [hasChosen, setHasChosen] = useState(false)
    const [choices, setChoices] = useState({
        player: null,
        opponent: null,
    })

    const [winner, setWinner] = useState(null)

    const [level, setLevel] = useState(levels[2])
    const [scores, setScores] = useState({
        player: 0,
        opponent: 0,
    })

    const [isGaming, setIsGaming] = useState(false)
    const [difficultyRatio, setDifficultyRatio] = useState(0)

    return (
        <GameContext.Provider
            value={{
                choices,
                setChoices,
                level,
                levels,
                items,
                setLevel,
                scores,
                setScores,
                isGaming,
                setIsGaming,
                difficultyRatio,
                hasChosen,
                setHasChosen,
                setDifficultyRatio,
                winner,
                setWinner,
                maxPointsToWin,
            }}>
            {props.children}
        </GameContext.Provider>
    )
}

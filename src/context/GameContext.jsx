import React, { createContext, useState, useEffect } from 'react'

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

    const [isGaming, setIsGaming] = useState(true)
    const [difficultyRatio, setDifficultyRatio] = useState(0)

    useEffect(() => {
        switch (level) {
            case 'easy':
                setDifficultyRatio(0.5)
                break

            case 'medium':
                setDifficultyRatio(0.7)
                break

            case 'hard':
                setDifficultyRatio(0.87)
                break

            default:
                break
        }
    }, [level])

    useEffect(() => {
        console.log(choices)
    }, [choices])

    return (
        <GameContext.Provider value={{ choices, setChoices, level, levels, setLevel, scores, setScores, isGaming, setIsGaming, difficultyRatio }}>
            {props.children}
        </GameContext.Provider>
    )
}

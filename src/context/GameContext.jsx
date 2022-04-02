import React, { createContext, useState, useEffect } from 'react'

export const GameContext = createContext()

export function GameContextProvider(props) {
    const levels = ['easy', 'medium', 'hard']
    const items = ['rock', 'paper', 'scissor']
    const [hasChosen, setHasChosen] = useState(false)
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
        if (hasChosen) {
            let randomToCheckPlayerChoice = Math.random()
            if (randomToCheckPlayerChoice >= difficultyRatio) {
                switch (choices.player) {
                    case 'rock':
                        setChoices({ ...choices, opponent: 'paper' })
                        break
                    case 'paper':
                        setChoices({ ...choices, opponent: 'scissor' })
                        break
                    case 'scissor':
                        setChoices({ ...choices, opponent: 'rock' })
                        break

                    default:
                        break
                }
            } else {
                setChoices({ ...choices, opponent: items[Math.round(Math.random() * (items.length - 1))] })
            }
        }
    }, [hasChosen])

    useEffect(() => {
        if (!Object.values(choices).includes(null) && !(choices.opponent == choices.player)) {
            if (
                (choices.player == 'paper' && choices.opponent == 'rock') ||
                (choices.player == 'scissor' && choices.opponent == 'paper') ||
                (choices.player == 'rock' && choices.opponent == 'scissor')
            ) {
                setScores({ ...scores, player: scores.player + 1 })
            } else {
                setScores({ ...scores, opponent: scores.opponent + 1 })
            }
        }

        setTimeout(() => {
            setChoices({ player: null, opponent: null })
            setHasChosen(false)
        }, 5000)
    }, [choices])

    useEffect(() => {
        if (scores.player == 5 || scores.opponent == 5) {
            setHasChosen(true)
            setTimeout(() => {
                setIsGaming(false)
                setChoices({ player: null, opponent: null })
                setScores({ player: 0, opponent: 0 })
            }, 3000)
        }
    }, [scores])

    return (
        <GameContext.Provider
            value={{
                choices,
                setChoices,
                level,
                levels,
                setLevel,
                scores,
                setScores,
                isGaming,
                setIsGaming,
                difficultyRatio,
                hasChosen,
                setHasChosen,
            }}>
            {props.children}
        </GameContext.Provider>
    )
}

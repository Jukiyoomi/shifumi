import React, { useEffect, useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const Update = () => {
    const {
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
    } = useContext(GameContext)

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
        }, 7000)
    }, [choices])

    useEffect(() => {
        if (scores.player == 5 || scores.opponent == 5) {
            setHasChosen(true)
            setChoices({ player: null, opponent: null })
            setTimeout(() => {
                setIsGaming(false)
                setScores({ player: 0, opponent: 0 })
            }, 5000)
        }
    }, [scores])

    return <></>
}

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
        setWinner,
        maxPointsToWin,
    } = useContext(GameContext)

    useEffect(() => {
        switch (level) {
            case 'easy':
                setDifficultyRatio(0.45)
                break

            case 'medium':
                setDifficultyRatio(0.67)
                break

            case 'hard':
                setDifficultyRatio(0.95)
                break

            default:
                break
        }
    }, [level])

    useEffect(() => {
        if (hasChosen) {
            let randomToCheckPlayerChoice = Math.random()
            if (randomToCheckPlayerChoice <= difficultyRatio) {
                switch (choices.player) {
                    case 'rock':
                        setChoices({ ...choices, opponent: 'paper' })
                        console.log('paper')
                        break
                    case 'paper':
                        setChoices({ ...choices, opponent: 'scissor' })
                        console.log('scissor')
                        break
                    case 'scissor':
                        setChoices({ ...choices, opponent: 'rock' })
                        console.log('rock')
                        break

                    default:
                        break
                }
            } else {
                console.log('Random')
                setChoices({ ...choices, opponent: items[Math.round(Math.random() * (items.length - 1))] })
            }
        }
    }, [hasChosen])

    useEffect(() => {
        console.log(isGaming, !Object.values(choices).includes(null), !(choices.opponent == choices.player), choices)
        if (isGaming && !Object.values(choices).includes(null) && !(choices.opponent == choices.player)) {
            if (
                (choices.player == 'paper' && choices.opponent == 'rock') ||
                (choices.player == 'scissor' && choices.opponent == 'paper') ||
                (choices.player == 'rock' && choices.opponent == 'scissor')
            ) {
                setScores({ ...scores, player: scores.player + 1 })
                console.log('Player +1')
            } else {
                setScores({ ...scores, opponent: scores.opponent + 1 })
                console.log('Opponent +1')
            }
        }
        if (hasChosen && !Object.values(choices).includes(null)) {
            setTimeout(() => {
                setChoices({ player: null, opponent: null })
                setHasChosen(false)
            }, 3000)
        }
    }, [choices])

    useEffect(() => {
        if (scores.player == maxPointsToWin || scores.opponent == maxPointsToWin) {
            scores.player == maxPointsToWin ? setWinner('You') : setWinner('IA')
            setTimeout(() => {
                setIsGaming(false)
                setScores({ player: 0, opponent: 0 })
                setWinner(null)
            }, 3000)
        }
    }, [scores])

    return <></>
}

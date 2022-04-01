import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const GameBox = () => {
    const { difficultyRatio } = useContext(GameContext)
    return (
        <>
            <div>GameBox</div>
            {difficultyRatio}
        </>
    )
}

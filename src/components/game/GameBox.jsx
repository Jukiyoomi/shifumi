import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { Player } from './players/Player'
import separator from '../../public/separator.svg'

export const GameBox = () => {
    const { scores } = useContext(GameContext)
    return (
        <div className="flex box-container mx-auto justify-between mt-5">
            <Player name="You" cas="player" relatedScore={scores.player} />
            <img src={separator} alt="" />
            <Player name="IA" relatedScore={scores.opponent} />
        </div>
    )
}

import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { Player } from './players/Player'
import separator from '../../public/separator.svg'

export const GameBox = () => {
    const { scores, hasChosen, choices } = useContext(GameContext)
    return (
        <div className="flex box-container mx-auto justify-between mt-5">
            <Player name="You" cas="player" relatedPlayer={'player'} disabled={hasChosen ? true : false} />
            <img src={separator} alt="separator" className="h-1/2" />
            <Player name="IA" relatedPlayer={'opponent'} disabled={true} />
        </div>
    )
}

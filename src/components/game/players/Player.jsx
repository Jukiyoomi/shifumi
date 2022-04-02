import React, { useContext } from 'react'
import rock from '../../../public/rock.svg'
import rockHover from '../../../public/rock-hover.svg'
import paper from '../../../public/paper.svg'
import paperHover from '../../../public/paper-hover.svg'
import scissor from '../../../public/scissor.svg'
import scissorHover from '../../../public/scissor-hover.svg'
import { Bubbles } from '../../bubbles'
import { GameContext } from '../../../context/GameContext'

export const Player = ({ name, cas, relatedPlayer }) => {
    const { scores } = useContext(GameContext)
    return (
        <div className={`flex box items-center justify-around ${cas != 'player' ? 'flex-row-reverse' : ''}`}>
            <h1 className="text-6xl">{name}</h1>
            <div className="flex justify-center items-center flex-col">
                <p className="text-2xl">{scores[relatedPlayer]}</p>
                <div>
                    <Bubbles source={[rock, rockHover]} alt={'rock'} relatedPlayer={relatedPlayer} />
                    <Bubbles source={[paper, paperHover]} alt={'paper'} relatedPlayer={relatedPlayer} />
                    <Bubbles source={[scissor, scissorHover]} alt={'scissor'} relatedPlayer={relatedPlayer} />
                </div>
            </div>
        </div>
    )
}

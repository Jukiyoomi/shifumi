import React, { useEffect, useContext } from 'react'
import { GameContext } from '../../context/GameContext'
import { Level } from './level/Level'

export const LevelBox = () => {
    const { levels, level } = useContext(GameContext)

    return (
        <div className="flex w-fit mx-auto items-center">
            <p className="mr-3">Levels : </p>
            <div className="flex">
                {levels.map((level) => (
                    <Level key={levels.indexOf(level)} rank={levels.indexOf(level)} />
                ))}
            </div>
        </div>
    )
}

import React, { useEffect, useContext } from 'react'
import { GameContext } from '../../../context/GameContext'

export const Level = ({ rank }) => {
    const { levels, level, setLevel, setIsGaming } = useContext(GameContext)

    const ChangeLevel = () => {
        setLevel(levels[rank])
        // setIsGaming(true)
    }

    return (
        <div className="text-center mx-2">
            <div className="rounded-full bg-white w-7 h-7 cursor-pointer level relative border-4" onClick={ChangeLevel}></div>
            <p>{levels[rank] == 'medium' ? 'med.' : levels[rank]}</p>
        </div>
    )
}

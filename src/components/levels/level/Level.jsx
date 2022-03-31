import React, { useEffect, useContext } from 'react'
import { GameContext } from '../../../context/GameContext'

export const Level = ({ rank }) => {
    const { levels, level, setLevel } = useContext(GameContext)

    const ChangeLevel = () => {
        if (level == levels[rank]) return
        setLevel(levels[rank])
    }

    return <div className="rounded-full bg-white w-7 h-7 mx-1.5 cursor-pointer level relative border-4" onClick={ChangeLevel}></div>
}

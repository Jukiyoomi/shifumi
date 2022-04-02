import { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { GameBox } from './game/GameBox'
import { LevelBox } from './levels/LevelBox'

function App() {
    const { isGaming } = useContext(GameContext)
    return (
        <div className="py-10">
            <h1 className="text-center font-bold text-2xl uppercase logo mb-8">Shifumi</h1>
            {!isGaming && <LevelBox />}
            {isGaming && <GameBox />}
            {/* <LevelBox />
            <GameBox /> */}
        </div>
    )
}

export default App

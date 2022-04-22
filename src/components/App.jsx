import { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import { GameBox } from './game/GameBox'
import { LevelBox } from './levels/LevelBox'
import { Update } from './updater/Update'

function App() {
    const { isGaming, choices, setIsGaming, setScores, winner } = useContext(GameContext)

    const reset = () => {
        setIsGaming(false)
        setScores({ player: 0, opponent: 0 })
    }
    return (
        <div className="py-10 flex flex-col items-center">
            <h1 className="text-center font-bold text-2xl uppercase logo mb-3">Shifumi</h1>
            <LevelBox />
            <h1 className={`text-3xl ${winner ? '' : ' opacity-0'}`}>{winner} Won !</h1>
            {isGaming && <GameBox />}
            {/* {choices.player == 5 || (choices.opponent == 5 && <button>Rejouer</button>)} */}
            <Update />
        </div>
    )
}

export default App

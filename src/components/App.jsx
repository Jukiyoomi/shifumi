import { useState, useContext, useEffect } from 'react'
import { GameContext } from '../context/GameContext'
import { GameBox } from './game/GameBox'
import GameStart from './GameStart'
import { LevelBox } from './levels/LevelBox'
import { Update } from './updater/Update'

function App() {
    const { isGaming, choices, setIsGaming, setScores, winner } = useContext(GameContext)
    const [startScreen, setStartScreen] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartScreen(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const reset = () => {
        setIsGaming(false)
        setScores({ player: 0, opponent: 0 })
    }
    return (
        <div className="py-10 flex flex-col items-center">
            {startScreen ? (
                <GameStart />
            ) : (
                <>
                    <LevelBox />
                    <h1 className={`text-3xl ${winner ? '' : ' opacity-0'}`}>{winner} Won !</h1>
                    {isGaming && <GameBox />}
                </>
            )}
            <Update />
        </div>
    )
}

export default App

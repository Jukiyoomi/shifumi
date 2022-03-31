import { useState } from 'react'
import { LevelBox } from './levels/LevelBox'

function App() {
    return (
        <div className="py-10">
            <h1 className="text-center font-bold text-2xl uppercase logo mb-8">Shifumi</h1>
            <LevelBox />
        </div>
    )
}

export default App

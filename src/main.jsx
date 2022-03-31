import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './components/App'
import { GameContextProvider } from './context/GameContext'

ReactDOM.render(
    <React.StrictMode>
        <GameContextProvider>
            <App />
        </GameContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

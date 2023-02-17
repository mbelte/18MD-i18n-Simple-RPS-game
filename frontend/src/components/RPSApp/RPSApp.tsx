import { Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HomePage from '../pages/Home'
import GamePage from '../pages/Game/Game'
import ScoreBoardPage from '../pages/ScoreBoard/ScoreBoard'
import NotFoundPage from '../pages/NotFound'

export const RPSApp = () => {
  return (
    <>
      <Navbar />
      <div className="content">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="game" element={<GamePage />} />
              <Route path="scoreboard" element={<ScoreBoardPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </div>
    </>
  )
}

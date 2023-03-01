import './index.css'

const NavBar = props => {
  const {gameScore} = props
  return (
    <div className="Header">
      <div>
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="score-board-container">
        <p>Score</p>
        <p className="score">{gameScore}</p>
      </div>
    </div>
  )
}
export default NavBar

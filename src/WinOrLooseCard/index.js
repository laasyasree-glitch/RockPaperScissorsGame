import './index.css'

const WinOrLooseCard = props => {
  const {playerWeapon, opponentWeapon, status, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div>
      <div className="cont-2">
        <div className="container-3">
          <h1 className="status">YOU</h1>
          <img
            src={playerWeapon.imageUrl}
            alt="your choice"
            className="game-img"
          />
        </div>
        <div className="container-3 ">
          <h1 className="status">OPPONENT</h1>
          <img
            src={opponentWeapon.imageUrl}
            alt="opponent choice"
            className="game-img"
          />
        </div>
      </div>

      <div className="status-cont">
        <p className="status">{status}</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="trigger-button "
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default WinOrLooseCard

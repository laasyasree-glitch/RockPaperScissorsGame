import './index.css'

const WinOrLooseCard = props => {
  const {playerWeapon, opponentWeapon, status, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div>
      <h1>YOU</h1>
      <img src={playerWeapon.imageUrl} alt="your choice" className="img" />
      <h1>OPPONENT</h1>
      <img
        src={opponentWeapon.imageUrl}
        alt="opponent choice"
        className="img"
      />
      <p>{status}</p>
      <button type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default WinOrLooseCard

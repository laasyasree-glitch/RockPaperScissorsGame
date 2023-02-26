import './index.css'

const WinOrLooseCard = props => {
  const {playerWeapon, opponentWeapon, status, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div>
      <img src={playerWeapon.imageUrl} alt="player" className="img" />
      <img src={opponentWeapon.imageUrl} alt="opponent" className="img" />
      <p>{status}</p>
      <button type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default WinOrLooseCard

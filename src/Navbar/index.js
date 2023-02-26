const NavBar = props => {
  const {gameScore} = props
  console.log(gameScore)
  return (
    <div>
      <div>
        <h1>Rock Paper Scissors</h1>
      </div>
      <div>
        <p>Score</p>
        <p>{gameScore}</p>
      </div>
    </div>
  )
}
export default NavBar

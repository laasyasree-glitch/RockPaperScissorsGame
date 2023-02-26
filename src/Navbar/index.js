const NavBar = props => {
  const {gameScore} = props
  console.log(gameScore)
  return (
    <div>
      <div>
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div>
        <h1>Score</h1>
        <p>{gameScore}</p>
      </div>
    </div>
  )
}
export default NavBar

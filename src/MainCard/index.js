import {Component} from 'react'
import ReactPopup from '../ReactPopup'
import NavBar from '../Navbar'
import ImageItem from '../ImageItem'
import WinOrLooseCard from '../WinOrLooseCard'
import './index.css'

class MainCard extends Component {
  state = {
    isGameInProgress: true,
    score: 0,
    playerWeapon: '',
    opponentWeapon: '',
    status: '',
  }

  updateOpponent = () => {
    const {playerWeapon, opponentWeapon} = this.state

    const playerId = playerWeapon.id
    const opponentId = opponentWeapon.id
    let status = ''

    if (playerId === opponentId) status = 'IT IS DRAW'
    else if (playerId !== opponentId) {
      if (playerId === 'ROCK') {
        if (opponentId === 'PAPER') {
          status = 'YOU LOSE'
        } else {
          status = 'YOU WON'
        }
      } else if (playerId === 'PAPER') {
        if (opponentId === 'ROCK') {
          status = 'YOU WON'
        } else {
          status = 'YOU LOSE'
        }
      } else if (playerId === 'SCISSORS') {
        if (opponentId === 'PAPER') {
          status = 'YOU WON'
        } else {
          status = 'YOU LOSE'
        }
      }
    }
    console.log(status, playerId, opponentId)
    if (status === 'YOU WON') {
      this.setState(ps => ({score: ps.score + 1}))
    } else if (status === 'YOU LOSE') {
      this.setState(ps => ({score: ps.score - 1}))
    }
    this.setState({status})
    this.setState({isGameInProgress: false})
  }

  clickWeapon = details => {
    const {choicesList} = this.props
    const opponentWeapon1 =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    this.setState(
      {
        playerWeapon: details,
        opponentWeapon: opponentWeapon1,
      },
      this.updateOpponent,
    )
  }

  playAgain = () => {
    this.setState({isGameInProgress: true})
  }

  renderGameCard = () => {
    const {playerWeapon, opponentWeapon, status} = this.state
    return (
      <div className="card">
        <WinOrLooseCard
          playerWeapon={playerWeapon}
          opponentWeapon={opponentWeapon}
          status={status}
          playAgain={this.playAgain}
        />
      </div>
    )
  }

  renderChooseList = () => {
    const {choicesList} = this.props
    return (
      <div className="choose-container">
        {choicesList.map(eachItem => (
          <ImageItem
            details={eachItem}
            key={eachItem.id}
            clickWeapon={this.clickWeapon}
          />
        ))}
      </div>
    )
  }

  render() {
    const {isGameInProgress, score} = this.state
    return (
      <div className="main-container">
        <ReactPopup />
        <NavBar gameScore={score} />

        {isGameInProgress ? this.renderChooseList() : this.renderGameCard()}
      </div>
    )
  }
}

export default MainCard

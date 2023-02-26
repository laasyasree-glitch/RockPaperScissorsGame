import {Component} from 'react'
import ReactPopup from '../ReactPopup'
import NavBar from '../Navbar'
import ImageItem from '../ImageItem'
import WinOrLooseCard from '../WinOrLooseCard'
import {Container, MainContainer} from './styledComponent'

class MainCard extends Component {
  state = {
    isGameInProgress: true,
    score: 0,
    playerWeapon: '',
  }

  clickWeapon = details => {
    this.setState({isGameInProgress: false, playerWeapon: details})
  }

  playAgain = () => {
    this.setState({isGameInProgress: true})
  }

  renderGameCard = () => {
    const {choicesList} = this.props
    const opponentWeapon = choicesList[Math.floor(Math.random() * 2)]

    const {playerWeapon} = this.state

    const playerId = playerWeapon.id
    const opponentId = opponentWeapon.id
    let status = ''

    if (playerId === opponentId) status = 'Draw'
    else if (playerId !== opponentId) {
      if (playerId === 'ROCK') {
        if (opponentId === 'PAPER') {
          status = 'You Loose'
        } else {
          status = 'You Won'
        }
      } else if (playerId === 'PAPER') {
        if (opponentId === 'ROCK') {
          status = 'You Won'
        } else {
          status = 'You Loose'
        }
      } else if (playerId === 'SCISSORS') {
        if (opponentWeapon === 'PAPER') {
          status = 'You Won'
        } else {
          status = 'You Loose'
        }
      }
    }

    return (
      <WinOrLooseCard
        playerWeapon={playerWeapon}
        opponentWeapon={opponentWeapon}
        status={status}
        playAgain={this.playAgain}
      />
    )
  }

  renderChooseList = () => {
    const {choicesList} = this.props
    return (
      <Container>
        {choicesList.map(eachItem => (
          <ImageItem
            details={eachItem}
            key={eachItem.id}
            clickWeapon={this.clickWeapon}
          />
        ))}
      </Container>
    )
  }

  render() {
    const {isGameInProgress, score} = this.state
    return (
      <MainContainer>
        <NavBar gameScore={score} />
        {isGameInProgress ? this.renderChooseList() : this.renderGameCard()}
        <ReactPopup />
      </MainContainer>
    )
  }
}

export default MainCard

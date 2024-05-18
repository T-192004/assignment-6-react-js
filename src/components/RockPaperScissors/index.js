import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ChoiceItem from '../ChoiceItem'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
class RockPaperScissors extends Component {
  state = {
    score: 0,
    isPlayGame: true,
    yourChoice: '',
    opponentChoice: '',
    result: '',
  }

  clickYourChoice = id => {
    const yourChoice = id
    const a = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[a].id
    console.log(`${yourChoice} ,${opponentChoice}`)

    let result = ''
    if (yourChoice === opponentChoice) {
      result = 'IT IS DRAW'
    } else if (
      (yourChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (yourChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (yourChoice === 'PAPER' && opponentChoice === 'ROCK')
    ) {
      result = 'YOU WON'
    } else {
      result = 'YOU LOSE'
    }
    if (result === 'YOU WON') {
      this.setState(prev => ({score: prev.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prev => ({score: prev.score - 1}))
    }
    this.setState({
      yourChoice,
      opponentChoice,
      isPlayGame: false,
      result,
    })
  }

  renderPlayGame = () => (
    <div className="game-choice-container">
      {choicesList.map(choice => (
        <ChoiceItem
          choice={choice}
          key={choice.id}
          clickYourChoice={this.clickYourChoice}
        />
      ))}
    </div>
  )

  playAgain = () => {
    this.setState({isPlayGame: true})
  }

  renderGameResults = () => {
    const {yourChoice, opponentChoice, result} = this.state
    const yourChoiceArray = choicesList.filter(
      choice => choice.id === yourChoice,
    )
    const opponentChoiceArray = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    return (
      <div className="game-result-container">
        <div className="game-result-choice">
          <div className="game-result-player">
            <h1 className="game-result">You</h1>
            <img
              className="game-result-img"
              alt="your choice"
              src={yourChoiceArray[0].imageUrl}
            />
          </div>
          <div className="game-result-player">
            <h1 className="game-result">Opponent</h1>
            <img
              className="game-result-img"
              alt="opponent choice"
              src={opponentChoiceArray[0].imageUrl}
            />
          </div>
        </div>
        <p className="game-result">{result}</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={this.playAgain}
        >
          Play Again
        </button>
      </div>
    )
  }

  render() {
    const {score, isPlayGame} = this.state

    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="main-heaing">
            Rock
            <br /> Paper <br /> Scissors
          </h1>
          <div className="score-container">
            <p className="score-title">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="choices-list-container">
            {isPlayGame ? this.renderPlayGame() : this.renderGameResults()}
          </div>
          <Popup
            modal
            trigger={
              <button type="button" className="rule-btn">
                Rules
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <img
                    className="rules-img"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default RockPaperScissors

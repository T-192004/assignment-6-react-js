import './index.css'

const ChoiceItem = props => {
  const {choice, clickYourChoice} = props
  const {imageUrl, id} = choice
  const onClickChoiceItem = () => {
    clickYourChoice(id)
  }
  let testId = ''
  if (id === 'ROCK') {
    testId = 'rockButton'
  } else if (id === 'SCISSORS') {
    testId = 'scissorsButton'
  } else if (id === 'PAPER') {
    testId = 'paperButton'
  }
  return (
    <button
      className="choice-item-btn"
      type="button"
      onClick={onClickChoiceItem}
      data-testid={testId}
    >
      <img className="choice-item-icon" src={imageUrl} alt={id} />
    </button>
  )
}

export default ChoiceItem

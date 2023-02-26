const ImageItem = props => {
  const {details, clickWeapon} = props
  const {id, imageUrl} = details

  const onClickEmojiCard = () => {
    clickWeapon(details)
  }

  let compiler

  if (id === 'ROCK') {
    compiler = 'rockButton'
  } else if (id === 'PAPER') {
    compiler = 'paperButton'
  } else if (id === 'SCISSORS') {
    compiler = 'scissorsButton'
  }

  return (
    <li className="card">
      <button type="button" onClick={onClickEmojiCard}>
        <img src={imageUrl} alt={id} data-testid={compiler} />
      </button>
    </li>
  )
}

export default ImageItem

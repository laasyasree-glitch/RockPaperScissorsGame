const ImageItem = props => {
  const {details, clickWeapon} = props
  const {id, imageUrl} = details

  const onClickEmojiCard = () => {
    clickWeapon(details)
  }

  return (
    <li className="card">
      <button type="button" onClick={onClickEmojiCard}>
        <img src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default ImageItem

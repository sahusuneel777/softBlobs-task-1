import './index.css'

const ContactItem = props => {
  const {contactDetails, toggleIsFavorite, openPopUp, deleteTicket} = props
  const {
    slNo,
    ticketId,
    description,
    owner,
    createdDate,
    closedDate,
    isFavorite,
  } = contactDetails

  const onclickEdit = () => {
    openPopUp()
  }
  const onClickDelete = () => {
    deleteTicket(slNo)
  }
  const onclickFavorite = () => {
    toggleIsFavorite(slNo)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{ticketId}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p className="mobile-no-value">{description}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p className="mobile-no-value">{owner}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p className="mobile-no-value">{createdDate}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p className="mobile-no-value">{closedDate}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <button
          type="button"
          onClick={onclickFavorite}
          className="favorite-button"
        >
          <img src={starImgUrl} className="favorite-icon" alt="favorite" />
        </button>
        <button type="button" onClick={onclickEdit} className="edit-button">
          Edit
        </button>
        <button type="button" className="delete-button">
          <img
            src="
https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
            onClick={onClickDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default ContactItem

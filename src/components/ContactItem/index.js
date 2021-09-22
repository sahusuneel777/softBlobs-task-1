import './index.css'

const ContactItem = props => {
  const {contactDetails} = props
  const {ticketId, description, owner, createdDate, closedDate} = contactDetails

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
    </li>
  )
}

export default ContactItem

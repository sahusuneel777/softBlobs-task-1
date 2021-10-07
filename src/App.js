import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup'
// import ReactPopUp from './components/Popup'
import ContactItem from './components/ContactItem'

import 'reactjs-popup/dist/index.css'

import './App.css'

const initialContactsList = []

class App extends Component {
  state = {
    contactsList: initialContactsList,
    ticketId: '',
    description: '',
    owner: '',
    createdDate: '',
    closedDate: '',
    errorMsg: '',
    isFormSubmitted: false,
    showTicketError: false,
    showDescriptionError: false,

    showOwnerError: false,
  }

  onAddContact = event => {
    event.preventDefault()
    const {ticketId, description, owner, createdDate, closedDate} = this.state

    if (ticketId === '') {
      this.setState({errorMsg: 'required*'})
    }
    if (description === '') {
      this.setState({errorMsg: 'required*'})
    }
    if (owner === '') {
      this.setState({errorMsg: 'required*'})
    }
    if (createdDate === '') {
      this.setState({errorMsg: 'required*'})
    }
    if (closedDate === '') {
      this.setState({errorMsg: 'required*'})
    }

    const newTicket = {
      slNo: uuidv4(),
      ticketId,
      description,
      owner,
      createdDate,
      closedDate,
      isFavorite: false,
    }

    if (
      ticketId !== '' &&
      description !== '' &&
      owner !== '' &&
      createdDate !== '' &&
      closedDate !== ''
    ) {
      this.setState(prevState => ({
        contactsList: [...prevState.contactsList, newTicket],
        isFormSubmitted: true,
      }))
    } else {
      this.setState({
        showTicketError: true,
        showDescriptionError: true,
        showOwnerError: true,
        showCreatedDateError: true,
      })
    }
  }

  toggleIsFavorite = slNo => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (slNo === eachContact.slNo) {
          // eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  onChangeTicketId = event => {
    this.setState({ticketId: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onChangeCreatedDate = event => {
    this.setState({createdDate: event.target.value})
  }

  onChangeClosedDate = event => {
    this.setState({closedDate: event.target.value})
  }

  onChangeOwner = event => {
    this.setState({owner: event.target.value})
  }

  deleteTicket = slNo => {
    const {contactsList} = this.state
    const filteredcontactsList = contactsList.filter(
      eachContact => eachContact.slNo !== slNo,
    )
    this.setState({contactsList: filteredcontactsList})
  }

  //   openPopUp = () => {
  //     ;<Popup />
  //   }

  renderRegistrationForm = () => {
    const {
      contactsList,
      ticketId,
      description,
      owner,
      createdDate,
      closedDate,
      errorMsg,
      isFormSubmitted,
      showTicketError,
      showOwnerError,
      showDescriptionError,
      showCreatedDateError,
    } = this.state

    return (
      <form className="contact-form-container" onSubmit={this.onAddContact}>
        <label htmlFor="ticket" className="label">
          TicketId
        </label>
        <input
          value={ticketId}
          onChange={this.onChangeTicketId}
          className="input"
          placeholder="ticketId"
          id="ticket"
        />
        {showTicketError && <p className="error">{errorMsg}</p>}
        <label htmlFor="description" className="label">
          description
        </label>
        <input
          className="input"
          value={description}
          onChange={this.onChangeDescription}
          placeholder="description"
          id="description"
        />
        {showDescriptionError && <p className="error">{errorMsg}</p>}
        <label htmlFor="owner" className="label">
          owner
        </label>
        <input
          className="input"
          value={owner}
          onChange={this.onChangeOwner}
          placeholder="owner"
          id="owner"
        />
        {showOwnerError && <p className="error">{errorMsg}</p>}
        <label htmlFor="createDate" className="label">
          createdDate
        </label>
        <input
          type="date"
          className="input"
          value={createdDate}
          onChange={this.onChangeCreatedDate}
          placeholder="createdDate"
          id="createDate"
        />
        {showCreatedDateError && <p className="error">{errorMsg}</p>}
        <label htmlFor="closeDate" className="label">
          closedDate
        </label>
        <input
          type="date"
          className="input"
          value={closedDate}
          onChange={this.onChangeClosedDate}
          placeholder="ClosedDate"
          id="closeDate"
        />
        <p className="error">{errorMsg}</p>

        <button type="submit" className="button">
          Add
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      ticketId: '',
      description: '',
      owner: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <div className="submitAnother-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {contactsList, isFormSubmitted} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="main-heading">MicroKnots</h1>
          <h1 className="heading">Tickets</h1>

          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">ticket</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">description</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">owner</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">createdDate</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">ClosedDate</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Actions</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                changeFavorite={this.changeFavorite}
                contactDetails={eachContact}
                deleteTicket={this.deleteTicket}
                openPopUp={this.openPopUp}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>

          <div className="popup-container pop-up">
            <Popup
              modal
              trigger={
                <button type="button" className="button">
                  Add Ticket
                </button>
              }
            >
              {close => (
                <div>
                  {isFormSubmitted
                    ? this.renderSubmissionSuccessView()
                    : this.renderRegistrationForm()}

                  <button
                    type="button"
                    className="trigger-button pop-up-btn button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}

export default App

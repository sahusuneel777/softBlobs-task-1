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
  }

  onAddContact = event => {
    event.preventDefault()
    const {ticketId, description, owner, createdDate, closedDate} = this.state

    const newTicket = {
      slNo: uuidv4(),
      ticketId,
      description,
      owner,
      createdDate,
      closedDate,
      isFavorite: false,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newTicket],
    }))
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

  openPopUp = () => {
    ;<Popup />
  }

  render() {
    const {
      contactsList,
      ticketId,
      description,
      owner,
      createdDate,
      closedDate,
    } = this.state

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

          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="button">
                  add Ticket
                </button>
              }
            >
              {close => (
                <>
                  <div>
                    <form
                      className="contact-form-container"
                      onSubmit={this.onAddContact}
                    >
                      <input
                        value={ticketId}
                        onChange={this.onChangeTicketId}
                        className="input"
                        placeholder="ticketId"
                      />
                      <input
                        className="input"
                        value={description}
                        onChange={this.onChangeDescription}
                        placeholder="description"
                      />
                      <input
                        className="input"
                        value={owner}
                        onChange={this.onChangeOwner}
                        placeholder="owner"
                      />
                      <input
                        type="date"
                        className="input"
                        value={createdDate}
                        onChange={this.onChangeCreatedDate}
                        placeholder="createdDate"
                      />
                      <input
                        type="date"
                        className="input"
                        value={closedDate}
                        onChange={this.onChangeClosedDate}
                        placeholder="ClosedDate"
                      />

                      <button type="submit" className="button">
                        Add
                      </button>
                    </form>
                  </div>
                  <button
                    type="button"
                    className="trigger-button pop-up-btn"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </>
              )}
            </Popup>
          </div>
        </div>
      </div>
    )
  }
}

export default App

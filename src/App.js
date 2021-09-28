import {Component} from 'react'
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

  // const [, ] = useState(false)

  onAddContact = event => {
    event.preventDefault()
    const {ticketId, description, owner, createdDate, closedDate} = this.state

    const newTicket = {
      slNo: initialContactsList.length + 1,
      ticketId,
      description,
      owner,
      createdDate,
      closedDate,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newTicket],
      ticketId: '',
      description: '',
      owner: '',
    }))
  }

  /* changeFavorite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (id === eachContact.id) {
          // eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  } */

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
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                changeFavorite={this.changeFavorite}
                contactDetails={eachContact}
              />
            ))}
          </ul>

          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="button">
                  add
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
                        Add Ticket
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

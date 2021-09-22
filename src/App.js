import {Component} from 'react'
import Popup from './components'
import ContactItem from './components/ContactItem'

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

    const {openPopup,setOpenPopup} = useState(false)

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
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
          <button className="button" onClick= {()=>setOpenPopup(true)} type="button">
            Add
          </button>
        </div>
      </div>

      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>

      </Popup>

    )
  }
}

export default App

// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', starred: false}

  addAppointment = () => {
    const {title, date} = this.state
    if (title && date !== '') {
      const appoint = {id: uuidv4(), title, date, isStarred: false}
      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, appoint],
      }))
      this.setState({title: '', date: ''})
    }
  }

  starredAppoint = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  starredAppointments = () => {
    const {appointmentsList, starred} = this.state
    if (starred === false) {
      const appointments = appointmentsList.filter(
        each => each.isStarred === true,
      )

      this.setState({appointmentsList: appointments, starred: true})
    } else {
      const appointments = appointmentsList.filter(
        each => each.isStarred === true || each.isStarred === false,
      )

      this.setState({appointmentsList: appointments, starred: false})
    }
    // const appointments = appointmentsList.filter(
    //   each => each.isStarred === true,
    // )

    // this.setState({appointmentsList: appointments})
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="appointment-container">
            <div>
              <h1>Add Appointment</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="Title"
                className="input"
                value={title}
                onChange={this.onTitle}
              />
              <br />
              <label htmlFor="date" className="label">
                DATE
              </label>
              <br />
              <input
                type="date"
                id="date"
                className="input"
                value={date}
                onChange={this.onDate}
              />
              <br />
              <button
                type="button"
                className="btn"
                onClick={this.addAppointment}
              >
                Add
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img"
              />
            </div>
          </div>

          <hr />
          <div className="ap">
            <h1 className="h2">Appointments</h1>
            <button
              className="starred-btn"
              type="button"
              onClick={this.starredAppointments}
            >
              Starred
            </button>
          </div>
          <ul>
            {appointmentsList.map(each => (
              <AppointmentItem
                key={each.id}
                appDetails={each}
                starredAppoint={this.starredAppoint}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments

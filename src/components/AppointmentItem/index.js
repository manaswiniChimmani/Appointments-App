// Write your code here
import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appDetails, starredAppoint} = props
  const {id, title, date, isStarred} = appDetails

  const clickStar = () => {
    starredAppoint(id)
  }
  const starImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="li">
      <div className="t">
        <p className="title">{title}</p>
        <button
          type="button"
          onClick={clickStar}
          className="star-btn"
          data-testid="star"
        >
          <img src={starImg} alt="star" />
        </button>
      </div>
      <p>Date:{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
    </li>
  )
}
export default AppointmentItem

import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteDetails(id)
  }

  return (
    <li className="list-container">
      <div className="new-div">
        <div className="time-logo">
          <p className="time">{timeAccessed}</p>
          <div className="logo">
            <img className="logo-img" src={logoUrl} alt="domain logo" />
          </div>
        </div>
        <div className="domain-logo">
          <div className="title-url">
            <p className="title">{title}</p>
            <p>{domainUrl}</p>
          </div>
        </div>
      </div>

      <button type="button" className="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItems

// Write your code here
import './index.css'

const TabItem = props => {
  const {eachApp, onClicked, isActive} = props
  const {tabId, displayText} = eachApp
  const addStyle = isActive ? 'present-category' : null

  const onClickedCategory = () => {
    onClicked(tabId)
  }

  return (
    <li className="app-item">
      <button
        type="button"
        onClick={onClickedCategory}
        className={`button ${addStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

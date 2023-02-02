// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="app-content">
      <img src={imageUrl} alt={appName} className="app-img-style" />
      <p className="paragraph">{appName}</p>
    </li>
  )
}

export default AppItem

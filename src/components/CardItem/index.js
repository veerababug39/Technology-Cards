// Write your code here.

import './index.css'

const CardItem = props => {
  const {sourceItems} = props
  const {title, description, imgUrl, className} = sourceItems
  return (
    <div>
      <li className={className}>
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
        <img src={imgUrl} alt={title} className="card-img" />
      </li>
    </div>
  )
}

export default CardItem

import './style.css'

const Card = ({image}) => {
  return (
    <div className="card" >
      <img src={image} alt="game" />
    </div>

  )
}

export default Card;

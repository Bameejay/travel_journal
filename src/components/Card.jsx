



const Card = (props) => {
  return (
    <div className="main--card">
        <img src={props.coverImg} alt="mount fuji_image" />
        <div className="main--text">
            <div className="map--row">
                <span><img src="./src/assets/location_icon.png" alt="map_icon" className="map--icon" /><small>{props.location.country}</small></span>
                <a href="#"><span className="google--map">View on Google Maps</span></a>
            </div>
                <h2>{props.location.city}</h2>
                <p className="card--date">{props.date}</p>
                <p className="last--text">{props.description}</p>
        </div>
    </div>

  )
}

export default Card
import "./Card.css"

export default function Card(props) {
    return(
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card--img-container">
                    <img src={props.img} alt="location"/>
                </div>
                <div className="card--details">
                    <section className="card--location-details">
                        <img src="/img/pin.png" alt="pin"/>
                        <p className="card--location">{props.location}</p>
                        <a href={props.locationLink} className="card--location-link">View on google Maps</a>
                    </section>
                    <h1 className="card--location-name">{props.name}</h1>
                    <p className="card--dates"><b>{props.startDate} - {props.endDate}</b></p>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
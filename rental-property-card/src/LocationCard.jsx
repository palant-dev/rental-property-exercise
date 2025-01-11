import CardScore from "./CardScore"
import "./LocationCard.css"

export default function LocationCard({ locationName , price, score }) {
    return (
        <div className="location-card">
            <h2>{locationName}</h2>
            <h3>${price} a night</h3>
            <CardScore score={score} />
        </div>
    )
}
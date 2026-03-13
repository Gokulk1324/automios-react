import { Link } from "react-router-dom";
import "./Card.css";

function Card({ slug, image, title, description }) {
  return (
    <div className="card">

      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <Link to={`/service/${slug}`}>
          <button>Read More</button>
        </Link>

      </div>
    </div>
  );
}

export default Card;
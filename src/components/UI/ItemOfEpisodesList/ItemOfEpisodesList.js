import { Link } from "react-router-dom";
import './ItemOfEpisodesList.scss'

const ItemOfEpisodesList = (props) => {
    return (
        <Link to={`/episodePage/${props.id}`}>
            <li className="episode">
                <div>
                    <img src={props.image} alt="character" />
                </div>
                <div className="description">
                    <p className="serial-number">seria {props.id}</p>
                    <p className="series-title">{props.name}</p>
                    <p className="release-date">{props.air_date}</p>
                </div>
            </li>
        </Link>
    )
}

export default ItemOfEpisodesList;
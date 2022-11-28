import { Link } from "react-router-dom";
import './ItemOfCharactersList.scss'

const ItemOfCharactersList = (props) => {
    return (
        <Link to={`/character/${props.id}`}>
            <li className="list__item">
                <img src={props.image} alt="character" />
                <div className="description">
                    <p className={props.status === 'Alive' ? 'live' : 'dead'}>{props.status} </p>
                    <p className="name">{props.name}</p>
                    <p className="race">{props.species}, {props.gender}</p>
                </div>
            </li>
        </Link>
    )
}

export default ItemOfCharactersList;
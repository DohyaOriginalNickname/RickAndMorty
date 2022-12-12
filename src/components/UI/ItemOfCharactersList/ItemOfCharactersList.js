import { Link } from "react-router-dom";
import './ItemOfCharactersList.scss'
import arrow2 from '../../../assets/other/Arrow2.png'

const ItemOfCharactersList = (props) => {
    return (
        <Link to={`/character/${props.id}`}>
            <li className={ props.tile ? "item" : "tile__item"}>
                <img src={props.image} alt="character" />
                <div className="description">
                    <p className={props.status === 'Alive' ? 'live' : 'dead'}>{props.status} </p>
                    <p className="name">{props.name.length > 25 ? props.name.slice(0,25) + '...' : props.name}</p>
                    <p className="race">{props.species}, {props.gender}</p>
                </div>
                {
                    props.arrow ?
                        <div>
                            <img src={arrow2} alt="" className='arrow' />
                        </div> : null
                }
            </li>
        </Link>
    )
}

export default ItemOfCharactersList;
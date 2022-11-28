import { Link } from "react-router-dom";
import './ItemOfLocationsList.scss'

const ItemOfLocationsList = (props) => {
    return (
        <Link to={`/location/${props.id}`}>
            <li className='list-locations__item' >
                <img src={props.image} alt="" />
                <div className='item__description'>
                    <p className='title'>{props.name}</p>
                    <div>
                        <p>Мир</p>
                        <p className='dot'></p>
                        <p>{props.dimension}</p>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ItemOfLocationsList;
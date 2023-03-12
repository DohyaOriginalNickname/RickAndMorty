import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from 'components/ThemeContext/themeContext';
import './ItemOfLocationsList.scss'

const ItemOfLocationsList = (props) => {
    const [context, setContext] = useContext(Context)
    return (
        <Link to={`/location/${props.id}`}>
            <li className='list-locations__item' >
                <img src={props.image} alt="" />
                <div className={ context === 'dark' ? 'item__description dark' : 'item__description light'}>
                    <p className='title'>{props.name.length > 25 ? props.name.slice(0,25) + '...' : props.name}</p>
                    <div>
                        <p>{props.type.length > 15 ? props.type.slice(0,15) + '...' : props.type}</p>
                        <p className='dot'></p>
                        <p>{props.dimension}</p>
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ItemOfLocationsList;
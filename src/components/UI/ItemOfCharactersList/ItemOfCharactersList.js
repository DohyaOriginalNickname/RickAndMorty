import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from 'components/ThemeContext/themeContext';
import './ItemOfCharactersList.scss'
import ArrowBlackTheme2 from 'assets/other/blackThemeItems/Arrow2.png'
import ArrowWhiteTheme2 from 'assets/other/whiteThemeItems/Arrow2.png'

const ItemOfCharactersList = (props) => {
    const [context, setContext] = useContext(Context)
    return (
        <Link to={`/character/${props.id}`}>
            <li className={ props.tile !== false ? "item" : "tile__item"}>
                <img src={props.image} alt="character" />
                <div className="description">
                    <p className={props.status === 'Alive' ? 'live' : 'dead'}>{props.status} </p>
                    <p className="name">{props.name.length > 25 ? props.name.slice(0,25) + '...' : props.name}</p>
                    <p className="race">{props.species}, {props.gender}</p>
                </div>
                {
                    props.arrow ?
                        <div>
                            <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" className='arrow' />
                        </div> : null
                }
            </li>
        </Link>
    )
}

export default ItemOfCharactersList;
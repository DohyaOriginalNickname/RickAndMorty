import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from 'components/ThemeContext/themeContext';
import './ItemOfEpisodesList.scss'
import ArrowBlackTheme2 from 'assets/other/blackThemeItems/Arrow2.png'
import ArrowWhiteTheme2 from 'assets/other/whiteThemeItems/Arrow2.png'

const ItemOfEpisodesList = (props) => {
    const [context, setContext] = useContext(Context)
    return (
        <Link to={`/episodePage/${props.id}`}>
            <li className="episode">
                <div>
                    <img src={props.image} alt="character" />
                </div>
                <div className="description">
                    <p className="serial-number">seria {props.id}</p>
                    <p className="series-title">{props.name.length > 25 ? props.name.slice(0,25) + '...' : props.name}</p>
                    <p className="release-date">{props.air_date}</p>
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

export default ItemOfEpisodesList;
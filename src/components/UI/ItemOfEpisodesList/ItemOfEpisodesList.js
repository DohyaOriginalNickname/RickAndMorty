import { Link } from "react-router-dom";
import './ItemOfEpisodesList.scss'
import arrow2 from '../../../assets/other/Arrow2.png'

const ItemOfEpisodesList = (props) => {
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
                            <img src={arrow2} alt="" className='arrow' />
                        </div> : null
                }
            </li>
        </Link>
    )
}

export default ItemOfEpisodesList;
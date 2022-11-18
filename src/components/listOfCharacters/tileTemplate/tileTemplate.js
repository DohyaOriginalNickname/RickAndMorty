import { Link } from 'react-router-dom'
import List from '../../../assets/other/List.png'

import './tileTemplate.scss'

const TileTemplate = (props) => {

    const elements = props.data.results.map((item) => {
        return (
            <Link to={"/Character"} key={item.id}>
                <li className="item">
                    <img src={item.image} alt="character" />
                    <div className="item__description">
                        <p className={item.status === 'Alive' ? 'live':'dead'}>{item.status}</p>
                        <p className="name">{item.name}</p>
                        <p className="race">{item.species}, {item.gender}</p>
                    </div>
                </li>
            </Link>
        )
    })

    return (
        <>
            <div className="count-of-characters_tile">
                <p>Всего персонажей: {props.data.info.count}</p>
                <img src={List} alt="Group"  onClick={() => props.changeList(true)} />
            </div>
            <div className="tile">
                {elements}
            </div>
        </>
    )
}

export default TileTemplate;
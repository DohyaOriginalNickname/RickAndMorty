import { Link } from 'react-router-dom'

import Group from '../../../assets/other/Group.png'
import Rick from '../../../assets/image.png'

import './listTemplate.scss'


const ListTemplate = (props) => {

    const elements = props.arr.map((i,index) => {
        return (
            <Link to={"/Character"}>
                <li className="item" key={index}>
                    <img src={Rick} alt="character" />
                    <div className="item__description">
                        <p className="live">{i.live ? 'Живой': 'Мертвый'}</p>
                        <p className="name">{i.name}</p>
                        <p className="race">{i.raceAndGender}</p>
                    </div>
                </li>
            </Link>
        )
    })

    return (
        <>
            <div className="count-of-characters">
                <p>Всего персонажей:</p>
                <img src={Group} alt="Group" onClick={() => props.bbb(false)}/>
            </div>
            
                <ul className="list">
                    {elements}
                </ul>
            
        </>
    )
}

export default ListTemplate;
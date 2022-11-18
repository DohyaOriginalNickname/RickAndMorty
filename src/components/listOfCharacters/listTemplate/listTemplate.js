import { Link } from 'react-router-dom'
import Group from '../../../assets/other/Group.png'

import './listTemplate.scss'


const ListTemplate = (props) => {
    const elements = props.data.results.map((item) => {
        return (
            <Link to={"/Character"} key={item.id}>
                <li className="item">
                    <img src={item.image} alt="character" />
                    <div className="item__description">
                        <p className={item.status === 'Alive' ? 'live':'dead'}>{item.status} </p>
                        <p className="name">{item.name}</p>
                        <p className="race">{item.species}, {item.gender}</p>
                    </div>
                </li>
            </Link>
        )
    })

    return (
        <>
            <div className="count-of-characters_list">
                <p>Всего персонажей: {props.data.info.count}</p>
                <img src={Group} alt="Group" onClick={() => props.changeList(false)}/>
            </div>
            
                <ul className="list">
                    {elements}
                </ul>
            
        </>
    )
}

export default ListTemplate;
import List from '../../../assets/other/List.png'
import Rick from '../../../assets/image.png'

import './tileTemplate.scss'

const TileTemplate = (props) => {

    const elements = props.arr.map((i,index) => {
        return (
            <li className="item" key={index}>
                <img src={Rick} alt="character" />
                <div className="item__description">
                    <p className="live">{i.live ? 'Живой': 'Мертвый'}</p>
                    <p className="name">{i.name}</p>
                    <p className="race">{i.raceAndGender}</p>
                </div>
            </li>
        )
    })

    return (
        <>
            <div className="count-of-characters">
                <p>Всего персонажей:</p>
                <img src={List} alt="Group"  onClick={() => props.bbb(true)} />
            </div>
            <div className="tile">
                {elements}
            </div>
        </>
    )
}

export default TileTemplate;
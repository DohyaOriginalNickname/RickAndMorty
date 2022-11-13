import { Link } from 'react-router-dom'
import './listOfLocations.scss'

import Search from '../../assets/other/Search.png'
import Filter from '../../assets/other/Filter.png'

import image from '../../assets/image2.png'

import characterIcon from '../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../assets/navigation/activeIcons/ActiveLocationIcon.png'
import episodeIcon from '../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'

const ListOfLocations = () => {

    const array = [
        { img: image, titleLocation: 'Земля C-137', dimension: 'Измерение С-137' },
        { img: image, titleLocation: 'Земля C-137', dimension: 'Измерение С-137' },
        { img: image, titleLocation: 'Земля C-137', dimension: 'Измерение С-137' },
        { img: image, titleLocation: 'Земля C-137', dimension: 'Измерение С-137' },
        { img: image, titleLocation: 'Земля C-137', dimension: 'Измерение С-137' },
    ]

    const elements = array.map((item, index) => {
        return (
            <Link to={'/location'} key={index}>
                <li className='list-locations__item' >
                    <img src={item.img} alt="" />
                    <div className='item__description'>
                        <p className='title'>{item.titleLocation}</p>
                        <div>
                            <p>Мир</p>
                            <p className='dot'></p>
                            <p>{item.dimension}</p>
                        </div>
                    </div>
                </li>
            </Link>
        )
    })

    return (
        <div className='locations-page'>
            <div className="characters-page__search">
                <div>
                    <img src={Search} alt="search" />
                </div>
                <div>
                    <input type="text" placeholder="Найти персонажа" />
                </div>
                <div className="border"></div>
                <div>
                    <img src={Filter} alt="filter" />
                </div>
            </div>
            <div className="locations-page__list">
                <div className="count-of-locations">
                    <p>Всего локаций: 200</p>
                </div>
                <ul className='list-locations'>
                    {elements}
                </ul>
            </div>
            <div className="navigation-panel">
                <Link to={'/listOfCharacters'}>
                    <div className="navigation-panel__item">
                        <img src={characterIcon} alt="" />
                        <p>Персонажи</p>
                    </div>
                </Link>
                <div className="navigation-panel__item_select">
                    <img src={locatioIcon} alt="" />
                    <p>Локации</p>
                </div>
                <Link to={'/listOfEpisods'}>
                    <div className="navigation-panel__item">
                        <img src={episodeIcon} alt="" />
                        <p>Эпизоды</p>
                    </div>
                </Link>
                <Link to={'/settings'}>
                    <div className="navigation-panel__item">
                        <img src={settingsIcon} alt="" />
                        <p>Настройки</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ListOfLocations;
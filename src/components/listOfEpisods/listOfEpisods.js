import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './listOfEpisods.scss'

import Search from '../../assets/other/Search.png'

import characterIcon from '../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../assets/navigation/activeIcons/ActiveEpisodeIcon.png'
import settingsIcon from '../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'
import image from '../../assets/Rectangle.png'


const ListOfEpisods = () => {

    const arraySeasons = [
        { seasonTitle: 'сезон 1' },
        { seasonTitle: 'сезон 2' },
        { seasonTitle: 'сезон 3' },
        { seasonTitle: 'сезон 4' },
        { seasonTitle: 'сезон 5' },
        { seasonTitle: 'сезон 6' },
    ]
    const arrayEpisods = [
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
        { image, seriaNumber: 'Серия 1', title: 'Пилот', releaseDate: '2 декабря 2013' },
    ]

    const arrayOfRefs = useRef([])

    const classChange = (index) => {
        arrayOfRefs.current.forEach(item => item.className = 'list-of-seasons__item')
        arrayOfRefs.current[index].className = 'list-of-seasons__item_active'
    }

    const renderSeasonsList = arraySeasons.map((item, index) => {
        return (
            index === 0 ?
            <div
                className='list-of-seasons__item_active'
                key={index}
                ref={el => arrayOfRefs.current[index] = el}
                onClick={() => classChange(index)}
            >
                <p>{item.seasonTitle}</p>
                <p className='active'></p>
            </div> 
            : 
            <div
                className='list-of-seasons__item'
                key={index}
                ref={el => arrayOfRefs.current[index] = el}
                onClick={() => classChange(index)}
            >
                <p>{item.seasonTitle}</p>
                <p className='active'></p>
            </div> 
        )
    })

    const renderEpisodsList = arrayEpisods.map((item, index) => {
        return (
            <Link to={'/episodePage'} key={index}>
                <li className="episod">
                    <div>
                        <img src={item.image} alt="character" />
                    </div>
                    <div className="description">
                        <p className="serial-number">{item.seriaNumber}</p>
                        <p className="series-title">{item.title}</p>
                        <p className="release-date">{item.releaseDate}</p>
                    </div>
                </li>
            </Link>
        )
    })


    return (
        <div className='episods-page'>
            <div className='episods-page__search'>
                <img src={Search} alt="" />
                <input type="text" placeholder='Найти эпизод' />
            </div>
            <div className='list-of-seasons'>
                {renderSeasonsList}
            </div>
            <div className='list-of-episods'>
                <ul>
                    {renderEpisodsList}
                </ul>
            </div>
            <div className="navigation-panel">
                <div className="navigation-panel__item">
                    <img src={characterIcon} alt="" />
                    <p>Персонажи</p>
                </div>
                <Link to={'/listOfLocaions'}>
                    <div className="navigation-panel__item">
                        <img src={locatioIcon} alt="" />
                        <p>Локации</p>
                    </div>
                </Link>
                <Link to={'/listOfEpisods'}>
                    <div className="navigation-panel__item_select">
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

export default ListOfEpisods;
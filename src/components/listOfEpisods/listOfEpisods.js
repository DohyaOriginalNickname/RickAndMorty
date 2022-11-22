import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useGetAllEpisodsQuery } from '../../servies/episodsApi';
import './listOfEpisods.scss'

import Search from '../../assets/other/Search.png'

import characterIcon from '../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../assets/navigation/activeIcons/ActiveEpisodeIcon.png'
import settingsIcon from '../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'
import image from '../../assets/Rectangle.png'


const ListOfEpisods = () => {

    const { data, isLoading } = useGetAllEpisodsQuery()

    const arraySeasons = [
        { seasonTitle: 'сезон 1' },
        { seasonTitle: 'сезон 2' },
        { seasonTitle: 'сезон 3' },
        { seasonTitle: 'сезон 4' },
        { seasonTitle: 'сезон 5' },
        { seasonTitle: 'сезон 6' },
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
                    { isLoading ? null : data.results.map((item) => {
                        return (
                            <Link to={'/episodePage'} key={item.id}>
                                <li className="episod">
                                    <div>
                                        <img src={image} alt="character" />
                                    </div>
                                    <div className="description">
                                        <p className="serial-number">seria {item.id}</p>
                                        <p className="series-title">{item.name}</p>
                                        <p className="release-date">{item.air_date}</p>
                                    </div>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
            <div className="navigation-panel">
                <Link to={'/listOfCharacters'}>
                    <div className="navigation-panel__item">
                        <img src={characterIcon} alt="" />
                        <p>Персонажи</p>
                    </div>
                </Link>
                <Link to={'/listOfLocaions'}>
                    <div className="navigation-panel__item">
                        <img src={locatioIcon} alt="" />
                        <p>Локации</p>
                    </div>
                </Link>
                    <div className="navigation-panel__item_select">
                        <img src={episodeIcon} alt="" />
                        <p>Эпизоды</p>
                    </div>
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
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useGetAllEpisodsQuery } from '../../serviсes/episodsApi';
import './listOfEpisods.scss'

import Search from '../../assets/other/Search.png'

import characterIcon from '../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../assets/navigation/activeIcons/ActiveEpisodeIcon.png'
import settingsIcon from '../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'
import image from '../../assets/Rectangle.png'


const ListOfEpisods = () => {

    const [countPage, setPageCount] = useState(1)
    const [array, setArray] = useState([])
    const [idOfSeason, setId] = useState(1)
    const arrayOfRefs = useRef([])
    const { data, isLoading } = useGetAllEpisodsQuery(countPage)


    const arrayOfSeasons = [
        { seasonTitle: 'сезон 1', id: 1, episods: [] },
        { seasonTitle: 'сезон 2', id: 2, episods: [] },
        { seasonTitle: 'сезон 3', id: 3, episods: [] },
        { seasonTitle: 'сезон 4', id: 4, episods: [] },
        { seasonTitle: 'сезон 5', id: 5, episods: [] },
        { seasonTitle: 'сезон 6', id: 6, episods: [] },
    ]

    useEffect(() => {
        if (data !== undefined) {
            if (countPage <= 3) {
                setArray(array => [...array, ...data.results])
                setPageCount(countPage => countPage + 1)
            }
        }
    }, [data])

    useEffect(() => {
        if (countPage === 4) {
            for (let i = 0, item = 0; item < arrayOfSeasons.length;) {
                if (array[i] === undefined) {
                    break
                }

                const aaa = array[i].episode.slice(2, 3)
                const bbb = arrayOfSeasons[item]
                if (bbb.id == aaa) {
                    bbb.episods.push(array[i])
                    i++
                } else {
                    item++
                }
            }
        }
    }, [array])

    const classChange = (index) => {
        arrayOfRefs.current.forEach(item => item.className = 'list-of-seasons__item')
        arrayOfRefs.current[index].className = 'list-of-seasons__item_active'
        setId(index)
    }

    const renderList = (id) => {
        return (
            array.map((item) => {
                if (item.episode.slice(2, 3) == id) {
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
                }
            })
        )
    }

    const renderSeasonsList = () => {
        return (
            <>
                <div className='list-of-seasons'>
                    {
                        arrayOfSeasons.map(item => {
                            return (
                                item.id === 1 ?
                                    <div
                                        className='list-of-seasons__item_active'
                                        key={item.id}
                                        ref={el => arrayOfRefs.current[item.id] = el}
                                        onClick={() => classChange(item.id)}
                                    >
                                        <p>{item.seasonTitle}</p>
                                        <p className='active'></p>
                                    </div>
                                    :
                                    <div
                                        className='list-of-seasons__item'
                                        key={item.id}
                                        ref={el => arrayOfRefs.current[item.id] = el}
                                        onClick={() => classChange(item.id)}
                                    >
                                        <p>{item.seasonTitle}</p>
                                        <p className='active'></p>
                                    </div>
                            )
                        })
                    }
                </div>
                <div className='list-of-episods'>
                    <ul>
                        {renderList(idOfSeason)}
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div className='episods-page'>
            <div className='episods-page__search'>
                <img src={Search} alt="" />
                <input type="text" placeholder='Найти эпизод' />
            </div>

            {renderSeasonsList()}

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
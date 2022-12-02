import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useGetAllEpisodesQuery } from '../../../serviсes/episodsApi';
import ItemOfEpisodesList from '../../UI/ItemOfEpisodesList/ItemOfEpisodesList';

import './ListOfEpisodes.scss'

import Search from '../../../assets/other/Search.png'

import characterIcon from '../../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../../assets/navigation/activeIcons/ActiveEpisodeIcon.png'
import settingsIcon from '../../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'

const ListEpisodes = (props) => {

    const [countPage, setPageCount] = useState(1)
    const [array, setArray] = useState([])
    const [idOfSeason, setId] = useState(1)
    const arrayOfRefs = useRef([])
    const { data } = useGetAllEpisodesQuery(countPage)

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
                setArray([...array, ...data.results])
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

                const numberOfSeason = array[i].episode.slice(2, 3)
                const currentSeason = arrayOfSeasons[item]
                if (currentSeason.id == numberOfSeason) {
                    currentSeason.episods.push(array[i])
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

    const titleOfSeasons = arrayOfSeasons.map(item => {
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

    const renderList = (id) => {
        return (
            array.map((item) => {
                if (item.episode.slice(2, 3) == id) {
                    return <ItemOfEpisodesList key={item.id} id={item.id} image={props.image} name={item.name} air_date={item.air_date}/>
                }
            })
        )
    }

    const renderSeasonsList = () => {
        return (
            <>
                <div className='list-of-seasons'>
                    {titleOfSeasons}
                </div>
                <div className='list-of-episodes'>
                    <ul>
                        {renderList(idOfSeason)}
                    </ul>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='episodes-page__search'>
                <img src={Search} alt="" />
                <input type="text" placeholder='Найти эпизод' onClick={() => props.da()} />
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
        </>
    )
}

export default ListEpisodes;
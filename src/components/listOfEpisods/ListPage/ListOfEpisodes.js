import { useRef, useState, useEffect, useContext } from 'react';
import { useGetAllEpisodesQuery } from '../../../serviсes/episodsApi';
import { Context } from '../../ThemeContext/themeContext';

import ItemOfEpisodesList from '../../UI/ItemOfEpisodesList/ItemOfEpisodesList';
import Loader from '../../UI/loader/loader'
import Navigation from '../../UI/navigation/navigation';

import './ListOfEpisodes.scss'

import Search from '../../../assets/other/Search.png'

const ListEpisodes = (props) => {

    const [countPage, setPageCount] = useState(1)
    const [array, setArray] = useState([])
    const [idOfSeason, setId] = useState(1)
    const [context, setContext] = useContext(Context)
    
    const arrayOfRefs = useRef([])
    const { data, isLoading } = useGetAllEpisodesQuery(countPage)

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
                countPage === 1 ? setPageCount(2) : setPageCount(countPage => countPage + 1)
                /* после пере-рендера он не инкременетирует по каким то причинам 1 на 2 а сразу на 3 
                в следствие чего в api 1 страница эпизодов пропускалась*/
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
                    <p className={context === 'dark' ? 'active-dark' : 'active-light'}></p>
                </div>
                :
                <div
                    className='list-of-seasons__item'
                    key={item.id}
                    ref={el => arrayOfRefs.current[item.id] = el}
                    onClick={() => classChange(item.id)}
                >
                    <p>{item.seasonTitle}</p>
                    <p className={context === 'dark' ? 'active-dark' : 'active-light'}></p>
                </div>
        )
    })

    const renderList = (id) => {
        return (
            array.map((item) => {
                if (item.episode.slice(2, 3) == id) {
                    return <ItemOfEpisodesList key={item.id} id={item.id} image={props.image} name={item.name} air_date={item.air_date} />
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
                <input type="text" placeholder='Найти эпизод' onClick={() => props.changePage()} />
            </div>

            { isLoading ? <Loader/> : renderSeasonsList()}

            <Navigation/>
        </>
    )
}

export default ListEpisodes;
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetAllLocationsQuery } from '../../../serviсes/locationsApi'
import './ListLocationsPage.scss'

import ItemOfLocationsList from '../../UI/ItemOfLocationsList/ItemOfLocationsList'

import Search from '../../../assets/other/Search.png'
import Filter from '../../../assets/other/Filter.png'

import characterIcon from '../../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../../assets/navigation/activeIcons/ActiveLocationIcon.png'
import episodeIcon from '../../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'

const ListLocations = (props) => {
    const [ countPage, setCountPage ] = useState(0)
    const [ array, setArray ] = useState([])

    const { data, isLoading } = useGetAllLocationsQuery(countPage)

    const refObserver = useRef(null)
    const ref = useRef(null)

    const renderList = data !== undefined ? array.map(({name,dimension,id}) => {
        return <ItemOfLocationsList key={id} image={props.image} name={name} dimension={dimension} id={id}/>
    }) : null

    const options = {
        root: ref.current,
        rootMargin: '0px',
        threshold: 1.0
    }

    const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
            setCountPage(countPage => countPage + 1)
        }
    }
    const observer = new IntersectionObserver(callback, options)

    useEffect(() => {
        if (data !== undefined) {
            setArray([...array, ...data.results])
        }
    }, [data])

    useEffect(() => {
        observer.observe(refObserver.current)
    }, [])


    return (
        <>
            <div className="locations-page__search">
                <div>
                    <img src={Search} alt="search" />
                </div>
                <div>
                    <input type="text" placeholder="Найти локацию" onClick={()=>props.da()} />
                </div>
                <div className="border"></div>
                <div>
                    <img src={Filter} alt="filter" />
                </div>
            </div>
            <div className="locations-page__list">
                <div className="count-of-locations">
                    <p>Всего локаций: {isLoading ? null : data.info.count}</p>
                </div>
                <ul className='list-locations' ref={ref}>
                    {renderList}
                    <div ref={refObserver}></div>
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
        </>
    )
}

export default ListLocations;
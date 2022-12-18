import { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetAllLocationsQuery, useGetLocationsByFiltersQuery } from '../../../serviсes/locationsApi'
import './ListLocationsPage.scss'

import ItemOfLocationsList from '../../UI/ItemOfLocationsList/ItemOfLocationsList'
import Loader from '../../UI/loader/loader'

import Search from '../../../assets/other/Search.png'
import Filter from '../../../assets/other/Filter.png'

import characterIcon from '../../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../../assets/navigation/activeIcons/ActiveLocationIcon.png'
import episodeIcon from '../../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'

const ListLocations = (props) => {
    const [countPage, setCountPage] = useState(0)
    const [countFilteredPage, setCountFilteredPage] = useState(0)
    const [AllLocations, setAllLocations] = useState([])
    const [FilteredLocations, setFilteredLocations] = useState([])
    const filters = useSelector((state) => state.filter.paramsForLocationsQuery)

    const { data: allLocations, isLoading: isLoadingAllLocations } = useGetAllLocationsQuery(countPage)
    const { data: filteredLocations, isLoading: isLoadingFilteredLocations } = useGetLocationsByFiltersQuery({ page: countFilteredPage, obj: filters })

    const refObserver = useRef(null)
    const ref = useRef(null)

    const renderAllLocationsList = allLocations !== undefined ? AllLocations.map(({ name, dimension, id, type }) => {
        return <ItemOfLocationsList key={id} image={props.image} name={name} dimension={dimension} id={id} type={type} />
    }) : null

    const renderFilteredLocationsList = filteredLocations !== undefined ? FilteredLocations.map(({ name, dimension, id, type }) => {
        return <ItemOfLocationsList key={id} image={props.image} name={name} dimension={dimension} id={id} type={type} />
    }) : null

    const options = {
        root: ref.current,
        rootMargin: '0px',
        threshold: 1.0
    }

    const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
            if (Object.values(filters).length > 0) {
                setCountFilteredPage(countFilteredPage => countFilteredPage + 1)
            } else {
                setCountPage(countPage => countPage + 1)
            }
        }
    }
    const observer = new IntersectionObserver(callback, options)

    useEffect(() => {
        if (allLocations !== undefined) {
            setAllLocations([...AllLocations, ...allLocations.results])
        }
    }, [allLocations])

    useEffect(() => {
        if (filteredLocations !== undefined) {
            setFilteredLocations([...FilteredLocations, ...filteredLocations.results])
        }
    }, [filteredLocations])

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
                    <input type="text" placeholder="Найти локацию" onClick={() => props.changePage()} />
                </div>
                <div className="border"></div>
                <div>
                    <img src={Filter} alt="filter" onClick={() => props.da()} />
                </div>
            </div>
            <div className="locations-page__list">
                <div className="count-of-locations">
                    <p>Всего локаций: {isLoadingAllLocations ? null : filteredLocations !== undefined ? filteredLocations.info.count : allLocations.info.count}</p>
                </div>
                <ul className='list-locations' ref={ref}>
                    { isLoadingAllLocations || isLoadingFilteredLocations ? <Loader/> : Object.keys(filters).length > 0 ? renderFilteredLocationsList : renderAllLocationsList}
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
                <Link to={'/settingsPage'}>
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
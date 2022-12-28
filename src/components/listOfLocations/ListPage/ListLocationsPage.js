import { useRef, useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllLocationsQuery, useGetLocationsByFiltersQuery } from '../../../serviсes/locationsApi'
import { Context } from '../../ThemeContext/themeContext';
import './ListLocationsPage.scss'

import ItemOfLocationsList from '../../UI/ItemOfLocationsList/ItemOfLocationsList'
import Loader from '../../UI/loader/loader'
import NotFoundByFilter from "../../filtersPages/notFoundByFilter/notFoundByFilter"
import Navigation from '../../UI/navigation/navigation'

import Search from '../../../assets/other/Search.png'
import Filter from '../../../assets/other/Filter.png'

const ListLocations = (props) => {
    const [countPage, setCountPage] = useState(1)
    const [countFilteredPage, setCountFilteredPage] = useState(1)
    const [AllLocations, setAllLocations] = useState([])
    const [FilteredLocations, setFilteredLocations] = useState([])
    const [context, setContext] = useContext(Context)
    
    const filters = useSelector((state) => state.filter.paramsForLocationsQuery)

    const { data: allLocations, isLoading: isLoadingAllLocations } = useGetAllLocationsQuery(countPage)
    const { data: filteredLocations, isLoading: isLoadingFilteredLocations, error: errorFilter } = useGetLocationsByFiltersQuery({ page: countFilteredPage, obj: filters })

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
            if (Object.values(filters).length > 0 && filteredLocations !== undefined) {
                if (!isLoadingFilteredLocations && filteredLocations.info.next !== null) {
                    setCountFilteredPage(countFilteredPage => countFilteredPage + 1)
                }
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
            <div className={context === 'dark' ? "locations-page__search dark-theme-secondary" : "locations-page__search light-theme-secondary"}>
                <div>
                    <img src={Search} alt="search" />
                </div>
                <div>
                    <input type="text" placeholder="Найти локацию" onClick={() => props.changeToSearchPage()} />
                </div>
                <div className={context === 'dark' ? "border-dark" : "border-light"}></div>
                <div>
                    <img src={Filter} alt="filter" onClick={() => props.changeToFilterPage()} />
                </div>
            </div>
            <div className="locations-page__list">
                <div className="count-of-locations">
                    <p>Всего локаций: {isLoadingAllLocations ? null : filteredLocations !== undefined ? filteredLocations.info.count : allLocations.info.count}</p>
                </div>
                <ul className='list-locations' ref={ref}>
                    {errorFilter ? <NotFoundByFilter /> : isLoadingAllLocations || isLoadingFilteredLocations ? <Loader /> : Object.keys(filters).length > 0 ? renderFilteredLocationsList : renderAllLocationsList}
                    <div ref={refObserver}></div>
                </ul>
            </div>
            <Navigation/>
        </>
    )
}

export default ListLocations;
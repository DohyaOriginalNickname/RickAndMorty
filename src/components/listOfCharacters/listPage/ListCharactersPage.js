import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { useGetAllCharactersQuery, useGetCharactersByFiltersQuery } from '../../../serviсes/characterApi'
import './ListCharactersPage.scss'

import ListItem from '../ItemList/listItem'
import Loader from '../../UI/loader/loader'
import NotFoundByFilter from "../../filtersPages/notFoundByFilter/notFoundByFilter"

import Search from '../../../assets/other/Search.png'
import Filter from '../../../assets/other/Filter.png'

import Group from '../../../assets/other/Group.png'
import List from '../../../assets/other/List.png'

import characterIcon from '../../../assets/navigation/activeIcons/ActiveCharactersIcon.png'
import locatioIcon from '../../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'

const ListCharacters = (props) => {

    const [template, setTemplate] = useState(true)
    const [countPage, setCountPage] = useState(1)
    const [countFilterPage, setCountFilterPage] = useState(1)
    const [AllCharacters, setAllCharacters] = useState([])
    const [FilteredCharacters, setFilteredCharacters] = useState([])

    const filters = useSelector((state) => state.filter.paramsForCharatersQuery)

    const { data: allCharacters, isLoading: isLoadingAllCharacters } = useGetAllCharactersQuery(countPage)
    const { data: filteredCharacters, isLoading: isLoadingFilteredCharacters, error: errorFilter } = useGetCharactersByFiltersQuery({ obj: filters, page: countFilterPage })

    const ref = useRef(null)

    useEffect(() => {
        if (allCharacters !== undefined) {
            setAllCharacters([...AllCharacters, ...allCharacters.results])
        }
    }, [allCharacters])

    useEffect(() => {
        if (filteredCharacters !== undefined) {
            setFilteredCharacters([...FilteredCharacters, ...filteredCharacters.results])
        }
    }, [filteredCharacters])

    const plusPage = () => {
        if (Object.values(filters).length > 0) {
            if (filteredCharacters.info.next !== null) {
                setCountFilterPage(countFilterPage => countFilterPage + 1)
            }
        } else {
            if (allCharacters.info.next !== null) {
                setCountPage(countPage => countPage + 1)
            }
        }
    }

    return (
        <>
            <div className="characters-page__search">
                <div>
                    <img src={Search} alt="search" />
                </div>
                <div>
                    <input type="text" placeholder="Найти персонажа" onFocus={() => props.changePage()} />
                </div>
                <div className="border"></div>
                <div>
                    <img src={Filter} alt="filter" onClick={() => props.da()} />
                </div>
            </div>
            <div className="characters-page__list">
                <div className="count-of-characters">
                    <p>Всего персонажей: {isLoadingAllCharacters ? null : filteredCharacters !== undefined ? filteredCharacters.info.count : allCharacters.info.count}</p>
                    <img src={template ? List : Group} alt="Group" onClick={() => setTemplate(!template)} />
                </div>
                <ul className={template ? 'list' : 'tile'} ref={ref}>
                    {
                        errorFilter  ? <NotFoundByFilter/> : isLoadingAllCharacters || isLoadingFilteredCharacters ? <Loader/> : <ListItem data={Object.keys(filters).length > 0 ? FilteredCharacters : AllCharacters} template={template} aaa={ref.current} plusPage={plusPage} /> 
                    }
                </ul>
            </div>
            <div className="navigation-panel">
                <div className="navigation-panel__item_select">
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

export default ListCharacters;
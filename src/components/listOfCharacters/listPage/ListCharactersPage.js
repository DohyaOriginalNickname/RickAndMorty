import { useState, useEffect, useRef } from "react"
import { Link } from 'react-router-dom'
import { useGetAllCharactersQuery } from '../../../serviсes/characterApi'
import './ListCharactersPage.scss'

import ListTemplate from '../templates/listTemplate/listTemplate'
import TileTemplate from '../templates/tileTemplate/tileTemplate'

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
    const [array, setArray] = useState([])

    const { data, isLoading } = useGetAllCharactersQuery(countPage)

    const ref = useRef(null)

    useEffect(() => {
        if (data !== undefined) {
            setArray([...array, ...data.results])
        }
    }, [data])

    const plusPage = () => {
        setCountPage(countPage => countPage + 1)
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
                    <img src={Filter} alt="filter" onClick={() => props.da()}/>
                </div>
            </div>
            <div className="characters-page__list">
                <div className="count-of-characters">
                    <p>Всего персонажей: {isLoading ? null : data.info.count}</p>
                    <img src={template ? List : Group} alt="Group" onClick={() => setTemplate(!template)} />
                </div>
                <ul className={template ? 'list' : 'tile'} ref={ref}>
                    {
                        isLoading ? null : template ? <ListTemplate data={array} aaa={ref.current} plusPage={plusPage} /> : <TileTemplate data={array} aaa={ref.current} plusPage={plusPage} />
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

export default ListCharacters;
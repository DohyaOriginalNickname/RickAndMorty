import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useGetAllCharacterQuery } from '../../servies/characterApi'

import Search from '../../assets/other/Search.png'
import Filter from '../../assets/other/Filter.png'

import ListTemplate from './listTemplate/listTemplate'
import TileTemplate from './tileTemplate/tileTemplate'

import characterIcon from '../../assets/navigation/activeIcons/ActiveCharactersIcon.png'
import locatioIcon from '../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'

import "./listOfCharacters.scss"

const ListOfCharactersPage = () => {

    const [value, setValue] = useState(true)
    const { data, isLoading } = useGetAllCharacterQuery()

    const changeList = (param) => {
        setValue(param)
    }

    return (
        <div className="characters-page">
            <div className="characters-page__search">
                <div>
                    <img src={Search} alt="search" />
                </div>
                <div>
                    <input type="text" placeholder="Найти персонажа" />
                </div>
                <div className="border"></div>
                <div>
                    <img src={Filter} alt="filter" />
                </div>
            </div>
            <div className="characters-page__list">
                {
                    isLoading ? null : value ? <ListTemplate data={data} changeList={changeList} /> : <TileTemplate data={data} changeList={changeList} />
                }
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
        </div>
    )
}

export default ListOfCharactersPage;
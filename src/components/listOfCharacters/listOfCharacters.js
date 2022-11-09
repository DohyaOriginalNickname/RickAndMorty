import { useState } from 'react'

import Search from '../../assets/other/Search.png'
import Filter from '../../assets/other/Filter.png'

import ListTemplate from './listTemplate/listTemplate'
import TileTemplate from './tileTemplate/tileTemplate'

import characterIcon from '../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'

import "./listOfCharacters.scss"

const ListOfCharactersPage = () => {

    const [value, setValue] = useState(true)

    const aaa = [
        { live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { live: true, name: "Рик", raceAndGender: "Человек, Мужской" }
    ]

    const bbb = (param) => {
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
                { value ? <ListTemplate arr={aaa} bbb={bbb} /> : <TileTemplate arr={aaa} bbb={bbb}/>}
            </div>
            <div className="navigation-panel">
                <div className="navigation-panel__item">
                    <img src={characterIcon} alt="" />
                    <p>Персонажи</p>
                </div>
                <div className="navigation-panel__item">
                    <img src={locatioIcon} alt="" />
                    <p>Локации</p>
                </div>
                <div className="navigation-panel__item">
                    <img src={episodeIcon} alt="" />
                    <p>Эпизоды</p>
                </div>
                <div className="navigation-panel__item">
                    <img src={settingsIcon} alt="" />
                    <p>Настройки</p>
                </div>
            </div>
        </div>
    )
}

export default ListOfCharactersPage;
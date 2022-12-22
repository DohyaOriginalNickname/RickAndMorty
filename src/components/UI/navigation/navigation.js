import { NavLink } from 'react-router-dom'

import './navigation.scss';

import characterActiveIcon from '../../../assets/navigation/activeIcons/ActiveCharactersIcon.png'
import locationActiveIcon from '../../../assets/navigation/activeIcons/ActiveLocationIcon.png'
import episodeActiveIcon from '../../../assets/navigation/activeIcons/ActiveEpisodeIcon.png'
import settingsActiveIcon from '../../../assets/navigation/activeIcons/ActiveSettingsIcon.png'

import characterIcon from '../../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locationIcon from '../../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'


const Navigation = () => {
    return (
        <nav className="navigation-panel">
            <NavLink to={'/listOfCharacters'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? characterActiveIcon : characterIcon} alt="" />
                        <p>Персонажи</p>
                    </div>
                )}
            </NavLink>
            <NavLink to={'/listOfLocaions'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? locationActiveIcon : locationIcon} alt="" />
                        <p>Локации</p>
                    </div>
                )}
            </NavLink>
            <NavLink to={'/listOfEpisods'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? episodeActiveIcon : episodeIcon} alt="" />
                        <p>Эпизоды</p>
                    </div>
                )}
            </NavLink>
            <NavLink to={'/settingsPage'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? settingsActiveIcon : settingsIcon} alt="" />
                        <p>Настройки</p>
                    </div>
                )}
            </NavLink>
        </nav>
    )
}

export default Navigation;
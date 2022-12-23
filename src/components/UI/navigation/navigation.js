import { NavLink } from 'react-router-dom'

import './navigation.scss';

import characterActiveIconBlackTheme from '../../../assets/navigation/activeIconsBlackTheme/ActiveCharactersIcon.png'
import locationActiveIconBlackTheme from '../../../assets/navigation/activeIconsBlackTheme/ActiveLocationIcon.png'
import episodeActiveIconBlackTheme from '../../../assets/navigation/activeIconsBlackTheme/ActiveEpisodeIcon.png'
import settingsActiveIconBlackTheme from '../../../assets/navigation/activeIconsBlackTheme/ActiveSettingsIcon.png'

import characterActiveIconWhiteTheme from '../../../assets/navigation/activeIconsWhiteTheme/ActiveCharactersIcon.png'
import locationActiveIconWhiteTheme from '../../../assets/navigation/activeIconsWhiteTheme/ActiveLocationIcon.png'
import episodeActiveIconWhiteTheme from '../../../assets/navigation/activeIconsWhiteTheme/ActiveEpisodeIcon.png'
import settingsActiveIconWhiteTheme from '../../../assets/navigation/activeIconsWhiteTheme/ActiveSettingsIcon.png'

import characterIcon from '../../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locationIcon from '../../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../../assets/navigation/nonActiveIcons/nonActiveSettingsIcon.png'


const Navigation = () => {
    return (
        <nav className={localStorage.getItem('theme') === 'dark' ? "navigation-panel dark-theme-secondary" : "navigation-panel light-theme-secondary"}>
            <NavLink to={'/listOfCharacters'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? localStorage.getItem('theme') === 'dark' ? characterActiveIconBlackTheme : characterActiveIconWhiteTheme : characterIcon} alt="" />
                        <p className={localStorage.getItem('theme') === 'dark' ? 'dark-theme' : 'light-theme'}>Персонажи</p>
                    </div>
                )}
            </NavLink>
            <NavLink to={'/listOfLocaions'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? localStorage.getItem('theme') === 'dark' ? locationActiveIconBlackTheme : locationActiveIconWhiteTheme : locationIcon} alt="" />
                        <p className={localStorage.getItem('theme') === 'dark' ? 'dark-theme' : 'light-theme'}>Локации</p>
                    </div>
                )}
            </NavLink>
            <NavLink to={'/listOfEpisods'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? localStorage.getItem('theme') === 'dark' ? episodeActiveIconBlackTheme : episodeActiveIconWhiteTheme : episodeIcon} alt="" />
                        <p className={localStorage.getItem('theme') === 'dark' ? 'dark-theme' : 'light-theme'}>Эпизоды</p>
                    </div>
                )}
            </NavLink>
            <NavLink to={'/settingsPage'}>
                {({ isActive }) => (
                    <div className={isActive ? "navigation-panel__item_select" : "navigation-panel__item"}>
                        <img src={isActive ? localStorage.getItem('theme') === 'dark' ? settingsActiveIconBlackTheme : settingsActiveIconWhiteTheme : settingsIcon} alt="" />
                        <p className={localStorage.getItem('theme') === 'dark' ? 'dark-theme' : 'light-theme'}>Настройки</p>
                    </div>
                )}
            </NavLink>
        </nav>
    )
}

export default Navigation;
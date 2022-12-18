import { Link } from 'react-router-dom';

import './settingsPage.scss'


import arrow from '../../../assets/other/Arrow.png'
import avatar from '../../../assets/avatar.png'
import palitra from '../../../assets/other/palitra.png'
import arrow2 from '../../../assets/other/Arrow2.png'

import characterIcon from '../../../assets/navigation/nonActiveIcons/nonActiveCharactersIcon.png'
import locatioIcon from '../../../assets/navigation/nonActiveIcons/nonActiveLocationIcon.png'
import episodeIcon from '../../../assets/navigation/nonActiveIcons/nonActiveEpisodeIcon.png'
import settingsIcon from '../../../assets/navigation/activeIcons/ActiveSettingsIcon.png'


const SettingsPage = () => {
    return (
        <div className="settings-page">

            <div className='aaaa'>
                <img src={arrow} alt="arrow" />
                <p>Настройки</p>
            </div>

            <div className='all-settings'>
                <div className='main-settings'>
                    <div className='profile'>
                        <img src={avatar} alt="" />
                        <div className='profile__info'>
                            <p>Oleg Belotserkovsky</p>
                            <p>Rick</p>
                        </div>
                    </div>
                    <div>
                        <Link to={'/changeUserData'}>
                            <button className='edit-button'>Редактировать</button>
                        </Link>
                    </div>
                </div>

                <div className='others-settings'>
                    <div className="border"></div>

                    <div className='change-theme'>
                        <p>Внешний вид</p>
                        <div className='select-theme'>
                            <img src={palitra} alt="" />
                            <div className='info-of-theme'>
                                <p>Темная тема</p>
                                <p>Включена</p>
                            </div>
                            <img src={arrow2} alt="" />
                        </div>
                    </div>

                    <div className="border"></div>

                    <div className='about'>
                        <p>О приложении</p>
                        <p>Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.</p>
                    </div>

                    <div className="border"></div>

                    <div className='version'>
                        <p>Версия приложения</p>
                        <p>Rick & Morty  v1.0.0</p>
                    </div>
                </div>
            </div>



            <div className="navigation-panel">
                <Link to={'/listOfCharacters'}>
                    <div className="navigation-panel__item">
                        <img src={characterIcon} alt="" />
                        <p>Персонажи</p>
                    </div>
                </Link>
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
                <div className="navigation-panel__item_select">
                    <img src={settingsIcon} alt="" />
                    <p>Настройки</p>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;
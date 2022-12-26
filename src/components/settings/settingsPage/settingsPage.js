import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../UI/navigation/navigation';

import { Context } from '../../ThemeContext/themeContext';

import './settingsPage.scss'

import ArrowBlackTheme from '../../../assets/other/blackThemeItems/Arrow.png'
import ArrowBlackTheme2 from '../../../assets/other/blackThemeItems/Arrow2.png'
import palitraBlackTheme from '../../../assets/other/blackThemeItems/palitra.png'

import ArrowWhiteTheme from '../../../assets/other/whiteThemeItems/Arrow.png'
import ArrowWhiteTheme2 from '../../../assets/other/whiteThemeItems/Arrow2.png'
import palitraWhiteTheme from '../../../assets/other/whiteThemeItems/Palitra.png'

import avatar from '../../../assets/avatar.png'


const SettingsPage = () => {

    const [userData, setUserData] = useState({})
    const [modal, setModal] = useState(false)
    const [context, setContext] = useContext(Context)

    const cancel = () => {
        setModal(modal => !modal)
    }

    useEffect(() => {
        setUserData(JSON.parse(localStorage.user))
    }, [])


    return (
        <>
            <div className={modal ? 'modal-bg' : null}></div>
            <div className={modal ? "settings-page no-touch" : "settings-page"}>

                <div className='exit'>
                    <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="arrow" />
                    <p>Настройки</p>
                </div>

                <div className='all-settings'>
                    <div className='main-settings'>
                        <div className='profile'>
                            <img src={userData.imageSrc ? userData.imageSrc : avatar} alt="" />
                            <div className='profile__info'>
                                <p>{userData.surname} {userData.name} {userData.middleName}</p>
                                <p>{userData.email}</p>
                            </div>
                        </div>
                        <div>
                            <Link to={'/changeUserData'}>
                                <button className='edit-button'>Редактировать</button>
                            </Link>
                        </div>
                    </div>

                    <div className='others-settings'>
                        <div className={context === 'dark' ? "dark-theme-border" : "light-theme-border"}></div>

                        <div className='change-theme'>
                            <p>Внешний вид</p>
                            <div className='select-theme' onClick={() => setModal(modal => !modal)}>
                                <img src={context === 'dark' ? palitraBlackTheme : palitraWhiteTheme} alt="" />
                                <div className='info-of-theme'>
                                    <p>Темная тема</p>
                                    <p>{context === 'dark' ? 'Включена' : 'Выключена'}</p>
                                </div>
                                <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" />
                            </div>
                        </div>

                        <div className={context === 'dark' ? "dark-theme-border" : "light-theme-border"}></div>

                        <div className='about'>
                            <p>О приложении</p>
                            <p>Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.</p>
                        </div>

                        <div className={context === 'dark' ? "dark-theme-border" : "light-theme-border"}></div>

                        <div className='version'>
                            <p>Версия приложения</p>
                            <p>Rick & Morty  v1.0.0</p>
                        </div>
                    </div>
                </div>

                {modal ? <ChangeThemeModal cancel={cancel} /> : null}

                <Navigation />
            </div>
        </>
    )
}


const ChangeThemeModal = (props) => {

    const [context, setContext] = useContext(Context)
    const themes = ['Выключенна', 'Включенна', 'Следовать настройкам системы', 'В режиме энергосбережения']

    const changeTheme = (event) => {
        setContext(event.target.value)
        localStorage.setItem('theme', event.target.value)
    }

    return (
        <div className='change-theme-modal'>
            <div className='title'>
                <p>Темная тема</p>
            </div>

            <ul className='select-list' onClick={(e) => changeTheme(e)}>
                <li>
                    <input type="radio" name='theme' value="light" id='off' />
                    <label htmlFor='off'>Выключенна</label>
                </li>
                <li>
                    <input type="radio" name='theme' value="dark" id='on' />
                    <label htmlFor='on'>Включенна</label>
                </li>
                <li>
                    <input type="radio" name='theme' value="for-the-system" id='for-the-system' />
                    <label htmlFor='for-the-system'>Следовать настройкам системы</label>
                </li>
                <li>
                    <input type="radio" name='theme' value="low-energy" id='low-energy' />
                    <label htmlFor='low-energy'>В режиме энергосбережения</label>
                </li>
            </ul>

            <div className='cancel'>
                <p onClick={() => props.cancel()}>Отмена</p>
            </div>
        </div>
    )
}

export default SettingsPage;
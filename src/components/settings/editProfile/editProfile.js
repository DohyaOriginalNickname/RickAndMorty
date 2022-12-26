import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../ThemeContext/themeContext';

import './editProfile.scss'
import ArrowBlackTheme from '../../../assets/other/blackThemeItems/Arrow.png'
import ArrowBlackTheme2 from '../../../assets/other/blackThemeItems/Arrow2.png'

import ArrowWhiteTheme from '../../../assets/other/whiteThemeItems/Arrow.png'
import ArrowWhiteTheme2 from '../../../assets/other/whiteThemeItems/Arrow2.png'
import avatar from '../../../assets/avatar.png'
import { useEffect, useState } from 'react';


const EditProfile = () => {

    const [userData,setUserData] = useState({})
    const [context, setContext] = useContext(Context)

    useEffect(()=>{
        setUserData(JSON.parse(localStorage.user))
    }, [])

    return (
        <div className='edit-page'>
            <div className='aaaa'>
                <Link to={'/settingsPage'}>
                    <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="arrow" />
                </Link>
                <p>Редактировать</p>
            </div>

            <div className='avatar'>
                <img src={avatar} alt="" />
                <p>Изменить фото</p>
            </div>

            <div className='data-of-profile'>
                <p>профиль</p>
                <div className='select-of-change'>
                    <Link to={'/nameChange'}>
                        <div className='select-of-change__item'>
                            <div className='data-of-select'>
                                <p>Изменить ФИО</p>
                                <p>{userData.name} {userData.surname} {userData.middleName}</p>
                            </div>
                            <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" />
                        </div>
                    </Link>
                    <Link to={'/passwordChange'}>
                        <div className='select-of-change__item'>
                            <div className='data-of-select'>
                                <p className='change-pass'>Изменить пароль</p>
                            </div>
                            <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;
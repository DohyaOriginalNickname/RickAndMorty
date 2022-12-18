import { Link } from 'react-router-dom';

import './editProfile.scss'
import arrow from '../../../assets/other/Arrow.png'
import arrow2 from '../../../assets/other/Arrow2.png'
import avatar from '../../../assets/avatar.png'


const EditProfile = () => {
    return (
        <div className='edit-page'>
            <div className='aaaa'>
                <Link to={'/settingsPage'}>
                    <img src={arrow} alt="arrow" />
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
                                <p>Oleg Belotserkovsky</p>
                            </div>
                            <img src={arrow2} alt="" />
                        </div>
                    </Link>
                    <Link to={'/passwordChange'}>
                        <div className='select-of-change__item'>
                            <div className='data-of-select'>
                                <p>Логин</p>
                                <p>Rick</p>
                            </div>
                            <img src={arrow2} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;
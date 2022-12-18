import { Link } from 'react-router-dom';

import './passwordChange.scss'

import arrow from '../../../../assets/other/Arrow.png'

const PasswordChange = () => {
    return (
        <div className='password-change-page'>

            <div className='aaaa'>
                <Link to={'/changeUserData'}>
                    <img src={arrow} alt="arrow" />
                </Link>
                <p>Изменить пароль</p>
            </div>

            <div className='form'>
                <div className="field">
                    <label htmlFor="login">Старый пароль</label>
                    <input type="password" id="login" placeholder="Старый пароль" className='field__pass' />
                </div>
                <div className="field">
                    <label htmlFor="pass">Новый пароль</label>
                    <input type="password" id="pass" placeholder="Новый пароль" className='field__pass' />
                </div>
            </div>

            <div className='button-submit'>
                <button>Сохранить</button>
            </div>
        </div>
    )
}

export default PasswordChange;
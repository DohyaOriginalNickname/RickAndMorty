import { useState } from 'react';
import { Link } from 'react-router-dom';

import { changeUserPassword } from '../../../../serviсes/authentication';
import './passwordChange.scss'

import arrow from '../../../../assets/other/Arrow.png'


const PasswordChange = () => {

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')

    const changePassword = () => {
        changeUserPassword(oldPass, newPass)
    }

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
                    <input type="password" id="login" placeholder="Старый пароль" className='field__pass' value={oldPass} onChange={(e) => setOldPass(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="pass">Новый пароль</label>
                    <input type="password" id="pass" placeholder="Новый пароль" className='field__pass' value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                </div>
            </div>

            <div className='button-submit'>
                <button disabled={oldPass === '' && newPass === '' ? true : false} onClick={() => changePassword()}>Сохранить</button>
            </div>
        </div>
    )
}

export default PasswordChange;
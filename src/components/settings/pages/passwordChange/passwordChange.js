import { useState } from 'react';
import { Link } from 'react-router-dom';
import { changeUserPassword } from '../../../../serviсes/authentication';

import Modal from '../../../UI/modal/modal';
import './passwordChange.scss'

import arrow from '../../../../assets/other/Arrow.png'


const PasswordChange = () => {

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [modal, setModal] = useState('')

    const errorMessage = 'Проверьте подключение к интернету или старый пароль неверен'

    const cancel = () => {
        setModal(modal => !modal)
    }

    const changePassword = () => {
        const userData = JSON.parse(localStorage.getItem('user'))
        if (userData.password === oldPass) {
            changeUserPassword(oldPass, newPass)
                .catch(() => setModal(modal => !modal))
        } else {
            setModal(modal => !modal)
        }
    }

    return (
        <>
            <div className={modal ? "modal-bg" : null}></div>
            <div className={modal ? 'password-change-page no-touch' : 'password-change-page'}>

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

                {modal ? <Modal active={cancel} errorMessage={errorMessage}/> : null}
            </div>
        </>
    )
}

export default PasswordChange;
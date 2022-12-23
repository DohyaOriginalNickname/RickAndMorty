import { useState } from 'react'
import { Link } from 'react-router-dom'

//import { changePasswordByEmail } from '../../../serviсes/authentication'

import './passwordRecoveryPage.scss'
import arrow from '../../../assets/other/blackThemeItems/Arrow.png'

const PasswordRecovery = () => {

    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    return (
        <div className="recovery-page">
            <div className="to-back-button">
                <div>
                    <Link to={'/'}><img src={arrow} alt="arrow" /></Link>
                </div>
                <div className="title">
                    <p>Восстановление</p>
                </div>
            </div>
            <div className="recovery-page__form">
                <form>
                    <div className="field">
                        <label htmlFor="login">Логин</label>
                        <input type="text" id="login" placeholder="Логин" className="field__login" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="pass">Пароль</label>
                        <input type="password" id="pass" placeholder="Пароль" className="field__pass" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <div className="button-submit">
                        <Link to={'/'}>
                            <button disabled={email === '' && newPassword === '' ? true : false} >Изменить</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordRecovery;
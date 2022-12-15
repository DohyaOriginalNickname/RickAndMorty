import { useState } from 'react'
import { Link } from 'react-router-dom'

import { createNewUser } from '../../../serviсes/authentication'

import arrow from '../../../assets/other/bigArrow.png'

import './createAccountPage.scss'
const CreateAccountPage = () => {

    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = () => {
        createNewUser(name, surName, middleName, login, password)
    }

    return (
        <div className="create-account">
            <div className="create-account__header">
                <div className="arrow">
                    <Link to={'/'}><img src={arrow} alt="backArrow" /></Link>
                </div>
                <div className="title">
                    <p>Создание аккаунта</p>
                </div>
            </div>
            <div>
                <form className="create-account__form">
                    <div className="user-data">
                        <div className="field">
                            <label htmlFor="name">Имя</label>
                            <input type="text" id="name" placeholder="Имя" className="field__login" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="surname">Фамилия</label>
                            <input type="text" id="surname" placeholder="Фамилия" className="field__pass" value={surName} onChange={(e) => setSurName(e.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="middleName">Отчество</label>
                            <input type="text" id="middleName" placeholder="Отчество" className="field__pass" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                        </div>
                    </div>

                    <div className="border"></div>

                    <div className="account-data">
                        <div className="field">
                            <label htmlFor="login">Логин</label>
                            <input type="text" id="login" placeholder="Логин" className="field__login" value={login} onChange={(e) => setLogin(e.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="pass">Пароль</label>
                            <input type="password" id="pass" placeholder="Пароль" className="field__pass" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="button-submit">
                        <Link to={'/listOfCharacters'}><button disabled={login !== '' && password !== '' && name !== '' && surName !== '' && middleName !== '' ? false : true} onClick={() => createAccount()}>Войти</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAccountPage;
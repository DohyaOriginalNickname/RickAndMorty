import { Link } from 'react-router-dom'

import arrow from '../../../assets/other/bigArrow.png'

import './createAccountPage.scss'
const CreateAccountPage = () => {
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
                            <label htmlFor="login">Имя</label>
                            <input type="text" id="name" placeholder="Имя" className="field__login" />
                        </div>
                        <div className="field">
                            <label htmlFor="pass">Фамилия</label>
                            <input type="text" id="surname" placeholder="Фамилия" className="field__pass" />
                        </div>
                        <div className="field">
                            <label htmlFor="pass">Отчество</label>
                            <input type="text" id="middleName" placeholder="Отчество" className="field__pass" />
                        </div>
                    </div>

                    <div className="border"></div>

                    <div className="account-data">
                        <div className="field">
                            <label htmlFor="login">Логин</label>
                            <input type="text" id="login" placeholder="Логин" className="field__login" />
                        </div>
                        <div className="field">
                            <label htmlFor="pass">Пароль</label>
                            <input type="password" id="pass" placeholder="Пароль" className="field__pass" />
                        </div>
                    </div>
                    <div className="button-submit">
                        <Link to={'/listOfCharacters'}><button>Войти</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAccountPage;
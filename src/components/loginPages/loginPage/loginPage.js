import { Link } from "react-router-dom"

import title from "../../../assets/loadingPage/title.png"
import './loginPage.scss'

// TODO сделать модалку с сообщением об ошибке

const LoginPage = () => {
    return (
        <div className="sign-in-page">
            <div >
                <img src={title} alt="title" className="sign-in-page__title"/>
            </div>
            <form className="sign-in-page__form">
                <div className="field">
                    <label htmlFor="login">Логин</label>
                    <input type="text" id="login" placeholder="Логин" className="field__login"/>
                </div>
                <div className="field">
                    <label htmlFor="pass">Пароль</label>
                    <input type="password" id="pass" placeholder="Пароль" className="field__pass"/>
                    <Link to={'/recoveryPassword'}><p className="recovery-client">Забыли пароль?</p></Link>
                </div>
                <div className="button-submit">
                    <Link to={'/listOfCharacters'}><button>Войти</button></Link>
                    <p>У вас еще нет аккаунта? <Link to={'/createAccount'}><span>Создать</span></Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;
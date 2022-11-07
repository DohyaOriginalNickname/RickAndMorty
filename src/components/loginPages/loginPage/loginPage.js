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
                    <p className="recovery-client"><a>Забыли пароль?</a></p>
                </div>
                <div className="button-submit">
                    <button>Войти</button>
                    <p>У вас еще нет аккаунта? <a href="#">Создать</a> </p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;
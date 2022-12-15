import { useState } from "react"
import { Link } from "react-router-dom"

import { loginUser } from "../../../serviсes/authentication"

import title from "../../../assets/loadingPage/title.png"
import './loginPage.scss'

// TODO сделать модалку с сообщением об ошибке

const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [modal, setModal] = useState(false)
    const [access, setAccess] = useState(false)

    const closeModal = () => {
        setModal(false)
    }

    const signIn = () => {
        loginUser(login, password)
            .then(() => {
                setAccess(true)
            })
            .catch(() => {
                setModal(true)
            })
    }

    return (
        <>
            <div className={modal ? 'modal-bg' : null }></div>
            <div className={ modal ? "sign-in-page no-touch" : "sign-in-page"}>
                <div >
                    <img src={title} alt="title" className="sign-in-page__title" />
                </div>
                <form className="sign-in-page__form">
                    <div className="field">
                        <label htmlFor="login">Логин</label>
                        <input type="text" id="login" placeholder="Логин" className="field__login" value={login} onChange={(event) => setLogin(event.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="pass">Пароль</label>
                        <input type="password" id="pass" placeholder="Пароль" className="field__pass" value={password} onChange={(event) => setPassword(event.target.value)} />
                        <Link to={'/recoveryPassword'}><p className="recovery-client">Забыли пароль?</p></Link>
                    </div>
                    <div className="button-submit">
                        <Link to={access ? '/listOfCharacters' : null} ><button onClick={() => signIn()}>Войти</button></Link>
                        <p>У вас еще нет аккаунта? <Link to={'/createAccount'}><span>Создать</span></Link></p>
                    </div>
                </form>

                {modal ? <Modal active={closeModal} /> : null}

            </div>
        </>
    )
}


const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__info">
                <p className="modal__title">Ошибка</p>
                <p className="modal__error">Введен  неверные логин или пароль</p>
            </div>
            <div>
                <button className="modal__button" onClick={() => props.active()}>Ок</button>
            </div>
        </div>
    )
}

export default LoginPage;
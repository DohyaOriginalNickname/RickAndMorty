import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { loginUser } from "serviсes/authentication"

import Modal from "components/UI/modal/modal"

import title from "assets/loadingPage/title.png"
import './loginPage.scss'

const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [modal, setModal] = useState(false)
    const [recoveryPassword, setRecoveryPassword] = useState(false)

    const navigate = useNavigate()

    const errorMessage = 'Введен  неверные логин или пароль'

    const closeModal = () => {
        setModal(modal => !modal)
    }

    const signIn = (e) => {
        e.preventDefault()
        loginUser(login, password)
            .then(() => {
                navigate('/listOfCharacters')
            })
            .catch(() => {
                setModal(modal => !modal)
                setRecoveryPassword(true)
            })
    }

    return (
        <>
            <div className={modal ? 'modal-bg' : null}></div>
            <div className={modal ? "sign-in-page no-touch" : "sign-in-page"}>
                <div >
                    <img src={title} alt="title" className="sign-in-page__title" />
                </div>
                <form className="sign-in-page__form" autoComplete="off">
                    <div className="field">
                        <label htmlFor="login">Логин</label>
                        <input type="text" id="login" placeholder="Логин" className="field__login" value={login} onChange={(event) => setLogin(event.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="pass">Пароль</label>
                        <input type="password" id="pass" placeholder="Пароль" className="field__pass" value={password} onChange={(event) => setPassword(event.target.value)} />
                        {recoveryPassword ? <Link to={'/recoveryPassword'}><p className="recovery-client">Забыли пароль?</p></Link> : null}
                    </div>
                    <div className="button-submit">
                        <button disabled={login !== '' && password !== '' ? false : true} onClick={(e) => signIn(e)}>Войти</button>
                        <p>У вас еще нет аккаунта? <Link to={'/createAccount'}><span>Создать</span></Link></p>
                    </div>
                </form>

                {modal ? <Modal active={closeModal} errorMessage={errorMessage} /> : null}

            </div>
        </>
    )
}



export default LoginPage;
import './passwordRecoveryPage.scss'

import arrow from '../../../assets/other/Arrow.png'

const PasswordRecovery = () => {
    return(
        <div className="recovery-page">
            <div className="to-back-button">
                <div>
                    <img src={arrow} alt="arrow"/>
                </div>
                <div className="title">
                    <p>Восстановление</p>
                </div>
            </div>
            <div>
                <form  className="recovery-page__form">
                    <div className="field">
                        <label htmlFor="login">Логин</label>
                        <input type="text" id="login" placeholder="Логин" className="field__login"/>
                    </div>
                    <div className="field">
                        <label htmlFor="pass">Пароль</label>
                        <input type="password" id="pass" placeholder="Пароль" className="field__pass"/>
                    </div>
                    <div className="button-submit">
                        <button>Изменить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordRecovery;
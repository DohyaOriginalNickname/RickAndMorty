import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { changeUserData } from 'serviсes/authentication';
import { Context } from 'components/ThemeContext/themeContext';

import Modal from 'components/UI/modal/modal';
import './nameChange.scss'
import ArrowBlackTheme from 'assets/other/blackThemeItems/Arrow.png'
import ArrowWhiteTheme from 'assets/other/whiteThemeItems/Arrow.png'

const NameChange = () => {

    const [newName, setNewName] = useState('')
    const [newMiddleName, setMiddleName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [modal, setModal] = useState('')
    const [context, setContext] = useContext(Context)

    const errorMessage = 'Проверьте подключение к интернету или проверьте вводимые поля'

    const cancel = () => {
        setModal(modal => !modal)
    }

    const changeData = () => {
        if (newName !== '' && newMiddleName !== '' && newSurname !== '') {
            changeUserData({ newName, newMiddleName, newSurname })
                .catch(() => setModal(modal => !modal))
        } else {
            setModal(modal => !modal)
        }
    }

    return (
        <>
            <div className={modal ? "modal-bg" : null}></div>
            <div className={modal ? 'name-change-page no-touch' : 'name-change-page'}>

                <div className='exit'>
                    <Link to={'/changeUserData'}>
                        <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="arrow" />
                    </Link>
                    <p>Изменить ФИО</p>
                </div>


                <form className="user-data" autoComplete='off'>
                    <div className="field">
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" placeholder="Имя" className="field__login" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="surname">Фамилия</label>
                        <input type="text" id="surname" placeholder="Фамилия" className="field__login" value={newSurname} onChange={(e) => setNewSurname(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="middleName">Отчество</label>
                        <input type="text" id="middleName" placeholder="Отчество" className="field__login" value={newMiddleName} onChange={(e) => setMiddleName(e.target.value)} />
                    </div>
                </form>

                <div className='button-submit'>
                    <button onClick={() => changeData()}>Сохранить</button>
                </div>


                {modal ? <Modal active={cancel} errorMessage={errorMessage} /> : null}
            </div>
        </>
    )
}

export default NameChange;
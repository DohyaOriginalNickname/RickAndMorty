import { useState } from 'react';
import { Link } from 'react-router-dom';
import { changeUserData } from '../../../../serviсes/authentication';

import Modal from '../../../UI/modal/modal';
import './nameChange.scss'
import ArrowBlackTheme from '../../../../assets/other/blackThemeItems/Arrow.png'
import ArrowWhiteTheme from '../../../../assets/other/whiteThemeItems/Arrow.png'

const NameChange = () => {

    const [newName, setNewName] = useState('')
    const [newMiddleName, setMiddleName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [modal, setModal] = useState('')

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

                <div className='aaaa'>
                    <Link to={'/changeUserData'}>
                        <img src={localStorage.getItem('theme') === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="arrow" />
                    </Link>
                    <p>Изменить ФИО</p>
                </div>


                <div className="user-data">
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
                </div>

                <div className='button-submit'>
                    <button onClick={() => changeData()}>Сохранить</button>
                </div>


                {modal ? <Modal active={cancel} errorMessage={errorMessage} /> : null}
            </div>
        </>
    )
}

export default NameChange;
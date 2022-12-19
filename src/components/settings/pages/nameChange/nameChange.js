import { useState } from 'react';
import { Link } from 'react-router-dom';
import { changeUserData } from '../../../../serviсes/authentication';
import './nameChange.scss'
import arrow from '../../../../assets/other/Arrow.png'

const NameChange = () => {

    const [newName, setNewName] = useState('')
    const [newMiddleName, setMiddleName] = useState('')
    const [newSurname, setNewSurname] = useState('')

    const changeData = () => {
        changeUserData({newName, newMiddleName, newSurname})
    }

    return (
        <div className='name-change-page'>

            <div className='aaaa'>
                <Link to={'/changeUserData'}>
                    <img src={arrow} alt="arrow" />
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
        </div>
    )
}

export default NameChange;
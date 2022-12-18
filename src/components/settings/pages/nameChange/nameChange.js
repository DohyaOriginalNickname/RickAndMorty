import { Link } from 'react-router-dom';

import './nameChange.scss'
import arrow from '../../../../assets/other/Arrow.png'

const NameChange = () => {
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
                    <input type="text" id="name" placeholder="Имя" className="field__login" />
                </div>
                <div className="field">
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" id="surname" placeholder="Фамилия" className="field__login" />
                </div>
                <div className="field">
                    <label htmlFor="middleName">Отчество</label>
                    <input type="text" id="middleName" placeholder="Отчество" className="field__login" />
                </div>
            </div>

            <div className='button-submit'>
                <button>Сохранить</button>
            </div>
        </div>
    )
}

export default NameChange;
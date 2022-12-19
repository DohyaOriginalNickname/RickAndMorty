import './modal.scss'

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

export default Modal
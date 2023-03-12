import notFoundByFilter from 'assets/notFoundImages/notFoundByFilter.png'
import './notFoundByFilter.scss'

const NotFoundByFilter = () => {
    return (
        <div className="not-found-by-filters">
            <img src={notFoundByFilter} alt="" />
            <p>По данным фильтра ничего не найдено</p>
        </div>
    )
}

export default NotFoundByFilter;
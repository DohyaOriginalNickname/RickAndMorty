import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCharactersFilters, clearCharactersFilters } from '../../../store/slice'

import './filtersPage.scss'

import ArrowBlackTheme from '../../../assets/other/blackThemeItems/Arrow.png'
import ArrowWhiteTheme from '../../../assets/other/whiteThemeItems/Arrow.png'
import clearFilters from '../../../assets/other/ClearFilters.png'
import StartTo from '../../../assets/other/StartTo.png'
import EndTo from '../../../assets/other/EndTo.png'

const FiltersPage = (props) => {

    const [arrayOfFilters, setArrayOfFilters] = useState([])
    const refs = useRef([])
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.filter.paramsForCharatersQuery)

    const DataOfFilters = ['alive', 'dead', 'unknown', 'male', 'female', 'genderless']

    const clearOfFilters = () => {
        dispatch(clearCharactersFilters())
        refs.current.forEach(item => item.checked = false)
    }

    useEffect(() => {
        const data = DataOfFilters.map((item, index) => {
            if (filter.status !== undefined && filter.gender !== undefined) {
                if (filter.status.slice(8) === item || filter.gender.slice(8) === item) {
                    return (
                        <li key={index}>
                            <input type="checkbox" name={item} id={item} value={item} ref={el => refs.current[index] = el} defaultChecked className="custom-checkbox" />
                            <label htmlFor={item}></label>
                            <p>{item}</p>
                        </li>
                    )
                }
            }
            return (
                <li key={index}>
                    <input type="checkbox" name={item} id={item} value={item} ref={el => refs.current[index] = el} className="custom-checkbox" />
                    <label htmlFor={item}></label>
                    <p>{item}</p>
                </li>
            )
        })
        setArrayOfFilters([...data])
    }, [])


    const changeStatusOfFilters = (event) => {
        if (event.target.value !== undefined) {
            if (event.target.value === 'alive' || event.target.value === 'dead' || event.target.value === 'unknown') {
                dispatch(addCharactersFilters(`&status=${event.target.value}`))
            }
            if (event.target.value === 'male' || event.target.value === 'female' || event.target.value === 'genderless') {
                dispatch(addCharactersFilters(`&gender=${event.target.value}`))
            }
        }
    }

    return (
        <>
            <div className={localStorage.getItem('theme') === 'dark' ? "header-filters dark-theme-secondary" : "header-filters"}>
                <img src={localStorage.getItem('theme') === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="" onClick={() => props.da()} />
                <p className="title">Фильтры</p>
                <img src={clearFilters} alt="" className={Object.keys(filter).length > 0 ? 'clear-filter-ready' : 'clear-filter-not-ready'} onClick={() => clearOfFilters()} />
            </div>

            <div className="main-filters" onClick={(e) => changeStatusOfFilters(e)}>
                <div className="sort-block">
                    <div className="title">Сортировать</div>
                    <div className="sort-by-alphabetical">
                        <p>По алфавиту</p>
                        <img src={StartTo} alt="" />
                        <img src={EndTo} alt="" />
                    </div>
                </div>
                <div className={localStorage.getItem('theme') === 'dark' ? "dark-theme-border" : "light-theme-border"}></div>
                <div className="sort-block">
                    <div className="title">Статус</div>
                    <ul className="sort">
                        {arrayOfFilters.slice(0, 3)}
                    </ul>
                </div>
                <div className={localStorage.getItem('theme') === 'dark' ? "dark-theme-border" : "light-theme-border"}></div>
                <div className="sort-block">
                    <div className="title">Пол</div>
                    <ul className="sort">
                        {arrayOfFilters.slice(3)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FiltersPage;
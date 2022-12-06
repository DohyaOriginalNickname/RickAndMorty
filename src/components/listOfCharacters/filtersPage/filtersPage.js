import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCharactersFilters } from '../../../store/slice'

import './filtersPage.scss'

import arrow from '../../../assets/other/Arrow.png'
import clearFilters from '../../../assets/other/ClearFilters.png'
import StartTo from '../../../assets/other/StartTo.png'
import EndTo from '../../../assets/other/EndTo.png'

const FiltersPage = (props) => {

    const [clearFilter, setClearFilter] = useState(false)
    const dispatch = useDispatch()

    const aaa = (event) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            setClearFilter(true)
        }
    }

    const bbb = (event) => {
        if (event.target.value !== undefined) {
            if (event.target.value === 'alive' || event.target.value === 'dead' || event.target.value === 'unknown' ) {
                dispatch(addCharactersFilters(`&status=${event.target.value}`))
            }
            if (event.target.value === 'male' || event.target.value === 'female' || event.target.value === 'genderless' ) {
                dispatch(addCharactersFilters(`&gender=${event.target.value}`))
            }
        }
    }

    return (
        <>
            <div className="header-filters">
                <img src={arrow} alt="" onClick={() => props.da()} />
                <p className="title">Фильтры</p>
                <img src={clearFilters} alt="" className={clearFilter ? 'clear-filter-ready' : 'clear-filter-not-ready'}  />
            </div>

            <div className="main-filters" onChange={(e) => aaa(e)} onClick={(e) => bbb(e)}>
                <div className="sort-block">
                    <div className="title">Сортировать</div>
                    <div className="sort-by-alphabetical">
                        <p>По алфавиту</p>
                        <img src={StartTo} alt="" />
                        <img src={EndTo} alt="" />
                    </div>
                </div>
                <div className="border"></div>
                <div className="sort-block">
                    <div className="title">Статус</div>
                    <div className="sort">
                        <div>
                            <input type="checkbox" name="Alive" id="Живой" value="alive" className="custom-checkbox" />
                            <label htmlFor="Живой"></label>
                            <p>Живой</p>
                        </div>
                        <div>
                            <input type="checkbox" name="Dead" id="Мертвый" value="dead" className="custom-checkbox" />
                            <label htmlFor="Мертвый"></label>
                            <p>Мертвый</p>
                        </div>
                        <div>
                            <input type="checkbox" name="unknown" id="Неизвестно" value="unknown" className="custom-checkbox" />
                            <label htmlFor="Неизвестно"></label>
                            <p>Неизвестно</p>
                        </div>
                    </div>
                </div>
                <div className="border"></div>
                <div className="sort-block">
                    <div className="title">Пол</div>
                    <div className="sort">
                        <div>
                            <input type="checkbox" name="" id="Мужской" value="male" className="custom-checkbox" />
                            <label htmlFor="Мужской"></label>
                            <p>Мужской</p>
                        </div>
                        <div>
                            <input type="checkbox" name="" id="Женский" value="female" className="custom-checkbox" />
                            <label htmlFor="Женский"></label>
                            <p>Женский</p>
                        </div>
                        <div>
                            <input type="checkbox" name="" id="Бесполый" value="genderless" className="custom-checkbox" />
                            <label htmlFor="Бесполый"></label>
                            <p>Бесполый</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiltersPage;
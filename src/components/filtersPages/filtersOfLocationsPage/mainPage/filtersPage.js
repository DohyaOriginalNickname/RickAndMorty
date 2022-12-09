import { useState } from 'react'

import './filtersPage.scss'

import arrow from '../../../../assets/other/Arrow.png'
import arrow2 from '../../../../assets/other/Arrow2.png'
import clearFilters from '../../../../assets/other/ClearFilters.png'
import StartTo from '../../../../assets/other/StartTo.png'
import EndTo from '../../../../assets/other/EndTo.png'

const FiltersOfLocationsPage = (props) => {

    const [ clearFilter, setClearFilter ] = useState(false)

    const aaa = (event) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
            setClearFilter(!clearFilter)
        }
    }

    return (
        <>
            <div className="header-filters">
                <img src={arrow} alt="" onClick={() => props.da()}/>
                <p className="title">Фильтры</p>
                <img src={clearFilters} alt="" className={clearFilter ? 'clear-filter-ready' : 'clear-filter-not-ready'} />
            </div>

            <div className="main-filters-location" onChange={(e) => aaa(e)}>
                <div className="sort-block">
                    <div className="title">Сортировать</div>
                    <div className="sort-by-alphabetical">
                        <p>По алфавиту</p>
                        <img src={StartTo} alt="" value="asdas" />
                        <img src={EndTo} alt="" />
                    </div>
                </div>
                <div className="border"></div>
                <div className='sort-block'>
                    <div className='title'>Сортировать по</div>
                    <div className='sort' onClick={() => props.changePage(1)}>
                        <div>
                            <p>Тип</p>
                            <p>Выберите тип локации</p>
                        </div>
                        <img src={arrow2} alt="" />
                    </div>
                </div>
                <div className='sort-block'>
                    <div className='sort' onClick={() => props.changePage(2)}>
                        <div>
                            <p>Измерение</p>
                            <p>Выберите измерения локации</p>
                        </div>
                        <img src={arrow2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiltersOfLocationsPage;
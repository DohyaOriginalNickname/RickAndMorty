import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addLocationsFilters } from '../../../../store/slice'

import arrow from '../../../../assets/other/Arrow.png'

import './subPagesFilters.scss'

const FilterTypePage = (props) => {

    const arrayOfRefs = useRef([])
    const dispatch = useDispatch()
    const filtersOfTypeLocation = ['Planet', 'Microverse', 'Space station', 'Fantasy town', 'Resort', 'TV', 'Dream', 'Dimension', 'Mount', 'Consciouness', 'liquid', 'Diegesis', 'Spacecraft', 'unknown']
    const filtersOfDimensionLocation = ['Dimension 35-C', 'dimension C-137', 'Dimension C-500A', 'Dimension J19ζ7', 'Fantasy Dimension', 'Replacment dimension']

    const changeActiveFilter = (idRef) => {
        arrayOfRefs.current.forEach(item => item.classList.remove('active-filter'))
        arrayOfRefs.current[idRef].classList.add('active-filter')

        if (filtersOfTypeLocation.includes(arrayOfRefs.current[idRef].textContent)) {
            dispatch(addLocationsFilters(`&type=${arrayOfRefs.current[idRef].textContent}`))
        } else {
            dispatch(addLocationsFilters(`&dimension=${arrayOfRefs.current[idRef].textContent}`))
        }
    }

    const elements = props.num === 1 ?
        filtersOfTypeLocation.map((item, refIndex) => <li key={refIndex} ref={el => arrayOfRefs.current[refIndex] = el} onClick={() => changeActiveFilter(refIndex)} >{item}</li>)
        : filtersOfDimensionLocation.map((item, refIndex) => <li key={refIndex} ref={el => arrayOfRefs.current[refIndex] = el} onClick={() => changeActiveFilter(refIndex)} >{item}</li>)

    return (
        <>
            <div className="header-filters">
                <img src={arrow} alt="" onClick={() => props.changePage(0)} />
                <p className="title">{props.num === 1 ? 'Выберите тип' : 'Выберите измерение'}</p>
            </div>

            <div className='list-of-filter'>
                <p>Не выбрано</p>
                <div className='border'></div>
                <ul>
                    {elements}
                </ul>
            </div>
        </>
    )
}

export default FilterTypePage;
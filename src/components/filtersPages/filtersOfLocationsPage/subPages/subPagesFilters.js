import { useEffect, useRef, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLocationsFilters } from 'store/slice'
import { Context } from 'components/ThemeContext/themeContext';

import ArrowBlackTheme from 'assets/other/blackThemeItems/Arrow.png'
import ArrowWhiteTheme from 'assets/other/whiteThemeItems/Arrow.png'

import './subPagesFilters.scss'

const FilterTypePage = (props) => {

    const [elements, setElements] = useState([])
    const arrayOfRefs = useRef([])
    const [context, setContext] = useContext(Context)
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter.paramsForLocationsQuery)

    const filtersOfTypeLocation = ['Planet', 'Microverse', 'Space station', 'Fantasy town', 'Resort', 'TV', 'Dream', 'Dimension', 'Mount', 'Consciouness', 'liquid', 'Diegesis', 'Spacecraft', 'unknown']
    const filtersOfDimensionLocation = ['Dimension 35-C', 'Dimension C-137', 'Dimension C-500A', 'Dimension J19ζ7', 'Fantasy Dimension', 'Replacement Dimension']

    useEffect(() => {
        const array = props.num === 1 ?
            filtersOfTypeLocation.map((item, refIndex) => {
                if (Object.keys(filter).length !== 0 && filter.type !== undefined && filter.type.slice(6) === item) {
                    return <li key={refIndex} ref={el => arrayOfRefs.current[refIndex] = el} onClick={() => changeActiveFilter(refIndex)} className='active-filter' >{item}</li>
                } else {
                    return <li key={refIndex} ref={el => arrayOfRefs.current[refIndex] = el} onClick={() => changeActiveFilter(refIndex)} >{item}</li>
                }
            })
            : filtersOfDimensionLocation.map((item, refIndex) => {
                if (Object.keys(filter).length !== 0 && filter.dimension !== undefined && filter.dimension.slice(11) === item) {
                    return <li key={refIndex} ref={el => arrayOfRefs.current[refIndex] = el} onClick={() => changeActiveFilter(refIndex)} className='active-filter' >{item}</li>
                } else {
                    return <li key={refIndex} ref={el => arrayOfRefs.current[refIndex] = el} onClick={() => changeActiveFilter(refIndex)} >{item}</li>
                }
            })
        setElements([...array])
    }, [])

    const changeActiveFilter = (idRef) => {
        arrayOfRefs.current.forEach(item => item.classList.remove('active-filter'))
        arrayOfRefs.current[idRef].classList.add('active-filter')

        if (filtersOfTypeLocation.includes(arrayOfRefs.current[idRef].textContent)) {
            dispatch(addLocationsFilters(`&type=${arrayOfRefs.current[idRef].textContent}`))
        } else {
            dispatch(addLocationsFilters(`&dimension=${arrayOfRefs.current[idRef].textContent}`))
        }
    }

    const aaa = () => {
        if (props.num === 1) {
            if (filter.type) {
                return filter.type.slice(6)
            } else {
                return "Не выбрано"
            }
        } else {
            if (filter.dimension) {
                return filter.dimension.slice(11)
            } else {
                return "Не выбрано"
            }
        }
    }

    return (
        <>
            <div className="header-filters">
                <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="" onClick={() => props.changePage(0)} />
                <p className="title">{props.num === 1 ? 'Выберите тип' : 'Выберите измерение'}</p>
            </div>

            <div className='list-of-filter'>
                <p>{Object.keys(filter).length !== 0 ? aaa() : "Не выбрано"}</p>
                <div className= "border"></div>
                <ul>
                    {elements}
                </ul>
            </div>
        </>
    )
}

export default FilterTypePage;
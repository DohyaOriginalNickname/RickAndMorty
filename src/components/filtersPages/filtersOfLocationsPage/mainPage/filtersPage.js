import { useContext } from 'react';
import { useDispatch } from 'react-redux'
import { clearLocationsFilters } from '../../../../store/slice'
import { useSelector } from 'react-redux'
import { Context } from '../../../ThemeContext/themeContext';
import './filtersPage.scss'

import ArrowBlackTheme from '../../../../assets/other/blackThemeItems/Arrow.png'
import ArrowBlackTheme2 from '../../../../assets/other/blackThemeItems/Arrow2.png'

import ArrowWhiteTheme from '../../../../assets/other/whiteThemeItems/Arrow.png'
import ArrowWhiteTheme2 from '../../../../assets/other/whiteThemeItems/Arrow2.png'

import clearFilters from '../../../../assets/other/ClearFilters.png'
import StartTo from '../../../../assets/other/StartTo.png'
import EndTo from '../../../../assets/other/EndTo.png'

const FiltersOfLocationsPage = (props) => {

    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter.paramsForLocationsQuery)
    const [context, setContext] = useContext(Context)

    const clearOfFilters = () => {
        dispatch(clearLocationsFilters())
    }

    return (
        <>
            <div className="header-filters">
                <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="" onClick={() => props.changeToFilterPage()}/>
                <p className="title">Фильтры</p>
                <img src={clearFilters} alt="" className={ Object.keys(filter).length > 0 ? 'clear-filter-ready' : 'clear-filter-not-ready'} onClick={() => clearOfFilters()}/>
            </div>

            <div className="main-filters-location">
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
                            <p>{filter.type ? filter.type.slice(6) : 'Тип'}</p>
                            <p>Выберите тип локации</p>
                        </div>
                        <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" />
                    </div>
                </div>
                <div className='sort-block'>
                    <div className='sort' onClick={() => props.changePage(2)}>
                        <div>
                            <p>{filter.dimension ? filter.dimension.slice(11) : 'Измерение'}</p>
                            <p>Выберите измерения локации</p>
                        </div>
                        <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiltersOfLocationsPage;
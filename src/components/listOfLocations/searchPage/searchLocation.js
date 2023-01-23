import { useState, useRef, useEffect, useContext } from "react"
import { useGetLocationByNameQuery } from '../../../serviсes/locationsApi'
import { Context } from '../../ThemeContext/themeContext';

import ItemOfLocationsList from "../../UI/ItemOfLocationsList/ItemOfLocationsList"
import './searchLocations.scss'

import CancelBlackTheme from '../../../assets/other/blackThemeItems/Cancel.png'
import ArrowBlackTheme from '../../../assets/other/blackThemeItems/Arrow.png'

import CancelWhiteTheme from '../../../assets/other/whiteThemeItems/Cancel.png'
import ArrowWhiteTheme from '../../../assets/other/whiteThemeItems/Arrow.png'
import LocationNotFound from '../../../assets/notFoundImages/LocationNotFound.png'

const SearchLocation = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [countPage, setCountPage] = useState(1)
    const [foundLocation, setFoundLocations] = useState([])
    const [context, setContext] = useContext(Context)
    
    const { data, error } = useGetLocationByNameQuery({inputValue, page: countPage})

    const refObserver = useRef(null)
    const ref = useRef(null)

    useEffect(() => {
        if (data !== undefined) {
            sessionStorage.setItem('data-info', JSON.stringify(data.info))
            setFoundLocations([...foundLocation, ...data.results])
        }
    }, [data])

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
        setCountPage(1)
        setFoundLocations([])
    }

    const plusPage = () => {
        const aaa = JSON.parse(sessionStorage.getItem('data-info'))
        if (aaa.next !== null) {
            setCountPage(countPage => countPage + 1)
        }
    }

    const renderList = data !== undefined ? foundLocation.map(({ name, dimension, type, id }) => {
        return <ItemOfLocationsList key={id} type={type} image={props.image} name={name} dimension={dimension} id={id} />
    }) : null


    const options = {
        root: ref.current,
        rootMargin: '0px',
        threshold: 1.0
    }

    const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
            plusPage()
        }
    }
    const observer = new IntersectionObserver(callback, options)

    useEffect(() => {
        observer.observe(refObserver.current)
    }, [])

    return (
        <>
            <div className="locations-page__search_active">
                <div>
                    <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="search" onClick={() => props.changeToSearchPage()} />
                </div>
                <div>
                    <input type="text" placeholder="Найти локацию" autoFocus onChange={(e)=> changeInputValue(e)} value={inputValue} />
                </div>
                <div>
                    <img src={context === 'dark' ? CancelBlackTheme : CancelWhiteTheme} alt="filter" onClick={() => setInputValue('')} />
                </div>
            </div>
            <div className="search-locations-list">
                <p className="result-title">Результаты поиска</p>
                <ul className="found-locations" ref={ref}>
                    {
                        !error ? renderList :
                            <div className="not-found-locations">
                                <img src={LocationNotFound} alt="" />
                                <p>Локации с таким названием не найдено</p>
                            </div>
                    }
                    <div ref={refObserver}></div>
                </ul>
            </div>
        </>
    )
}

export default SearchLocation;
import { useState, useRef, useEffect, useContext } from 'react'
import { useGetEpisodeByNameQuery } from '../../../serviсes/episodsApi'
import { Context } from '../../ThemeContext/themeContext';
import './searchEpisode.scss'

import ItemOfEpisodesList from '../../UI/ItemOfEpisodesList/ItemOfEpisodesList'

import CancelBlackTheme from '../../../assets/other/blackThemeItems/Cancel.png'
import ArrowBlackTheme from '../../../assets/other/blackThemeItems/Arrow.png'

import CancelWhiteTheme from '../../../assets/other/whiteThemeItems/Cancel.png'
import ArrowWhiteTheme from '../../../assets/other/whiteThemeItems/Arrow.png'

import EpisodeNotFound from '../../../assets/notFoundImages/EpisodeNotFound.png'

const SearchEpisode = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [countPage, setCountPage] = useState(1)
    const [foundEpisodes, setFoundEpisodes] = useState([])
    const [context, setContext] = useContext(Context)
    
    const { data, error } = useGetEpisodeByNameQuery({ inputValue, page: countPage })

    const refObserver = useRef(null)
    const ref = useRef(null)

    useEffect(() => {
        if (data !== undefined) {
            sessionStorage.setItem('data-info', JSON.stringify(data.info))
            setFoundEpisodes([...foundEpisodes, ...data.results])
        }
    }, [data])

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
        setCountPage(1)
        setFoundEpisodes([])
    }
    
    const plusPage = () => {
        const aaa = JSON.parse(sessionStorage.getItem('data-info'))
        if (aaa.next !== null) {
            setCountPage(countPage => countPage + 1)
        }
    }

    const renderList = data !== undefined ? foundEpisodes.map(({ name, air_date, id }) => {
        return <ItemOfEpisodesList key={id} image={props.image} name={name} air_date={air_date} id={id} />
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
            <div className="episodes-page__search_active">
                <div>
                    <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="search" onClick={() => props.changePage()} />
                </div>
                <div>
                    <input type="text" placeholder="Найти локацию" autoFocus onChange={changeInputValue} value={inputValue} />
                </div>
                <div>
                    <img src={context === 'dark' ? CancelBlackTheme : CancelWhiteTheme} alt="filter" onClick={() => setInputValue('')} />
                </div>
            </div>
            <div className="search-episodes-list">
                <p className="result-title">Результаты поиска</p>
                <ul className="found-episodes" ref={ref}>
                    {
                        !error ? renderList :
                            <div className="not-found-episodes">
                                <img src={EpisodeNotFound} alt="" />
                                <p>Эпизода с таким названием нет</p>
                            </div>
                    }
                    <div ref={refObserver}></div>
                </ul>
            </div>
        </>
    )
}

export default SearchEpisode;
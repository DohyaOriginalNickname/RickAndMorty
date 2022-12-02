import { useState } from 'react'
import { useGetEpisodeByNameQuery } from '../../../serviсes/episodsApi'
import './searchEpisode.scss'

import ItemOfEpisodesList from '../../UI/ItemOfEpisodesList/ItemOfEpisodesList'

import Cancel from '../../../assets/other/Cancel.png'
import arrow from '../../../assets/other/Arrow.png'
import EpisodeNotFound from '../../../assets/notFoundImages/EpisodeNotFound.png'

const SearchEpisode = (props) => {
    const [inputValue, setInputValue] = useState('')
    const { data, error } = useGetEpisodeByNameQuery(inputValue)

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const renderList = data !== undefined ? data.results.map(({ name, air_date, id }) => {
        return <ItemOfEpisodesList key={id} image={props.image} name={name} air_date={air_date} id={id} />
    }) : null

    return (
        <>
            <div className="episodes-page__search_active">
                <div>
                    <img src={arrow} alt="search" onClick={() => props.da()} />
                </div>
                <div>
                    <input type="text" placeholder="Найти локацию" autoFocus onChange={changeInputValue} value={inputValue} />
                </div>
                <div>
                    <img src={Cancel} alt="filter" onClick={() => setInputValue('')} />
                </div>
            </div>
            <div className="search-episodes-list">
                <p className="result-title">Результаты поиска</p>
                <ul className="found-episodes">
                    {
                        !error ? renderList :
                            <div className="not-found-episodes">
                                <img src={EpisodeNotFound} alt="" />
                                <p>Эпизода с таким названием нет</p>
                            </div>
                    }
                </ul>
            </div>
        </>
    )
}

export default SearchEpisode;
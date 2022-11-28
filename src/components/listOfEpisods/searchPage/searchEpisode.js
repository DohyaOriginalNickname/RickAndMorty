import { useState } from 'react'
import { useGetAllEpisodsQuery } from '../../../serviсes/episodsApi'
import './searchEpisode.scss'

import ItemOfEpisodesList from '../../UI/ItemOfEpisodesList/ItemOfEpisodesList'

import Cancel from '../../../assets/other/Cancel.png'
import arrow from '../../../assets/other/Arrow.png'

const SearchEpisode = (props) => {
    const [inputValue, setInputValue] = useState('')
    const { data } = useGetAllEpisodsQuery()

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const renderList = data !== undefined ? data.results.map(({name,air_date,id}) => {
        return <ItemOfEpisodesList key={id} image={props.image} name={name} air_date={air_date} id={id}/>
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
                    {renderList}
                </ul>
            </div>
        </>
    )
}

export default SearchEpisode;
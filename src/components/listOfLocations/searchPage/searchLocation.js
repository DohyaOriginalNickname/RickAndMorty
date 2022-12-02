import { useState } from "react"
import { useGetLocationByNameQuery } from '../../../serviсes/locationsApi'

import ItemOfLocationsList from "../../UI/ItemOfLocationsList/ItemOfLocationsList"
import './searchLocations.scss'

import Cancel from '../../../assets/other/Cancel.png'
import arrow from '../../../assets/other/Arrow.png'
import LocationNotFound from '../../../assets/notFoundImages/LocationNotFound.png'

const SearchLocation = (props) => {

    const [inputValue, setInputValue] = useState('')
    const { data, error } = useGetLocationByNameQuery(inputValue)

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const renderList = data !== undefined ? data.results.map(({ name, dimension, id }) => {
        return <ItemOfLocationsList key={id} image={props.image} name={name} dimension={dimension} id={id} />
    }) : null

    return (
        <>
            <div className="locations-page__search_active">
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
            <div className="search-locations-list">
                <p className="result-title">Результаты поиска</p>
                <ul className="found-locations">
                    {
                        !error ? renderList :
                            <div className="not-found-locations">
                                <img src={LocationNotFound} alt="" />
                                <p>Локации с таким названием не найдено</p>
                            </div>
                    }
                </ul>
            </div>
        </>
    )
}

export default SearchLocation;
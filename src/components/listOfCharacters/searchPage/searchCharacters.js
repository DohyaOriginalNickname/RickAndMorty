import { useState } from "react"
import { useGetAllCharactersQuery } from "../../../serviсes/characterApi"
import ItemList from "../../UI/ItemList"

import './searchCharacters.scss'

import Cancel from '../../../assets/other/Cancel.png'
import arrow from '../../../assets/other/Arrow.png'

const SearchCharacter = (props) => {

    const [inputValue, setInputValue] = useState('')
    const { data } = useGetAllCharactersQuery()

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const renderList = data !== undefined ? data.results.map(({image,status,name,species,gender,id}) => {
        return <ItemList key={id} image={image} status={status} name={name} species={species} gender={gender}/>
    }) : null

    return (
        <>
            <div className="characters-page__search_active">
                <div>
                    <img src={arrow} alt="search" />
                </div>
                <div>
                    <input type="text" placeholder="Найти персонажа" onChange={changeInputValue} />
                </div>
                <div>
                    <img src={Cancel} alt="filter" onClick={() => props.da()}/>
                </div>
            </div>
            <div className="search-list">
                <p>Результаты поиска</p>
                <ul className="found-characters">
                    {renderList}
                </ul>
            </div>
        </>
    )
}

export default SearchCharacter
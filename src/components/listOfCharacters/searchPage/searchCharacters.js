import { useState } from "react"
import { useGetAllCharactersQuery } from "../../../serviсes/characterApi"
import ItemOfCharactersList from "../../UI/ItemOfCharactersList/ItemOfCharactersList"

import './searchCharacters.scss'

import Cancel from '../../../assets/other/Cancel.png'
import arrow from '../../../assets/other/Arrow.png'
import CharacterNotFound from '../../../assets/notFoundImages/CharacterNotFound.png'

const SearchCharacter = (props) => {

    const [inputValue, setInputValue] = useState('')
    const { data } = useGetAllCharactersQuery()

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const renderList = data !== undefined ? data.results.map(({ image, status, name, species, gender, id }) => {
        return <ItemOfCharactersList key={id} image={image} status={status} name={name} species={species} gender={gender} />
    }) : 
        <div className="not-found-characters">
            <img src={CharacterNotFound} alt="" />
            <p>Персонаж с таким именем не найден</p>
        </div>

    return (
        <>
            <div className="characters-page__search_active">
                <div>
                    <img src={arrow} alt="search" onClick={() => props.da()} />
                </div>
                <div>
                    <input type="text" placeholder="Найти персонажа" autoFocus onChange={changeInputValue} value={inputValue} />
                </div>
                <div>
                    <img src={Cancel} alt="filter" onClick={() => setInputValue('')} />
                </div>
            </div>
            <div className="search-character-list">
                <p className="result-title">Результаты поиска</p>
                <ul className="found-characters">
                    {renderList}
                </ul>
            </div>
        </>
    )
}

export default SearchCharacter
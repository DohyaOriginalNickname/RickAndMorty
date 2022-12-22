import { useState, useRef, useEffect } from "react"
import { useGetCharacterByNameQuery } from "../../../serviсes/characterApi"
import ItemOfCharactersList from "../../UI/ItemOfCharactersList/ItemOfCharactersList"
import ListItem from "../ItemList/listItem"

import './searchCharacters.scss'

import Cancel from '../../../assets/other/Cancel.png'
import arrow from '../../../assets/other/Arrow.png'
import CharacterNotFound from '../../../assets/notFoundImages/CharacterNotFound.png'

const SearchCharacter = (props) => {

    const [inputValue, setInputValue] = useState('')
    const [countPage, setCountPage] = useState(0)
    const [searchChar, setSearchChar] = useState([])
    const { data, error } = useGetCharacterByNameQuery({ inputValue, page: countPage })

    const ref = useRef(null)

    useEffect(() => {
        if (data !== undefined) {
            sessionStorage.setItem('data-info', JSON.stringify(data.info))
            setSearchChar([...searchChar, ...data.results])
        }
    }, [data])

    const plusPage = () => {
        const aaa = JSON.parse(sessionStorage.getItem('data-info')) 
        if (aaa.next !== null) {
            setCountPage(countPage => countPage + 1)
        }
    }

    const changeInputValue = (event) => {
        setInputValue(event.target.value)
        setSearchChar([])
        setCountPage(0)
    }

    return (
        <>
            <div className="characters-page__search_active">
                <div>
                    <img src={arrow} alt="search" onClick={() => props.changePage()} />
                </div>
                <div>
                    <input type="text" placeholder="Найти персонажа" autoFocus onChange={(e) => changeInputValue(e)} value={inputValue} />
                </div>
                <div>
                    <img src={Cancel} alt="filter" onClick={() => setInputValue('')} />
                </div>
            </div>
            <div className="search-character-list">
                <p className="result-title">Результаты поиска</p>
                <ul className="found-characters" ref={ref}>
                    {
                        data !== undefined ? !error ? <ListItem data={searchChar} plusPage={plusPage} aaa={ref.current} /> :
                            <div className="not-found-characters">
                                <img src={CharacterNotFound} alt="" />
                                <p>Персонаж с таким именем не найден</p>
                            </div> :
                            <div className="not-found-characters">
                                <img src={CharacterNotFound} alt="" />
                                <p>Персонаж с таким именем не найден</p>
                            </div>
                    }
                </ul>
            </div>
        </>
    )
}

export default SearchCharacter
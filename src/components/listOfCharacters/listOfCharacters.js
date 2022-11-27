
import { useState, useRef, useEffect } from 'react'

import SearchCharacter from './searchPage/searchCharacters'
import ListCharacters from './list/ListPage'


import "./listOfCharacters.scss"

const ListOfCharactersPage = () => {

    const [ da, setDa ] = useState(false)

    const changePage = () => {
        setDa(!da)
    }

    return (
        <div className="characters-page">
            {
                !da ? <ListCharacters da={changePage}/> : <SearchCharacter da={changePage} />
            }
        </div> 
    )
}


export default ListOfCharactersPage;
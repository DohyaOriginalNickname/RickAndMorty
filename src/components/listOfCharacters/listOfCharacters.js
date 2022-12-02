
import { useState } from 'react'

import SearchCharacter from './searchPage/searchCharacters'
import ListCharacters from './listPage/ListCharactersPage'
import FiltersPage from './filtersPage/filtersPage'


import "./listOfCharacters.scss"

const ListOfCharactersPage = () => {

    const [searchPage, setSearchPage] = useState(false)
    const [filterPage, setFilterPage] = useState(false)

    const changePage = () => {
        setSearchPage(!searchPage)
    }

    const da = () => {
        setFilterPage(!filterPage)
    }

    return (
        <div className="characters-page">
            {
                !searchPage ? !filterPage ? <ListCharacters changePage={changePage} da={da}/> : <FiltersPage da={da} /> : <SearchCharacter changePage={changePage} />
            }
        </div>
    )
}


export default ListOfCharactersPage;
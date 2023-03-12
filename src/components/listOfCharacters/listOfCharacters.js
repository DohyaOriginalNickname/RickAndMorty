
import { useState } from 'react'

import SearchCharacter from './searchPage/searchCharacters'
import ListCharacters from './listPage/ListCharactersPage'
import FiltersPage from 'components/filtersPages/filtersOfCharactersPage/filtersPage'


import "./listOfCharacters.scss"

const ListOfCharactersPage = () => {

    const [searchPage, setSearchPage] = useState(false)
    const [filterPage, setFilterPage] = useState(false)

    const changeToSearchPage= () => {
        setSearchPage(!searchPage)
    }

    const changeToFilterPage = () => {
        setFilterPage(!filterPage)
    }

    return (
        <div className="characters-page">
            {
                !searchPage ? !filterPage ? <ListCharacters changeToSearchPage={changeToSearchPage} changeToFilterPage={changeToFilterPage}/> : <FiltersPage changeToFilterPage={changeToFilterPage} /> : <SearchCharacter changeToSearchPage={changeToSearchPage} />
            }
        </div>
    )
}


export default ListOfCharactersPage;
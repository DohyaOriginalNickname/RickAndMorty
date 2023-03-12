import { useState } from 'react'

import './listOfLocations.scss'

import SearchLocation from './searchPage/searchLocation'
import ListLocations from './ListPage/ListLocationsPage'
import FiltersOfLocationsPage from 'components/filtersPages/filtersOfLocationsPage/filtersLocation'

import image from 'assets/image2.png'

const ListOfLocations = () => {

    const [searchPage, setSearchPage] = useState(false)
    const [filterPage, setFilterPage] = useState(false)

    const changeToSearchPage = () => {
        setSearchPage(!searchPage)
    }

    const changeToFilterPage = () => {
        setFilterPage(!filterPage)
    }

    return (
        <div className='locations-page'>
            {
                !searchPage ? !filterPage ? <ListLocations image={image} changeToSearchPage={changeToSearchPage} changeToFilterPage={changeToFilterPage} /> : <FiltersOfLocationsPage changeToFilterPage={changeToFilterPage} /> : <SearchLocation image={image} changeToSearchPage={changeToSearchPage} />
            }
        </div>
    )
}

export default ListOfLocations;
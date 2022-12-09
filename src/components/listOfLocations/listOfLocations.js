import { useState } from 'react'

import './listOfLocations.scss'

import SearchLocation from './searchPage/searchLocation'
import ListLocations from './ListPage/ListLocationsPage'
import FiltersOfLocationsPage from '../filtersPages/filtersOfLocationsPage/filtersLocation'

import image from '../../assets/image2.png'

const ListOfLocations = () => {

    const [searchPage, setSearchPage] = useState(false)
    const [filterPage, setFilterPage] = useState(false)

    const changePage = () => {
        setSearchPage(!searchPage)
    }

    const da = () => {
        setFilterPage(!filterPage)
    }

    return (
        <div className='locations-page'>
            {
                !searchPage ? !filterPage ? <ListLocations image={image} changePage={changePage} da={da} /> : <FiltersOfLocationsPage da={da} /> : <SearchLocation image={image} da={changePage} />
            }
        </div>
    )
}

export default ListOfLocations;
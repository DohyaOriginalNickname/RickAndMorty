import { useState } from 'react'

import './listOfLocations.scss'

import SearchLocation from './searchPage/searchLocation'
import ListLocations from './ListPage/ListLocationsPage'

import image from '../../assets/image2.png'

const ListOfLocations = () => {

    const [ da, setDa ] = useState(false)

    const changePage = () => {
        setDa(!da)
    }

    return (
        <div className='locations-page'>
            {
                !da ? <ListLocations image={image} da={changePage}/> : <SearchLocation image={image} da={changePage}/>
            }
        </div>
    )
}

export default ListOfLocations;
import { useState } from 'react';
import SearchEpisode from './searchPage/searchEpisode';
import ListEpisodes from './ListPage/ListOfEpisodes';
import './listOfEpisods.scss'

import image from '../../assets/Rectangle.png'

const ListOfEpisods = () => {

    const [ ChangePage, setChangePage] = useState(false)

    const changePage = () => {
        setChangePage(!ChangePage)
    }


    return (
        <div className='episodes-page'>
            { !ChangePage ? <ListEpisodes changePage={changePage} image={image}/> : <SearchEpisode changePage={changePage} image={image}/>}
        </div>
    )
}

export default ListOfEpisods;
import { useState } from 'react';
import SearchEpisode from './searchPage/searchEpisode';
import ListEpisodes from './ListPage/ListOfEpisodes';
import './listOfEpisods.scss'

import image from '../../assets/Rectangle.png'

const ListOfEpisods = () => {

    const [ da, setDa ] = useState(false)

    const changePage = () => {
        setDa(!da)
    }


    return (
        <div className='episodes-page'>
            { !da ? <ListEpisodes da={changePage} image={image}/> : <SearchEpisode da={changePage} image={image}/>}
        </div>
    )
}

export default ListOfEpisods;
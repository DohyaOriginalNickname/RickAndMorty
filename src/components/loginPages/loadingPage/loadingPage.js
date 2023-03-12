import title from "assets/loadingPage/title.png"
import rickAndMorty from "assets/loadingPage/RickAndMorty.png"

import './loadingDisplay.scss'

const LoadingDisplay = () => {
    return(
        <div className='loading'>
            <div className='loading__title'>
                <img src={title} alt="title" />
            </div>
            <div className='loading__image'>
                <img src={rickAndMorty} alt="вывфыв" />
            </div>
        </div>
    )
}

export default LoadingDisplay;
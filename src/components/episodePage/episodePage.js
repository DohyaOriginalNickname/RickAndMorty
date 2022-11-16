import { Link } from "react-router-dom";

import arrow from '../../assets/other/Arrow.png'
import arrow2 from '../../assets/other/Arrow2.png'
import backgroundImage from '../../assets/Rectangle3.png'
import playButton from '../../assets/PlayButton.png'
import Rick from '../../assets/image.png'

import './episodePage.scss'
const EpisodPage = () => {

    const array = [
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
        { img: Rick, live: true, name: "Рик", raceAndGender: "Человек, Мужской" },
    ]

    const elements = array.map((item, index) => {
        return (
            <Link to={'/character'} key={index}>
                <li className='list-of-characters__item'>
                    <img src={item.img} alt="character" />
                    <div className="description">
                        <p className="live">{item.live ? 'Живой' : 'Мертвый'}</p>
                        <p className="name">{item.name}</p>
                        <p className="race">{item.raceAndGender}</p>
                    </div>
                    <div>
                        <img src={arrow2} alt="" />
                    </div>
                </li>
            </Link>
        )
    })

    return (
        <div className="episode-page">
            <div className="episode-page__header">
                <div className="background">
                    <img src={backgroundImage} alt="" />
                </div>
                <Link to={'/listOfEpisods'}>
                    <div className='arrow'>
                        <img src={arrow} alt="" />
                    </div>
                </Link>
            </div>

            <div className="episode-page__main">
                <div className="wrapper">
                    <div className="player">
                        <img src={playButton} alt="" />
                    </div>
                    <div className="episode-data">
                        <div className='title'>
                            <p>М. Найт Шьямал-Инопланетяне!</p>
                            <p>Серия 1</p>
                        </div>
                        <div className="description">
                            <p>Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.</p>
                            <div className="release-date">
                                <p>Премьера</p>
                                <p>2 декабря 2013</p>
                            </div>
                        </div>
                    </div>
                    <div className="border"></div>

                    <div className="realeted-characters">
                        <div className="title">
                            <p>Персонажи</p>
                        </div>
                        <ul className="list-of-characters">
                            {elements}
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EpisodPage;
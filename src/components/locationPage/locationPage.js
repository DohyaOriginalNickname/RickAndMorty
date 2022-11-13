import { Link } from 'react-router-dom'

import './locationPage.scss'

import image from '../../assets/Rectangle2.png'
import arrow from '../../assets/other/Arrow.png'
import arrow2 from '../../assets/other/Arrow2.png'
import Rick from '../../assets/image.png'

const LocationPage = () => {

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
        <div className='location-page'>
            <div className='location-page__header'>
                <div className='background'>
                    <img src={image} alt="" />
                </div>
                <Link to={'/listOfLocaions'}>
                    <div className='arrow'>
                        <img src={arrow} alt="" />
                    </div>
                </Link>
                <div className='something'></div>
            </div>
            <div className="main">
                <div className='location-data'>
                    <div className="main-data">
                        <p className='title'>Земля С-137</p>
                        <div>
                            <p>Мир</p>
                            <p className='dot'></p>
                            <p>Измерение С-137</p>
                        </div>
                    </div>
                    <div className="description">
                        <p>Это планета, на которой проживает человеческая раса, и главное место для персонажей Рика и Морти. Возраст этой Земли более 4,6 миллиардов лет, и она является четвертой планетой от своей звезды.</p>
                    </div>
                </div>
                <div className="related-characters">
                    <div className='title'>
                        <p>Персонажи</p>
                    </div>
                    <ul className='list-of-characters'>
                        {elements}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LocationPage;
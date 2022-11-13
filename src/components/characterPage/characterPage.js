import { Link } from 'react-router-dom' 

import Rick from '../../assets/image.png'
import arrow from '../../assets/other/Arrow.png'
import arrow2 from '../../assets/other/Arrow2.png'
import image from '../../assets/Rectangle.png'
import './characterPage.scss'

const CharacterPage = () => {
    return (
        <div className='character-page'>
            <div className="header">
                <div className="background">
                    <Link to={"/listOfCharacters"}>
                        <div className='background__image'>
                            <img src="" alt="" />
                            <div className="arrow">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="title">
                    <div className='title__avatar'>
                        <img src={Rick} alt="" />
                    </div>
                    <div className="title__descripion">
                        <div>
                            <p className='name'>Рик Санчез</p>
                            <p className='live'>Живой</p>
                        </div>
                        <p className='char-description'>Главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность
                            и социопатия заставляют беспокоиться семью его дочери.</p>
                    </div>
                </div>
            </div>
            <div className="character-data">
                <div className='gender-and-race'>
                    <div className='gender'>
                        <p className="title">Пол</p>
                        <p className="data">Мужской</p>
                    </div>
                    <div className='race'>
                        <p className="title">Раса</p>
                        <p className="data">Человек</p>
                    </div>
                </div>
                <div className='other-data'>
                    <div className='location'>
                        <div>
                            <p className="title">Локация</p>
                            <p className="data">Земля C-137</p>
                        </div>
                        <img src={arrow2} alt="" />
                    </div>
                    <div className='position'>
                        <div>
                            <p className="title">Местоположение</p>
                            <p className="data">Земля (Измерение подменны)</p>
                        </div>
                        <img src={arrow2} alt="" />
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="episods">
                <div>
                    <p className="title">Эпизоды</p>
                    <p className="subtitle">Все эпизоды</p>
                </div>
                <ul className="episods__list">
                    <li className="episods__item">
                        <div>
                            <img src={image} alt="character" />
                        </div>
                        <div className="description">
                            <p className="serial-number">Серия 1</p>
                            <p className="series-title">Пилот</p>
                            <p className="release-date">2 декабря 2013</p>
                        </div>
                        <div>
                            <img src={arrow2} alt="" />
                        </div>
                    </li>
                    <li className="episods__item">
                        <div>
                            <img src={image} alt="character" />
                        </div>
                        <div className="description">
                            <p className="serial-number">Серия 1</p>
                            <p className="series-title">Пилот</p>
                            <p className="release-date">2 декабря 2013</p>
                        </div>
                        <div>
                            <img src={arrow2} alt="" />
                        </div>
                    </li>
                    <li className="episods__item">
                        <div>
                            <img src={image} alt="character" />
                        </div>
                        <div className="description">
                            <p className="serial-number">Серия 1</p>
                            <p className="series-title">Пилот</p>
                            <p className="release-date">2 декабря 2013</p>
                        </div>
                        <div>
                            <img src={arrow2} alt="" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharacterPage;
import { Link, useParams } from 'react-router-dom'
import { useGetCharacterQuery } from '../../serviсes/characterApi'
import { useGetEpisodeQuery } from '../../serviсes/episodsApi'

import arrow from '../../assets/other/Arrow.png'
import arrow2 from '../../assets/other/Arrow2.png'
import image from '../../assets/Rectangle.png'
import './characterPage.scss'
import { useEffect } from 'react'

const CharacterPage = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetCharacterQuery(id)

    const renderList = () => {
        if (!isLoading) {
            const array = []
            for (let i = 0; i < data.episode.length; i++) {
                const id = data.episode[i].slice(-2)
                array.push(<ListOfEpisods id={id} key={i} />)
            }
            return array
        }
    }

    if (!isLoading) {
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
                            <img src={data.image} alt="" />
                        </div>
                        <div className="title__descripion">
                            <div>
                                <p className='name'>{data.name}</p>
                                <p className='live'>{data.status}</p>
                            </div>
                            <p className='char-description'>Главный протагонист мультсериала «Рик и Морти». Безумный ученый, чей алкоголизм, безрассудность
                                и социопатия заставляют беспокоиться семью его дочери.</p>
                        </div>
                    </div>
                </div>
                <div className="character-data">
                    <div className='gender-and-race'>
                        <div className='gender'>
                            <p className="title">Gender</p>
                            <p className="data">{data.gender}</p>
                        </div>
                        <div className='race'>
                            <p className="title">Spesies</p>
                            <p className="data">{data.species}</p>
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
                <div className="episodes">
                    <div>
                        <p className="title">Эпизоды</p>
                        <p className="subtitle">Все эпизоды</p>
                    </div>
                    <ul className="episodes__list">
                        {renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}


const ListOfEpisods = (props) => {
    const id = props.id.replace('/\/', '')
    const { data, isLoading } = useGetEpisodeQuery(id)
    if (!isLoading) {
        return (
            <Link to={`/episodePage/${id}`}>
                <li className="episodes__item">
                    <div>
                        <img src={image} alt="character" />
                    </div>
                    <div className="description">
                        <p className="serial-number">seria {data.id}</p>
                        <p className="series-title">{data.name}</p>
                        <p className="release-date">{data.air_date}</p>
                    </div>
                    <div>
                        <img src={arrow2} alt="" />
                    </div>
                </li>
            </Link>
        )
    }
}

export default CharacterPage;
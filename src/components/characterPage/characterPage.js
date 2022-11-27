import { Link, useParams } from 'react-router-dom'
import { useGetCharacterQuery } from '../../serviсes/characterApi'
import { useGetEpisodeQuery } from '../../serviсes/episodsApi'

import arrow from '../../assets/other/Arrow.png'
import arrow2 from '../../assets/other/Arrow2.png'
import image from '../../assets/Rectangle.png'
import './characterPage.scss'

//TODO сделать бэкграунд

const CharacterPage = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetCharacterQuery(id)

    const renderList = () => {
        if (!isLoading) {
            const array = []
            for (let i = 0; i < data.episode.length; i++) {
                const id = data.episode[i].replace(/[\D]+/g, '')
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
                        <div className='background__image'>
                            <img src="" alt="" />
                            <div className="arrow">
                                <Link to={"/listOfCharacters"}>
                                    <img src={arrow} alt="" />
                                </Link>
                            </div>
                        </div>
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
                        <Link to={`/location/${data.origin.url.replace(/[\D]+/g, '')}`}>
                            <div className='location'>
                                <div>
                                    <p className="title">Origin</p>
                                    <p className="data">{data.origin.name}</p>
                                </div>
                                <img src={arrow2} alt="" />
                            </div>
                        </Link>
                        <Link to={`/location/${data.location.url.replace(/[\D]+/g, '')}`}>
                            <div className='position'>
                                <div>
                                    <p className="title">Location</p>
                                    <p className="data">{data.location.name}</p>
                                </div>
                                <img src={arrow2} alt="" />
                            </div>
                        </Link>
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
            </div >
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
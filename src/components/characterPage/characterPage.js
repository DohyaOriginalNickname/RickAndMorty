import { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useGetCharacterQuery } from '../../serviсes/characterApi'
import { useGetEpisodeQuery } from '../../serviсes/episodsApi'
import { Context } from '../ThemeContext/themeContext';

import ItemOfEpisodesList from '../UI/ItemOfEpisodesList/ItemOfEpisodesList'

import ArrowBlackTheme from '../../assets/other/blackThemeItems/Arrow.png'
import ArrowBlackTheme2 from '../../assets/other/blackThemeItems/Arrow2.png'

import ArrowWhiteTheme from '../../assets/other/whiteThemeItems/Arrow.png'
import ArrowWhiteTheme2 from '../../assets/other/whiteThemeItems/Arrow2.png'

import image from '../../assets/Rectangle.png'
import './characterPage.scss'

//TODO сделать бэкграунд

const CharacterPage = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetCharacterQuery(id)
    const [context, setContext] = useContext(Context)
    const navigate = useNavigate()

    const renderList = () => {
        if (!isLoading) {
            const array = []
            for (let i = 0; i < data.episode.length; i++) {
                const id = data.episode[i].replace(/[\D]+/g, '')
                array.push(<ListItemOfEpisodes id={id} key={i} image={image} />)
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
                            <div className={context === 'dark' ? "arrow-white" : "arrow-black"} onClick={() => navigate(-1)}>
                                <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <div className='title__avatar'>
                            <img className={context === 'dark' ? "avatar-black-theme" : "avatar-white-theme"} src={data.image} alt="" />
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
                                <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" />
                            </div>
                        </Link>
                        <Link to={`/location/${data.location.url.replace(/[\D]+/g, '')}`}>
                            <div className='position'>
                                <div>
                                    <p className="title">Location</p>
                                    <p className="data">{data.location.name}</p>
                                </div>
                                <img src={context === 'dark' ? ArrowBlackTheme2 : ArrowWhiteTheme2} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={context === 'dark' ? "border-black" : "border-light"}></div>
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


const ListItemOfEpisodes = (props) => {
    const { data, isLoading } = useGetEpisodeQuery(props.id)
    if (!isLoading) {
        return <ItemOfEpisodesList id={data.id} image={props.image} name={data.name} air_date={data.air_date} arrow={true} />
    }
}

export default CharacterPage;
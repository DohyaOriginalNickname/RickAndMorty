import { Link, useParams } from 'react-router-dom'
import { useGetLocationQuery } from '../../serviсes/locationsApi'
import { useGetCharacterQuery } from '../../serviсes/characterApi'

import './locationPage.scss'

import image from '../../assets/Rectangle2.png'
import arrow from '../../assets/other/Arrow.png'
import arrow2 from '../../assets/other/Arrow2.png'

const LocationPage = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetLocationQuery(id)

    const renderList = () => {
        if (!isLoading) {
            console.log(data);
            const array = []
            for (let i = 0; i < data.residents.length; i++) {
                const id = data.residents[i].replace(/[\D]+/g, '')
                array.push(<ListOfLocations id={id} key={i} />)
            }
            return array
        }
    }

    if (!isLoading) {
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
                            <p className='title'>{data.name}</p>
                            <div>
                                <p>{data.type}</p>
                                <p className='dot'></p>
                                <p>{data.dimension}</p>
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
                            {renderList()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const ListOfLocations = (props) => {
    const { data, isLoading } = useGetCharacterQuery(props.id)
    if (!isLoading) {
        return (
            <Link to={`/character/${props.id}`}>
                <li className='list-of-characters__item'>
                    <img src={data.image} alt="character" />
                    <div className="description">
                        <p className="live">{data.status == "Alive" ? 'Живой' : 'Мертвый'}</p>
                        <p className="name">{data.name}</p>
                        <p className="race">{data.species}</p>
                    </div>
                    <div>
                        <img src={arrow2} alt="" className='arrow' />
                    </div>
                </li>
            </Link>
        )
    }
}

export default LocationPage;
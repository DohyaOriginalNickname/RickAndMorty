import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useGetLocationQuery } from '../../serviсes/locationsApi'
import { useGetCharacterQuery } from '../../serviсes/characterApi'
import { Context } from '../ThemeContext/themeContext';

import ItemOfCharactersList from '../UI/ItemOfCharactersList/ItemOfCharactersList'

import './locationPage.scss'

import image from '../../assets/Rectangle2.png'
import ArrowBlackTheme from '../../assets/other/blackThemeItems/Arrow.png'
import ArrowWhiteTheme from '../../assets/other/whiteThemeItems/Arrow.png'


const LocationPage = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetLocationQuery(id)
    const [context, setContext] = useContext(Context)
    const navigate = useNavigate()

    const renderList = () => {
        if (!isLoading) {
            const array = []
            for (let i = 0; i < data.residents.length; i++) {
                const id = data.residents[i].replace(/[\D]+/g, '')
                array.push(<ListItemOfLocations id={id} key={i} />)
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
                    <div className={context === 'dark' ? "arrow-white" : "arrow-black"} onClick={() => navigate(-1)}>
                        <img src={context === 'dark' ? ArrowBlackTheme : ArrowWhiteTheme} alt="" />
                    </div>
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

const ListItemOfLocations = (props) => {
    const { data, isLoading } = useGetCharacterQuery(props.id)
    if (!isLoading) {
        return <ItemOfCharactersList id={data.id} image={data.image} status={data.status} name={data.name} species={data.species} gender={data.gender} arrow={true} />
    }
}
export default LocationPage;
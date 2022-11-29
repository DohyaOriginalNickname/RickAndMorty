import { Link, useParams } from "react-router-dom";
import { useGetEpisodeQuery } from "../../serviсes/episodsApi";
import { useGetCharacterQuery } from "../../serviсes/characterApi";

import ItemOfCharactersList from '../UI/ItemOfCharactersList/ItemOfCharactersList'

import arrow from '../../assets/other/Arrow.png'
import arrow2 from '../../assets/other/Arrow2.png'
import backgroundImage from '../../assets/Rectangle3.png'
import playButton from '../../assets/PlayButton.png'

import './episodePage.scss'
const EpisodPage = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetEpisodeQuery(id)

    const renderList = () => {
        if (!isLoading) {
            const array = []
            for (let i = 0; i < data.characters.length; i++) {
                const id = data.characters[i].replace(/[\D]+/g, '')
                array.push(<ListItemOfCharacters id={id} key={i}/>)
            }
            return array
        }
    }
    if (!isLoading) {
        console.log(data);
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
                                <p>{data.name}</p>
                                <p>seria {data.id}</p>
                            </div>
                            <div className="description">
                                <p>Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет изготовления концен-трирован- ной темной материи.</p>
                                <div className="release-date">
                                    <p>Premiere</p>
                                    <p>{data.air_date}</p>
                                </div>
                            </div>
                        </div>
                        <div className="border"></div>

                        <div className="realeted-characters">
                            <div className="title">
                                <p>Characters</p>
                            </div>
                            <ul className="list-of-characters">
                                {renderList()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ListItemOfCharacters = (props) => {
    const { data, isLoading } = useGetCharacterQuery(props.id)
    if (!isLoading) {
        return <ItemOfCharactersList id={data.id} image={data.image} status={data.status} name={data.name} species={data.species} arrow={true}/>
    }
}
export default EpisodPage;
import { useEffect, useRef } from 'react'
import ItemOfCharactersList from '../../UI/ItemOfCharactersList/ItemOfCharactersList'


const ListItem = (props) => {
    const refObserver = useRef(null)

    const options = {
        root: props.aaa,
        rootMargin: '0px',
        threshold: 1.0
    }

    const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
            props.plusPage()
        }
    }
    const observer = new IntersectionObserver(callback, options)

    useEffect(() => {
        observer.observe(refObserver.current)
    }, [])

    const elements = props.data.map(({image,status,name,species,gender,id}) => {
        return <ItemOfCharactersList key={id} image={image} status={status} name={name} species={species} gender={gender} id={id} tile={props.template}/>
    })

    return (
        <>
            {elements}
            <div ref={refObserver}></div>
        </>
    )
}

export default ListItem;    
import { useEffect, useState ,useRef } from 'react'

import { Link } from 'react-router-dom'

import './listTemplate.scss'


const ListTemplate = (props) => {
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

    const elements = props.data.map((item) => {
        return (
            <Link to={"/Character"} key={item.id}>
                <li className="list__item">
                    <img src={item.image} alt="character" />
                    <div className="description">
                        <p className={item.status === 'Alive' ? 'live' : 'dead'}>{item.status} </p>
                        <p className="name">{item.name}</p>
                        <p className="race">{item.species}, {item.gender}</p>
                    </div>
                </li>
            </Link>
        )
    })

    return (
        <>
            {elements}
            <div ref={refObserver} className='aaa'></div>
        </>
    )
}

export default ListTemplate;
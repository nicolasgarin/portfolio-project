import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Tras casi 10 años de experiencia en empleos orientados al trabajo en
                    equipo y la atención al cliente, comencé mi camino en el aprendizaje del desarrollo en front-end.
                    </p>
                    <p>
                    Desde hace dos años trabajo en el sector, habiendo superado obstáculos y creciendo día a día desde entonces. 
                    </p>
                    <p>
                    Me gusta aprender cosas nuevas, los idiomas, la
                    tecnología, el deporte y viajar.                    
                    </p>
                    <div className='foto-container'>

                    </div>
                </div>
                <div className='galeria'>
                    <div className='img img-1'></div>
                    <div className='img img-2'></div>
                    <div className='img img-3'></div>
                    <div className='img img-4'></div>
                    <div className='img img-5'></div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default About
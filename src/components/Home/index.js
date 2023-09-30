import './index.scss';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGitAlt, faHtml5, faJsSquare, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['N', 'i', 'c', 'o', 'l', 'á', 's', ' ', 'G', 'a', 'r', 'í', 'n']
    const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Frontend Developer / Javascript Expert</h2>
                    <Link to="/contact" className='flat-button'>CONTACTAR</Link>
                </div>
                <div className='stage-cube-content'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color='#306998' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faSass} color='#c69' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='ball-pulse-sync' />
        </>
    );
}

export default Home
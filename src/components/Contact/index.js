import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'o']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et neque pulvinar, feugiat orci sed, pellentesque dui. Nulla facilisi. Maecenas neque urna, ullamcorper id euismod ac, varius quis velit.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Nombre' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input
                                        placeholder='Subject'
                                        type='text'
                                        name='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea placeholder='Mensaje'
                                    name='message'
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Nicolás Garín,
                    <br />
                    Uruguay,
                    <br />
                    Montevideo
                    <br />
                    <span>nicolas.garin11@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-34, -56]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    </MapContainer>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Contact
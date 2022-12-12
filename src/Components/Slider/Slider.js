import React from 'react'
import images from './images'
import {motion} from 'framer-motion'
import './slider.css'
const Slider = () => {
    return (
        <div>
        <motion.div className='slide-container' >
            <motion.div className='slide-header'>
                <h1>Our Top Sales</h1>
            </motion.div>
            <motion.div className='slides' drag="x" >
            {images.map((image) => (
                <motion.div key={image} className="image-container">
                    <img src={image}  alt="slider-images" className="slider-images" ></img>
                </motion.div>
            )
            )}
            </motion.div>
        </motion.div>
        </div>
    )
}

export default Slider
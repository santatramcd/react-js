import React from 'react'
import './Hero.css'
import hand_icn from '../Assets/im2.jpg'

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-left">
                {/* <h2>New Arrivals Only</h2> */}
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="helo-right">
                <img src={hand_icn} alt=""/>
            </div>
        </div>
    )
}

export default Hero
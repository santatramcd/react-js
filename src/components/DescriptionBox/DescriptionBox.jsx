import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fades">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, esse voluptatibus eius eos sint odit saepe quasi exercitationem laborum mollitia! Temporibus quaerat quis totam aliquid, voluptate debitis iure dolorem molestias?</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur, perspiciatis omnis reprehenderit facilis veniam molestiae mollitia quis, dicta labore nobis nulla at dolore impedit modi consectetur repellat temporibus nihil!
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
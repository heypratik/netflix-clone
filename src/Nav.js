import React, { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
    }, [])


  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png' className='nav_logo' alt="netflix-logo" />
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='nav_avatar' alt="netflix-logo"/>
    </div>
  )
}


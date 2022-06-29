import React from 'react'
import s from './Nav.module.sass'
import Logo from '../../UI/Logo'
import SocialContainer from '../../UI/SocialContainer'
import Button from '../../UI/Button'

export default function Nav() {
  return (
    <nav>
        <div className={s.label}>
            <Logo />
            <SocialContainer />
        </div>
        <div className={s.menu}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Pages</li>
                <li>Contact Us</li>
            </ul>
            <Button />
        </div>
    </nav>
  )
}

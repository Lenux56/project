import React from 'react'
import s from './Nav.module.sass'
import ReactDOM from 'react-dom/client';
import Logo from '../../UI/Logo'
import SocialContainer from '../../UI/SocialContainer'
import Button from '../../UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  function handleSubmit(e) {
    const menu = document.querySelector('nav').children[2];
    if (menu.classList.contains('hide')){
      menu.classList.remove('hide');
    }else{
      menu.classList.add('hide');
    }
    console.log(e.target.parentNode);
    console.log(menu);
      }
      
  return (
    <nav>
        <div className={s.label}>
            <Logo />
            <SocialContainer />
        </div>
        <div className={s.burger} onClick={handleSubmit}><FontAwesomeIcon icon={faBars}/></div>
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

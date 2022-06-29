import React from 'react'
import s from './Logo.module.sass'
import logo from '../../images/logo.png'

export default function Logo() {
  return (
    <div className={s.logo}>
                <a href='#'><img src={logo} alt="Logo" /></a>
                <a href='#'>Pages</a>
    </div>
  )
}

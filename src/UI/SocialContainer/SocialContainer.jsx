import React from 'react'
import s from './SocialContainer.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faTwitterSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"


export default function SocialContainer() {
  return (
    <ul className={s.social}>
              <li><a href='#'><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
              <li><a href='#'><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
              <li><a href='#'><FontAwesomeIcon icon={faTwitterSquare} /></a></li>  
            </ul>
  )
}

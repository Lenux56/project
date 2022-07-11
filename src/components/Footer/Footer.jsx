import React from 'react'
import s from './Footer.module.sass'
import FooterUrls from '../FooterUrls'
import {linksExplore, linksPages} from './FooterUrls.utils.js'
import SocialContainer from '../../UI/SocialContainer'
import Logo from '../../UI/Logo'


export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.label}>
          <Logo />
          <SocialContainer />
      </div>
      <FooterUrls linkUrls={linksExplore}>Explore</FooterUrls>
      <FooterUrls linkUrls={linksPages}>Utility Pages</FooterUrls>
      <div className={`${s.menu} ${s.contacts}`}>
					<h4 className={s.title}>Keep in Touch</h4>
					<div className={s.innerContact}>
						<p>Address :</p>
						<a href="#" className={s.addres}>24A Kingston St, Los Vegas<br />NC 28202, USA.</a>
					</div>
					<div className={s.innerContact}>
						<p>Mail :</p>
						<a href="mailto:support@pages.com" className={s.mail}>support@pages.com</a>
					</div>
					<div className={s.innerContact}>
						<p>Phone :</p>
						<a href="tel:(+22) 123 - 4567 - 900" className={s.phone}>(+22) 123 - 4567 - 900</a>
					</div>
				</div>
        </div>
  )
}

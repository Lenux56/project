import React from 'react'
import s from './GetBook.module.sass'
//import book from '/images/getbook.png'
import LeftLine from '../../UI/LeftLine/LeftLine'

export default function GetBook() {
  return (
    <div className={s.inner}>
		<div className={s.info}>
            <LeftLine>Get Book Copy Today!</LeftLine>
			<p className={s.desc}>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
		</div>
		<img src='/images/getbook.png' alt="book" className={s.getBook} />
	</div>
  )
}

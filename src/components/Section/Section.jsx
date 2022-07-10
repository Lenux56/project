import React from 'react'
import s from './Section.module.sass'

export default function Section({children, bgColor}) {
  return (
    <section className={`${s.section} ${s[bgColor]}`}>
		<div className={s.content}>
			{children}
		</div>
	</section>
  )
}

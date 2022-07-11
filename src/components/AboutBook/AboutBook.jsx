import React from 'react'
import s from './AboutBook.module.sass'
import RadioBtn from '../../UI/RadioBtn/RadioBtn'

export default function AboutBook({ id, name, desc, price, link }) {
  return (
    <div className={s.book}>
        <img src={`./images/${link}`} alt={name} />
        <div className={s.item}>
            <div className={s.title}>{name}</div>
            <div className={s.price}>{price}</div>
            <div className={s.desc}>{desc}</div>
            <RadioBtn name='Printed Book' />
        </div>
    </div>
  )
}

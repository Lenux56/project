import React from 'react'
import s from './RadioBtn.module.sass'

export default function RadioBtn({name, text=''}) {
  return (
    <div className={s.radioBtn}>
      <div className={s.point}>{name}</div>
      <div className={s.descr}>{text}</div>
    </div>
  )
}

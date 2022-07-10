import React from 'react'
import s from './RadioBtn.module.sass'

export default function RadioBtn({data}) {
  return (
    <div className={s.radioBtn}>
      <div className={s.point}>{data.name}</div>
      <div className={s.descr}>{data.text}</div>
    </div>
  )
}

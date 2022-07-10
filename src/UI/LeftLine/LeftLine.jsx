import React from 'react'
import s from './LeftLine.module.sass'

export default function LeftLine({children}) {
  return (
    <h2 className={s.title}>{children}</h2>
  )
}

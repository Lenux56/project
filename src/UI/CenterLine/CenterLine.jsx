import React from 'react'
import s from './CenterLine.module.sass'

export default function CenterLine({children}) {
    return (
      <h2 className={s.title}>{children}</h2>
    )
}
  
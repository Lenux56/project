import React from 'react'
import s from './ImageFrame.module.sass'

export default function ImageFrame({author}) { 
 return (
    <div className={s.authorImg}>
        <img src={author} alt="Author"/>
    </div>
  )
}

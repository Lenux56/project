import React from 'react'
import main from '../../images/main.png'
import s from './Main.module.sass'
import Button from '../../UI/Button'

export default function Main() {
  return (
    <main>
        <div className={s.text}>
            <h2>Welcome to Pages!!!</h2>
            <h1>
                Your Books From The Best Writer.
            </h1>
            <div>
                We believe that reading books are essential to a healthy culture.
                They’re where authors can connect with readers.
            </div>
            <div className={s.btn}>
                <Button />
                <div>Read Free Demo</div>
            </div>    
        </div>
        <div>
            <img src={main} alt="Main book" />
        </div>
    </main>
  )
}

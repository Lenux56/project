import React from 'react'
//import main from '/images/main.png'
import s from './Main.module.sass'
import Button from '../../UI/Button'
import RadioBtn from '../../UI/RadioBtn/RadioBtn'

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
                <a href='#'>Read Free Demo</a>
            </div> 
            <div className={s.points}>
                <RadioBtn name='Pages:' text='250pages'></RadioBtn>   
                <RadioBtn name='Length:' text='10 Hours'></RadioBtn>  
                <RadioBtn name='Rating:' text='4.5/5 (305 ratings)'></RadioBtn>
            </div>  
        </div>
        <div>
            <img src='/images/main.png' alt="Main book" />
        </div>
    </main>
  )
}

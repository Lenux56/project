import React from 'react'
import s from './AboutAuthor.module.sass'
import author from '../../images/author.png';
import code from '../../images/code.png';
import ImageFrame from '../../UI/ImageFrame';
import LeftLine from '../../UI/LeftLine/LeftLine';

export default function AboutAuthor() {
  return (
        <div className={s.inner}> 
            <ImageFrame author={author} offset='40'/>  
            <div className={s.aboutAuthor}>
                <LeftLine>About the Author</LeftLine>
                <p className={s.desc}>
                    We believe that bookstores are essential to a healthy culture.
                    They’re where authors can connect with readers, where we discover new writers,
                    where children get hooked on the thrill of reading that can last a lifetime.
                </p>
                <ul>
                    <li>
                        <div className={s.number}>02</div>
                        <div className={s.numberDesc}>Books Published</div>
                    </li>
                    <li>
                        <div className={s.number}>4.5</div>
                        <div className={s.numberDesc}>User Reviews</div>
                    </li>
                    <li>
                        <div className={s.number}>04</div>
                        <div className={s.numberDesc}>Best Seller Awards</div>
                    </li>
                </ul>

                <div className={s.infoAuthor}>
                    <img src={code} alt="code" className={s.code}/>
                    <div className={s.contact}>
                        <p className={s.name}>John Abraham , Ph.d</p>
                        <p className={s.mail}>Mail: <a href="mailto:johnabraham@gmail.com">johnabraham@gmail.com</a></p>
                        <p className={s.phone}>Phone: <a href="tel:(+2) 123 545 9000" >(+2) 123 545 9000</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import s from './FooterUrls.module.sass'

export default function FooterUrls({linkUrls, children}) {
  return (
    <div>
        <h4>{children}</h4>
        <ul className={s.list}>
                {linkUrls.map((item, index) => (
                    <li key={index} className={s.item} href={item.link}>
                        {item.name}
                    </li>
                ))}
        </ul>
    </div>
  )
}

import style from './Header.module.css'

export function Header() {
  return (
    <header>
      <div>
        <span className={style.logo}>House Staff</span>
        <ul className={style.nav}>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className={style.presentations}></div>
    </header>
  )
}

import style from './ButtonAdd.module.css'
export const ButtonAdd = ({ onClick }) => {
  return (
    <div onClick={onClick} className={style.addToCart}>
      +
    </div>
  )
}

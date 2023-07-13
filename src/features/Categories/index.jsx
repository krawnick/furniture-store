import { useDispatch } from 'react-redux'
import { setCategory } from './catregoriesSlice'
import { KEY_FILTER } from './categoriesConst'
import style from './Categories.module.css'

export const Categories = () => {
  const dispatch = useDispatch()

  return (
    <div className={style.categories}>
      <ul>
        {KEY_FILTER.map((el) => {
          return (
            <li
              key={el.key}
              onClick={() => {
                dispatch(setCategory(el.key))
              }}
            >
              {el.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

import { useDispatch } from 'react-redux'
import style from './Categories.module.css'
import { setCategory } from './catregoriesSlice'

export const Categories = () => {
  const KEY_FILTER = [
    { key: 'all', name: 'Всё' },
    { key: 'chair', name: 'Стулья' },
    { key: 'table', name: 'Столы' },
    { key: 'sofa', name: 'Диваны' },
    { key: 'closet', name: 'Шкафы' },
    { key: 'armchair', name: 'Кресла' },
    { key: 'rack', name: 'Стеллажи' },
  ]

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

import style from './Categories.module.css'

export const Categories = ({ transferCategory }) => {
  const KEY_FILTER = [
    { key: 'all', name: 'Всё' },
    { key: 'chair', name: 'Стулья' },
    { key: 'table', name: 'Столы' },
    { key: 'sofa', name: 'Диваны' },
    { key: 'closet', name: 'Шкафы' },
    { key: 'armchair', name: 'Кресла' },
    { key: 'rack', name: 'Стеллажи' },
  ]

  return (
    <div className={style.categories}>
      <ul>
        {KEY_FILTER.map((el) => {
          return (
            <li
              key={el.key}
              onClick={() => {
                transferCategory(el.key)
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

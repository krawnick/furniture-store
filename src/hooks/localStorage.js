import { useEffect, useState } from 'react'

// useLocalStorage hook
const useLocalStorage = (key, defaultState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) || null) || defaultState
  )
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export { useLocalStorage }

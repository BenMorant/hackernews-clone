import { useEffect, useState } from 'react'

import { getStories } from '../utils/apis'

const useDataFetcher = type => {
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getStories(type)
      // eslint-disable-next-line no-shadow
      .then(stories => {
        setStories(stories)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [type])

  return { isLoading, stories }
}

export default useDataFetcher

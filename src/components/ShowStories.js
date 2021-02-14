import Loader from './Loader'
import React from 'react'
import Story from './Story'
import useDataFetcher from '../hooks/dataFetcher'

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : 'top')

  return (
    <>
      <Loader show={isLoading}>Loading...</Loader>
      <>
        {stories.map(({ data: story }) => (
          <Story key={story.id} story={story} />
        ))}
      </>
    </>
  )
}

export default ShowStories

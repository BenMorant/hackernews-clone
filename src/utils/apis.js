import { BASE_API_URL } from './constants'
import axios from 'axios'

const getStory = async id => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`)
    return story
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Error while getting a story.')
  }
}

export const getStories = async type => {
  try {
    const { data: storyIds } = await axios.get(`${BASE_API_URL}/${type}stories.json`)
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory))
    return stories
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Error while getting list of stories.')
  }
}

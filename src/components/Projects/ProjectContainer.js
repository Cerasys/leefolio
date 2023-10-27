import { useState, useEffect } from 'react'
// import { NotionRenderer } from 'react-notion'
import UtilsApi from '../utils/UtilsApi'
import 'react-notion/src/styles.css'
import './ProjectContainer.css'

export const PROJECTS_PAGE_ID = 'fd3ccabef7cc4d22a084b984a5dfa444'

const ProjectContainer = () => {
  const [notionPageData, setNotionPageData] = useState(null)
  const [loading, setIsLoading] = useState(false)

  const loadNotionPage = () => {
    setIsLoading('Loading Projects page')
    UtilsApi.loadNotionContent(PROJECTS_PAGE_ID)
      .then((res) => {
        setNotionPageData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    loadNotionPage()
  }, [])

  return (
    <div className='project'>
      {loading && <h1>Loading</h1>}
      {notionPageData && <NotionRenderer blockMap={notionPageData} />}
    </div>
  )
}

export default ProjectContainer

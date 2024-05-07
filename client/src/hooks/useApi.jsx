import { useState, useCallback } from 'react'

const useApi = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async (url, options = {}) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(url, options)
      const contentType = response.headers.get('content-type')
      let result = null
      if (contentType && contentType.indexOf('application/json') !== -1) {
        result = await response.json()
      } else {
        result = await response.text() // Assume text if not JSON
      }
      if (response.ok) {
        setData(result)
        return { data: result, error: null }
      } else {
        throw new Error(result.message || 'Something went wrong')
      }
    } catch (err) {
      setError(err.message)
      return { data: null, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { data, isLoading, error, fetchData }
}

export default useApi

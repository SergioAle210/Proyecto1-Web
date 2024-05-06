import { useState } from 'react'

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return {
    values,
    setValues,
    handleChange
  }
}

export default useForm

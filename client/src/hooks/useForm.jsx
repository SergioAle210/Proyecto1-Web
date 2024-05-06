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

  const handleSubmit = (callback) => (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault() // Asegúrate de que event tiene preventDefault
    }
    callback(values)
  }

  return {
    values,
    setValues,
    handleChange,
    handleSubmit
  }
}

export default useForm

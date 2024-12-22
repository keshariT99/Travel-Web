import React from 'react'

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />
    </div>
  )
}

export default InputField
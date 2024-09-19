'use client'

import { HTMLInputTypeAttribute, SetStateAction, useState } from 'react'

const onSend = () => {
  console.log("onSend was called")
}

const NewMessage = () => {
  const [inputValue, setInputValue] = useState<HTMLInputTypeAttribute>('')

  const onSend = () => {
    if (inputValue !=='')  {
      const userMessage = {message: inputValue}
    }
    setInputValue("")
  }

  const handleChange = (e: { target: { value: SetStateAction<HTMLInputTypeAttribute>; }; }) => {
    setInputValue(e.target.value);
  } 

  return (
    <div className='flex space-x-2'>
      <input className="p-1 rounded-sm" onChange={handleChange} placeholder="Leave a message..." value={inputValue} maxLength={3500}></input>
      <button className='bg-gray-500 p-1 rounded-sm' onClick={onSend}>Send!</button>
    </div>
  )
}

export default NewMessage;
import React, { useRef } from 'react'

function FocusInput() {
    const inputFocus = useRef(null)
    const handleFocus = () => { 
        inputFocus.current?.focus()

    }
  return (
      <div className='flex items-center justify-center mt-10'>
          <input type="text" ref={inputFocus}  className='p-2 ' />
          <button onClick={handleFocus} className='p-2 text-white bg-blue-500'>Click To Focus</button>
    </div>
  )
}

export default FocusInput
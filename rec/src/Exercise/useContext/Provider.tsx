import React, { createContext, useState } from 'react'

interface ProvidingProps { 
    count: number,
    increment: () => void,
    decrement:()=>void
}
export const Providing = createContext<ProvidingProps>({
    count: 0,
    increment: () => { },
    decrement: () => { }
})

interface ProviderShape { 
    children: React.ReactNode
}
const Provider: FC<ProviderShape> = ({ children }) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  return (
      <Providing.Provider value={{
          count,
          increment,
          decrement
      }}>
          {children}
      </Providing.Provider>
  )
}

export default Provider
'use client'

import { createContext, useContext, useState } from 'react'

type NavigationContextType = {
  direction: number
  setDirection: (d: number) => void
}

const NavigationContext = createContext<NavigationContextType>({
  direction: 1,
  setDirection: () => {},
})

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState(1)
  return (
    <NavigationContext.Provider value={{ direction, setDirection }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)

'use client'

import { createContext, useContext, useState } from 'react'

interface PhotoContextValue {
  editedImage: string | null
  setEditedImage: (img: string | null) => void
}

const PhotoContext = createContext<PhotoContextValue>({
  editedImage: null,
  setEditedImage: () => {},
})

export function PhotoProvider({ children }: { children: React.ReactNode }) {
  const [editedImage, setEditedImage] = useState<string | null>(null)
  return (
    <PhotoContext.Provider value={{ editedImage, setEditedImage }}>
      {children}
    </PhotoContext.Provider>
  )
}

export function usePhoto() {
  return useContext(PhotoContext)
}

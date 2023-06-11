import { createContext, useState } from 'react'

const initialState = {}

export const AppContext = createContext(initialState)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

/**
 * Dependencies
 */
import { createContext, useState } from 'react';

/**
 * Context
 */
export const AppContext = createContext();

/**
 * Provider Wrapper
 */
export function AppProvider({ children }) {
  const [store, setStore] = useState('');
  return (
    <AppContext.Provider value={{ store, setStore }}>
      {children}
    </AppContext.Provider>
  )
}
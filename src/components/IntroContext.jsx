import { createContext, useContext } from 'react'

export const IntroContext = createContext({ ready: true, baseDelay: 0 })

export function useIntro() {
  return useContext(IntroContext)
}
import { lazy } from 'react'

export const WordsPageAsync = lazy(async () => await import('./WordsPage'))

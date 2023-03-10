import { ChangeEvent } from 'react'

export interface ISearchBarProps {
  value: string
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

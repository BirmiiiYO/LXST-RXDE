import { Dispatch, SetStateAction } from 'react'

export interface ISearchBarProps {
  value: string
  changeValue: Dispatch<SetStateAction<string>>
}

import { MouseEvent } from 'react'

export type FormProp = {
  onSubmit: (event: MouseEvent<HTMLFormElement>) => Promise<void>
  onFieldChange: (fieldName: string, value: string) => void
  values: Record<string, string>
  errors: Record<string, boolean>
}

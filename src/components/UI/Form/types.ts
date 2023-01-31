interface IField {
  label: string
  value: string
}

export interface IFormProps {
  title: string
  fields: Array<IField>
}

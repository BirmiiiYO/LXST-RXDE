import emailjs from '@emailjs/browser'
import { FormikHelpers } from 'formik'
import { RefObject } from 'react'
import * as yup from 'yup'

export interface IInitialValues {
  name: string
  email: string
  theme: string
  message: string
}

export const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('invalid')
    .required('email required')
    .typeError('incorrect email'),
  name: yup.string().required().required('name required'),
  theme: yup.string(),
  message: yup.string().max(100).required().typeError('max length 100 symbols'),
})

export const form = (formRef: RefObject<HTMLFormElement>) => ({
  initialValues: {
    name: '',
    email: '',
    theme: '',
    message: '',
  },
  validationSchema: formSchema,
  onSubmit: (
    _values: IInitialValues,
    helpers: FormikHelpers<IInitialValues>,
  ) => {
    emailjs.sendForm(
      'service_t2kqwuc',
      'template_u88b8dm',
      formRef.current as HTMLFormElement,
      'PzVgDgZCm337dkKD-',
    )
    helpers.resetForm()
  },
})

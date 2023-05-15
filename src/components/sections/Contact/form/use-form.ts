import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import { MutableRefObject, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import * as yup from 'yup'

export const useContactForm = () => {
  type FormData = yup.InferType<typeof schema>
  const { t } = useTranslation()
  const schema = yup
    .object({
      user_email: yup.string().email(t('email')).required(t('required')),
      user_name: yup.string().required(t('required')),
      message: yup.string().min(15, t('15 length')).required(t('required')),
    })
    .required()

  const form = useRef() as MutableRefObject<HTMLFormElement>
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    if (form.current) {
      emailjs.sendForm('service_pn5ug1u', 'template_kzviu69', form.current, '63lDdfy0NXNbqDhMM').then(
        () => {
          toast(t('success') as string, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        },
        () => {
          toast(t('error') as string, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      )
    }
    reset()
  }

  const emailError = errors.user_email ? errors.user_email.message : null
  const nameError = errors.user_name ? errors.user_name.message : null
  const messageError = errors.message ? errors.message.message : null

  return {
    messageError,
    emailError,
    nameError,
    register,
    form,
    onSubmit: handleSubmit(onSubmit),
  }
}

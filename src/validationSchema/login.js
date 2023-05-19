import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email()
    .required('El correo electronico es obligatorio'),
    password: yup
    .string()
    .min(5, 'Demasiado Corto')
    .max(100, 'Demasiado Largo')
    .required('La contraseña es un campo obligatorio')
})
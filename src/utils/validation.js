import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().trim().min(3, 'O nome precisa ter no mínimo 3 caracteres').required('Campo obrigatório'),
  email: yup
  .string()
  .trim()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Valor inserido não corresponde a um e-mail')
  .required('Campo obrigatório'),
  message: yup.string().trim().min(3, 'A mensagem precisa ter no mínimo 3 caracteres').required('Campo obrigatório')
});
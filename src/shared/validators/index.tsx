import * as yup from "yup";

export const formRegisterSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Campo obrigatória!")
    .min(6, "A senha deve contem no mínimo 6 dígitos"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas não correspondem"),
  telephone: yup.string().required("Campo obrigatório"),
});

export const formLoginSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
});

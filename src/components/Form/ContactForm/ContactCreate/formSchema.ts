import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Insira um e-mail válido").required("O e-mail é obrigatório"),
  telephone: yup.string().required("O telefone é obrigatório"),
});

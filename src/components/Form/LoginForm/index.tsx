import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import { ILoginUser, UserContext } from "../../../contexts/UserContext";
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<ILoginUser> = (data) => {
    userLogin(data);
  };

  return (   
    <form onSubmit={handleSubmit(submit)}>
      <TextField
        fullWidth
        label="E-mail"
        variant="outlined"
        margin="normal"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />
      <TextField
        fullWidth
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register('password')}
      />
      <Button fullWidth type="submit" variant="contained" color="secondary">
        Entrar
      </Button>
    </form>
  );
};

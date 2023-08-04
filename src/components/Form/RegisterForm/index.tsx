import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";
import { TextField, Button } from "@mui/material";
import { IRegisterUser, UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<IRegisterUser> = (data) => {
    userRegister(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TextField
        fullWidth
        label="Nome"
        variant="outlined"
        margin="normal"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name")}
      />
      <TextField
        fullWidth
        label="E-mail"
        variant="outlined"
        margin="normal"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
      />
      <TextField
        fullWidth
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        error={!!errors.password}
        helperText={errors.password?.message}
        {...register("password")}
      />
      <TextField
        fullWidth
        label="Confirmar Senha"
        type="password"
        variant="outlined"
        margin="normal"
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <TextField
        fullWidth
        label="Telefone"
        variant="outlined"
        margin="normal"
        error={!!errors.telephone}
        helperText={errors.telephone?.message}
        {...register("telephone")}
      />
      <Button fullWidth type="submit" variant="contained" color="primary">
        Registrar
      </Button>
    </form>
  );
};

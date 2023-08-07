import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { IUser } from "../../../contexts/UserContext";
import { useEffect, useState } from "react";
import { formSchema } from "../ContactForm/ContactCreate/formSchema";

interface UserEditFormProps {
  user: IUser;
  onClose: () => void;
  onUpdate: (userId: number, data: Partial<IUser>) => void;
}

export const UserEditForm = ({
  user,
  onClose,
  onUpdate,
}: UserEditFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IUser>({
    resolver: yupResolver(formSchema),
  });

  const [modifiedFields, setModifiedFields] = useState<Partial<IUser>>({});

  useEffect(() => {
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("telephone", user.telephone);
  }, [user, setValue]);

  const handleFieldChange = (fieldName: keyof IUser, value: string) => {
    setModifiedFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };


  const submit: SubmitHandler<IUser> = () => {
    onUpdate(user.id, modifiedFields);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TextField
        fullWidth
        label="Nome"
        variant="outlined"
        margin="normal"
        defaultValue={user.name}
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register("name")}
        onChange={(e) => handleFieldChange("name", e.target.value)}

      />
      <TextField
        fullWidth
        label="E-mail"
        variant="outlined"
        margin="normal"
        defaultValue={user.email}
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
        onChange={(e) => handleFieldChange("email", e.target.value)}
      />
      <TextField
        fullWidth
        label="Telefone"
        variant="outlined"
        margin="normal"
        defaultValue={user.telephone}
        error={!!errors.telephone}
        helperText={errors.telephone?.message}
        {...register("telephone")}
        onChange={(e) => handleFieldChange("telephone", e.target.value)}
      />
      <Button fullWidth type="submit" variant="contained" color="primary">
        Atualizar
      </Button>
    </form>
  );
};
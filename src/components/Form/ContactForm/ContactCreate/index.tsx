import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { formSchema } from "./formSchema";
import { useContext } from "react";
import { ContactContext, IContact } from "../../../../contexts/ContactContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const { addContact, contacts } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<IContact> = (data) => {
    const contactExists = contacts.some((contact) => contact.name === data.name);

    if (contactExists) {
      toast.error("Já existe um contato com o mesmo nome");
    } else {
      addContact(data);
      onClose();
    }
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
        label="Telefone"
        variant="outlined"
        margin="normal"
        error={!!errors.telephone}
        helperText={errors.telephone?.message}
        {...register("telephone")}
      />
      <Button fullWidth type="submit" variant="contained" color="primary">
        Criar Contato
      </Button>
    </form>
  );
};

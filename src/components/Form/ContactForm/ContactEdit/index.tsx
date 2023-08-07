import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { formSchema } from "../ContactCreate/formSchema";
import { ContactContext, IContact } from "../../../../contexts/ContactContext";
import { useEffect, useContext} from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ContactEditFormProps {
  contact: IContact;
  onClose: () => void;
  onUpdate: (data: IContact) => void;
}

export const ContactEditForm = ({ contact, onClose, onUpdate }: ContactEditFormProps) => {

  const { contacts } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IContact>({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    setValue("name", contact.name);
    setValue("email", contact.email);
    setValue("telephone", contact.telephone);
  }, [contact, setValue]);

  const submit: SubmitHandler<IContact> = (data) => {
    const contactExists = contacts.some(
      (contactExist) =>
        contactExist.id !== contact.id && contactExist.name === data.name
    );

    if (contactExists) {
      toast.error("Já existe um contato com o mesmo nome");
    } else {
      onUpdate(data);
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
        Atualizar Contato
      </Button>
    </form>
  );
};

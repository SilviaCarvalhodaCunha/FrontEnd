import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { formSchema } from "../ContactCreate/formSchema";
import { IContact } from "../../../../contexts/ContactContext";
import { useEffect, useState } from "react";

interface ContactEditFormProps {
  contact: IContact;
  onClose: () => void;
  onUpdate: (contactId: number, data: Partial<IContact>) => void;
}

export const ContactEditForm = ({
  contact,
  onClose,
  onUpdate,
}: ContactEditFormProps) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IContact>({
    resolver: yupResolver(formSchema),
  });

  const [modified, setModified] = useState<Partial<IContact>>({});

  useEffect(() => {
    setValue("name", contact.name);
    setValue("email", contact.email);
    setValue("telephone", contact.telephone);
  }, [contact, setValue]);

  const handleField = (fieldName: keyof IContact, value: string) => {
    setModified((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }));
  };

  const submit: SubmitHandler<IContact> = () => {
    onUpdate(contact.id, modified)
    onClose();

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
        onChange={(e) => handleField("name", e.target.value)}
      />
      <TextField
        fullWidth
        label="E-mail"
        variant="outlined"
        margin="normal"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register("email")}
        onChange={(e) => handleField("email", e.target.value)}
      />
      <TextField
        fullWidth
        label="Telefone"
        variant="outlined"
        margin="normal"
        error={!!errors.telephone}
        helperText={errors.telephone?.message}
        {...register("telephone")}
        onChange={(e) => handleField("telephone", e.target.value)}
      />
      <Button fullWidth type="submit" variant="contained" color="primary">
        Atualizar Contato
      </Button>
    </form>
  );
};

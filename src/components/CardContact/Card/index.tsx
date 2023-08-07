import { Card, CardContent, Typography, Button } from "@mui/material";
import { useContext, useState } from "react";
import { ContactContext, IContact } from "../../../contexts/ContactContext";
import { ConfirmationDelete } from "../../Modal/ConfirmationDeleteModal";
import { EditContact } from "../../Modal/EditContactModal";

interface ContactCardProps {
  contact: IContact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const { deleteContact, updateContact } = useContext(ContactContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleUpdateContact = (data: IContact) => {
    updateContact(contact.id, data);

    setIsEditModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteContact(contact.id);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{contact.name}</Typography>
        <Typography>{contact.email}</Typography>
        <Typography>{contact.telephone}</Typography>
        <Button onClick={handleEdit}>Editar</Button>
        <Button onClick={handleDelete}>Excluir</Button>

        <ConfirmationDelete
          open={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />

        <EditContact
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          contact={contact}
          onUpdate={handleUpdateContact}
        />
      </CardContent>
    </Card>
  );
};

import { Modal, Box } from "@mui/material";
import { IContact } from "../../../contexts/ContactContext";
import { ContactEditForm } from "../../Form/ContactForm/ContactEdit";

interface EditContactProps {
  isOpen: boolean;
  onClose: () => void;
  contact: IContact;
  onUpdate: (contactId:number, data: Partial<IContact>) => void;
}

export const EditContact: React.FC<EditContactProps> = ({
  isOpen,
  onClose,
  contact,
  onUpdate,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          borderRadius: "8px",
        }}
      >
        <ContactEditForm contact={contact} onUpdate={onUpdate} onClose={onClose} />
      </Box>
    </Modal>
  );
};

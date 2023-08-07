import React from "react";
import { Modal, Box } from "@mui/material";
import { ContactForm } from "../../Form/ContactForm/ContactCreate";

interface CreateContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateContactModal: React.FC<CreateContactModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
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
        <ContactForm onClose={onClose} />
      </Box>
    </Modal>
  );
};

import React from "react";
import { Modal, Button, Box } from "@mui/material";

interface ConfirmationDeleteUserProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (userId: number) => void;
  userId: string | number;
}

export const ConfirmationDeleteUserModal: React.FC<ConfirmationDeleteUserProps> = ({
  open,
  onClose,
  onConfirm,
  userId
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p>Tem certeza de que deseja excluir sua conta?</p>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={() => onConfirm(Number(userId))}>Confirmar</Button>
      </Box>
    </Modal>
  );
};

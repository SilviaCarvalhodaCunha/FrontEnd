import React from "react";
import { Modal, Button, Box } from "@mui/material";

interface ConfirmationDeleteProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmationDelete: React.FC<ConfirmationDeleteProps> = ({
  open,
  onClose,
  onConfirm,
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
        <p>Tem certeza de que deseja excluir este contato?</p>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onConfirm}>Confirmar</Button>
      </Box>
    </Modal>
  );
};

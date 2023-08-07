import { Modal, Box } from "@mui/material";
import { IUser } from "../../../contexts/UserContext";
import { UserEditForm } from "../../Form/EditUserForm";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUser;
  onUpdate: (userId: number, data: Partial<IUser>) => void;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  user,
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
        <UserEditForm user={user} onUpdate={onUpdate} onClose={onClose} />
      </Box>
    </Modal>
  );
};

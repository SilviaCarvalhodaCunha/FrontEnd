import { Box, Button, Typography } from "@mui/material";
import agenda from "../../assets/agenda.png";
import { useState, useContext } from "react";
import { IUser, UserContext } from "../../contexts/UserContext";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CreateContactModal } from "../Modal/CreateContactModal";
import { EditUserModal } from "../Modal/EditUserModal";
import { ConfirmationDeleteUserModal } from "../Modal/ConfirmationDeleteUserModal";
import { ContactContext } from "../../contexts/ContactContext";

interface HeaderProps {
  onShowContactList: () => void;
}

export const Header = ({ onShowContactList }: HeaderProps) => {
  const { userLogout, updateUser, deleteUser, user } = useContext(UserContext);
  const { listContacts } = useContext(ContactContext);
  const currentUser = user || {
    id: 0,
    name: "",
    email: "",
    telephone: "",
    dateRegistration: "",
  };

  const [openModal, setOpenModal] = useState(false);
  const [openEditUserModal, setOpenEditUserModal] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleOpenContactModal = () => {
    setOpenModal(true);
  };

  const handleCloseContactModal = () => {
    setOpenModal(false);
  };

  const handleOpenEditUserModal = () => {
    setOpenEditUserModal(true);
  };

  const handleCloseEditUserModal = () => {
    setOpenEditUserModal(false);
  };

  const handleUpdateUser = (userId: number, data: Partial<IUser>) => {
    updateUser(userId, data);
    setOpenEditUserModal(false);
  };

  const handleCloseDeleteModal = () => {
    setIsModalDeleteOpen(false);
  };

  const handleDeleteUser = (userId: number) => {
    deleteUser(userId);
    setIsModalDeleteOpen(false);
  };

  const handleListContact = () => {
    listContacts();
    onShowContactList();
  };

  const handleLogout = () => {
    userLogout();
  };

  return (
    <header>
      <div>
        <Box display="flex" alignItems="center" gap={2}>
          <img src={agenda} alt="Agenda de Contatos" style={{ width: "5%" }} />
          <Box flexDirection="column">
            {user &&
              user.name.split(" ").map((name, index) => (
                <Typography key={index} variant="body1">
                  {name}
                </Typography>
              ))}
          </Box>
        </Box>
        <div>
          <Button onClick={handleListContact}>Meus Contatos</Button>
          <Button onClick={handleOpenContactModal}>Criar Contato</Button>
          <Button onClick={handleOpenEditUserModal}>Editar Perfil</Button>
          <Button onClick={() => setIsModalDeleteOpen(true)}>
            Excluir Perfil
          </Button>
          <Button onClick={handleLogout}>
            <RiLogoutBoxRLine />
          </Button>

          <CreateContactModal
            open={openModal}
            onClose={handleCloseContactModal}
          />
          <EditUserModal
            isOpen={openEditUserModal}
            onClose={handleCloseEditUserModal}
            user={currentUser}
            onUpdate={handleUpdateUser}
          />
          <ConfirmationDeleteUserModal
            open={isModalDeleteOpen}
            onClose={handleCloseDeleteModal}
            onConfirm={handleDeleteUser}
            userId={currentUser.id}
          />
        </div>
      </div>
    </header>
  );
};

import { Item, LogoContainer, LogoImg, NavContainer } from './styled';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import PublicPaths from '../../routes/publicPaths';
import Button from '../Button';
import CreateTaskForm from '../CreateTaskForm';
import Modal from '../Modal';

const Nav = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const [openCreateTask, setOpenCreateTask] = useState(false);

  const onCreateClick = () => {
    setOpenCreateTask(true);
  };

  const onSignoutClick = () => {
    signOut();
    navigate(PublicPaths.LOGIN);
  };

  const handleCloseModal = () => {
    setOpenCreateTask(false);
  };

  return (
    <NavContainer>
      <Item>
        <LogoContainer>
          <LogoImg src={Logo} alt="Logo" />
        </LogoContainer>
      </Item>

      <Item>
        <Button onClick={onCreateClick} small>
          Criar
        </Button>
        <Button onClick={onSignoutClick} small secondary>
          Sair
        </Button>
      </Item>

      <Modal
        isOpen={openCreateTask}
        onClose={handleCloseModal}
        title="Tarefa"
        footer={
          <Button type="submit" form="task-form">
            Criar
          </Button>
        }
      >
        <CreateTaskForm onSuccess={handleCloseModal} />
      </Modal>
    </NavContainer>
  );
};

export default Nav;

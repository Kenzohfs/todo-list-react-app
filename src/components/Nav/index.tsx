import { FaRegUser } from 'react-icons/fa';
import {
  IconContainer,
  Item,
  LogoContainer,
  LogoImg,
  NavContainer,
} from './styled';

import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import Button from '../Button';
import CreateTaskForm from '../CreateTaskForm';
import Modal from '../Modal';

const Nav = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);

  const onCreateClick = () => {
    setOpenCreateTask(true);
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
        <IconContainer>
          <FaRegUser />
        </IconContainer>
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

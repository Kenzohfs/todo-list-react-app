import { FaRegUser } from 'react-icons/fa';
import {
  IconContainer,
  Item,
  LogoContainer,
  LogoImg,
  NavContainer,
} from './styled';

import Logo from '../../assets/logo.svg';
import Button from '../Button';

const Nav = () => {
  return (
    <NavContainer>
      <Item>
        <LogoContainer>
          <LogoImg src={Logo} alt="Logo" />
        </LogoContainer>
      </Item>

      <Item>
        <Button small>Criar</Button>
        <IconContainer>
          <FaRegUser />
        </IconContainer>
      </Item>
    </NavContainer>
  );
};

export default Nav;

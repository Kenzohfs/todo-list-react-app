import { Outlet } from 'react-router';
import Nav from '../components/Nav';
import { Container, Content } from './styled';

const Layout = () => {
  return (
    <Container>
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;

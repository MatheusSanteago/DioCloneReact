import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';

import {
    BuscarInputConteiner,
    ButtonContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'


const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img alt='Logo da Dio' />
                <BuscarInputConteiner>
                    <Input placeholder='Buscar....' />
                </BuscarInputConteiner>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href="$"><ul>
                    <li>Home</li>
                    <li>Para Empresas</li>
                    </ul>
                </MenuRight>
                <Button title='Entrar'></Button>
                <Button title='Cadastrar'></Button>
            </Row>
        </Container>
    </Wrapper>
  )
};

export { Header };
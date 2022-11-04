import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';
import { MdSearch } from "react-icons/md";

import {
    BuscarInputConteiner,
    ButtonContainer,
    Column,
    Container,
    IconContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'


const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img alt='Logo da Dio' />
                {autenticado ? (<>
                <BuscarInputConteiner>
                    <IconContainer>
                        <MdSearch />
                    </IconContainer>
                    <Input placeholder='Buscar....' />
                </BuscarInputConteiner>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
            {autenticado ? (
                <>
                <UserPicture src='https://avatars.githubusercontent.com/u/24796313?v=4' />
                </>
                ) : (
                <>
                    <MenuRight href="$"><ul>
                    <li>Home</li>
                    <li>Para Empresas</li>
                    </ul>
                </MenuRight>
                <Button title='Entrar'></Button>
                <Button title='Cadastrar'></Button>
                </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
};

export { Header };
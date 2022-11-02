// import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { MdEmail, MdLock } from "react-icons/md";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'

const Login = () => {
    return (<>
    <Header />
    <Container>
        <Column>
            <Column>
                <Title>
                    A plataforma para você aprender com os experts, dominar as principais
                    tecnologias e entar mais rápidp nas empresas mais desejadas.
                </Title>
            </Column>
        </Column>
        <Column>
        <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin> Faça seu login e make the change</SubtitleLogin>
            <form>
            <Input placeholder='E-mail' leftIcon={<MdEmail  />}/>
            <Input placeholder='Senha' type='password' leftIcon={<MdLock />}/>
            <Button title="Entrar" variant="secondary"/>
            </form>
            <Row>
                <EsqueciText>Esqueci minha ssenha</EsqueciText>
                <CriarText>Criar conta</CriarText>
            </Row>
        </Wrapper>
        </Column>
    </Container>
    </>)
};

export { Login };
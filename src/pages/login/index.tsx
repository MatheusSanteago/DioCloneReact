import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { MdEmail, MdLock } from "react-icons/md";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'
import { IFormData } from './types';
// import { isFormElement } from 'react-router-dom/dist/dom';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3,'No mínimo 3 caracters').required('Campo Obrigatório'),
  }).required();

const Login = () => {
    const {control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });;

    const onSubmit = async (formData: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            } else {
                console.log('Email || Senha inválida')
            }
            console.log(data)
        } catch (error) {
            alert('ERROR')
        }
    };

    const navigate = useNavigate();

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input control={control} errorMessage={errors?.email?.message} name="email" placeholder='E-mail' leftIcon={<MdEmail  />}/>
                <Input control={control} errorMessage={errors?.password?.message} name="password" placeholder='Senha' type='current-password' leftIcon={<MdLock />}/>
                <Button title="Entrar" variant="secondary" type='submit'/>
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
// onClick={handleClickSignIn} 
export { Login };
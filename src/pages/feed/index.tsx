import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Column, Container, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title> Feed </Title>
                <Card />        
                <Card />    
                <Card />    
                <Card />    
                <Card />    
            </Column>
            <Column flex={1}>
                <TitleHighlight>#RANKING DA SEMANA</TitleHighlight>
                <UserInfo percentual={50} nome="Matheus Santeago" image='https://avatars.githubusercontent.com/u/24796313?v=4'/>
                <UserInfo percentual={50} nome="Matheus Santeago" image='https://avatars.githubusercontent.com/u/24796313?v=4'/>
                <UserInfo percentual={50} nome="Matheus Santeago" image='https://avatars.githubusercontent.com/u/24796313?v=4'/>
                <UserInfo percentual={50} nome="Matheus Santeago" image='https://avatars.githubusercontent.com/u/24796313?v=4'/>
                <UserInfo percentual={50} nome="Matheus Santeago" image='https://avatars.githubusercontent.com/u/24796313?v=4'/>
                <span>VER TODOS</span>
            </Column>
        </Container>
    </>)
};

export { Feed };
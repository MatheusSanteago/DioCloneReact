
import { FiThumbsUp } from 'react-icons/fi'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/24796313?v=4'/>
                <div>
                    <h4>Matheus Santeago</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto do Módulo de React</h4>
                <p>Projeto realizado para o Bootcamp Inter+
                    com React ...<strong>Saiba mais</strong>
                </p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #REACT #JS</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };
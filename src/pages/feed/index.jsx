// import { Link } from 'react-router-dom';

// import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

import { Container } from './styles'
import { UserInfo } from '../../components/Card/styles';

const Feed = () => {
    return (<>
        <Header />
        <Container>
            <Card />
            <UserInfo percentual={50} src={}/>
        </Container>
    </>)
};

export { Feed };
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 15px;
`
export const BuscarInputConteiner = styled.div`
    width: 175px;
    height: 38px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
`
export const IconContainer = styled.div`
  svg{
    margin-top: 4px;
    font-size: 27px;
    }
`
export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    font-size: 18px;
`
export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    width: 400px;
`
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFF;
`
export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    border: 0px;
    outline: none;
    color: white;
`
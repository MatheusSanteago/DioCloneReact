import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3b3450;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
export const IconContainer = styled.div`
    margin-right: 10px;
` 
export const InputText = styled.input`
    background-color: transparent;
    color: white;
    border: 0;
    height: 38px;
    outline: none;
` 
export const ErrorText = styled.span`
    color: red;
    font-size: 20px;
`
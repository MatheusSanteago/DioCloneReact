import styled from 'styled-components';
import { IColumn } from './types';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`
export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFF;
`
export const TitleHighlight = styled.h3`
    color: #FFFFFF80;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
`
export const Column = styled.div<IColumn>`
    display: flex;
    flex-direction: column;
   flex:${({flex}) => flex};
   padding-right: 24px;

   span{
   align-self: center; 
   }
`


import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
  background-color: #F3EFEF; 
`

export const Header = styled.header`
  display: flex;
`

export const MediaDiv = styled.div`
  margin: 10px;
  @media(min-width: 650px){
    display: none;
  }
`
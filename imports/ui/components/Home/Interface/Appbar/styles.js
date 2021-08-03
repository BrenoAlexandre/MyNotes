import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const MediaDiv = styled.div`
  margin-left: 10px;
  @media(min-width: 650px){
    display: none;
  }
`

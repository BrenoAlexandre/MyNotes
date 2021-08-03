import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`
export const MediaDiv = styled.div`
  @media(max-width: 650px){
    display: none;
  }
`
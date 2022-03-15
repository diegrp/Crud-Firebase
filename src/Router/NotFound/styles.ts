import styled from "styled-components";

export const Container = styled.div`
  background-color: #ddd;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  margin: auto;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1{
    font-size: 28px;
    margin-bottom: 10px;
    color: #000;
  }
  p{
    font-size: 15px;
    color: black;
  }
`;
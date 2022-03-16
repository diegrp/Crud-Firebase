import styled from "styled-components";

export const Container = styled.section`
  margin:auto;
  max-width: 500px;
`;

export const Info = styled.div`
  display: grid;
  grid-template: 1fr 1fr;
  gap: 1rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  padding: 20px;
  border-radius: 10px;
  
  h1{
    font-size: 28px;
    margin-bottom: 10px;
    color: #000;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;


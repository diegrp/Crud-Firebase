import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 1rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  background-color: #ddd;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Icon = styled.div`
  font-size: 30px;
  width: 60px;
  height: 60px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  h1{
    font-size: 28px;
    color: black;
    margin-bottom: 10px;
  }

  p{
    font-size: 15px;
    color: black;
  }
`;

export const FormContainer = styled.form`
  text-align: center;
`;



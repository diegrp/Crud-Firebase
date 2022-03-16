import styled from "styled-components";

export const Table = styled.table`
  font-size: 1rem;
  padding: 1rem;
  margin: auto;
  border-radius: 0.5rem;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const TableHeadColumn = styled.th`
  background-color: #009879;
  color: #fff;
  text-align: center;
  padding: 0.8rem;
`;

export const TableColumn = styled.td`
  padding: 0.8rem;
`;

export const TableLine = styled.tr`
  border-bottom: 1px solid #b8b8d4;
  &:nth-child(even){
    background-color: #f3f3f3;
  }
  &:last-child{
    border-bottom: 5px solid #009879;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 18px;
    font-weight: normal;
    color: black;
  }

  span{
    font-weight: bold;
    color: red;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
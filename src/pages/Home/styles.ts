import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Table = styled.table`
  margin: auto;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const TableHeadColumn = styled.th`
  background-color: #009879;
  color: #fff;
  padding: 0.8rem;
`;

export const TableColumn = styled.td`
  padding: 1rem;
`;

export const TableLine = styled.tr`
  border-bottom: 1px solid #b8b8d4;
  background-color: #f3f3f3;
  
  &:last-child{
    border-bottom: 5px solid #009879;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: #b8b8d4;
  padding: 5px;
  border-radius: 5px;
`;

export const SortedData = styled.div`
  width: 500px;
  margin: 40px auto;
  background-color: #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

  h2{
    font-size: 28px;
    color: black;
    margin-bottom: 10px;
  }

  p{
    font-size: 15px;
    margin-bottom: 20px;
  }

`;

export const SelectWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5rem;

  label{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  a{
    margin-top: -20px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;


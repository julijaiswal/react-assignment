import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  text-align: center; 
  margin-bottom: 50px;
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  flex: 1;
  justify-content: center;
  background: lightcyan;
  padding: 2rem;
  border-radius: 16px;
  width: 30%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0069d9;
  }
`;

export const Error = styled.p`
  color: red;
  margin-top: 10px;
`;

export const Link = styled.a`
  color: blue;
  padding: 5px;
  margin-top: 10px;
`;
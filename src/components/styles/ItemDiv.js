import styled from "styled-components";

const TodoDiv = styled.div`
  display: flex;
  padding: 0.5rem 0.1rem;

  p {
    flex-grow: 2;
    align-self: flex-start;
  }

  button {
    border: none;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
`;

export default TodoDiv;

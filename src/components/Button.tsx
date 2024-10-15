import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  type?: string;
  children: React.ReactNode;
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  width: 9rem;
  height: 4rem;
  background-color: #4f45e3;
  border-radius: 0.7rem;
  color: #fff;
  border: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.5rem;
  transition: 200ms;

  ${(prop) =>
    prop.type === "rounded" &&
    css`
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      background-color: #e8e8e8;
      color: #333;
      font-size: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  & svg {
    line-height: 5rem;
  }
`;

// const Button: React.FC<ButtonProps> = ({ children }) => {
//   return <StyledButton>{children}</StyledButton>;
// };

export default Button;

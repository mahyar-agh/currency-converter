import React from "react";
import styled, { css } from "styled-components";

interface CurrencyDropDownProps {
  label: string;
  value: string | number;
  inputType?: "number" | "text";
  isReadOnly?: boolean;
  onAmountChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Lablel = styled.label`
  font-size: 1.4rem;
  color: #575757;
`;

interface InputType {
  inputType?: string;
}

const Input = styled.input<InputType>`
  width: 14.5rem;
  height: 3.4rem;
  background-color: #e9e8ed;
  border-radius: 0.4rem;
  display: block;
  padding: 0.6rem;
  margin-top: 0.3rem;
  border: none;
  font-size: 1.6rem;

  ${(prop) =>
    prop.type === "number" &&
    css`
      width: 100%;
      background-color: transparent;
      border: 1px solid #dcd7d7;
    `}

  &:focus {
    outline: none;
  }
`;

const CurrencyDropDown: React.FC<CurrencyDropDownProps> = ({
  label,
  value,
  inputType = "text",
  isReadOnly = false,
  onAmountChange,
}) => {
  return (
    <div>
      <Lablel>{label} :</Lablel>
      <Input
        type={inputType}
        value={value}
        readOnly={isReadOnly}
        onChange={onAmountChange}
      />
    </div>
  );
};

export default CurrencyDropDown;

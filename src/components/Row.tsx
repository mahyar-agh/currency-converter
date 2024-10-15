import styled, { css } from "styled-components";

interface RowProps {
  type?: "horizental" | "vertical";
}

const Row = styled.div<RowProps>`
  display: flex;
  margin-top: 1.7rem;

  ${(prop) =>
    prop.type === "horizental" &&
    css`
      justify-content: space-between;
      align-items: end;
    `}

  ${(prop) =>
    prop.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;

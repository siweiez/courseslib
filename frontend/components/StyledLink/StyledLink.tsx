import styled from "@emotion/styled";

export type Props = {
  underline?: boolean;
};

export const StyledLink = styled.a<Props>`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.font.regular};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.8;
  }
`;

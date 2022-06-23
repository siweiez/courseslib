import { FC } from "react";
import styled from "@emotion/styled";
import { boxShadow, borderRadius } from "@/components/styles";

const Section = styled.section`
  padding: 1vmin 4vmin 4vmin;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};

  ${borderRadius};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
`;

type Props = {
  header: string;
  children: any;
};

export const Tile: FC<Props> = ({ header, children }) => (
  <Section>
    <h2>{header}</h2>
    {children}
  </Section>
);

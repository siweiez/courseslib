import Link from "next/link";
import styled from "@emotion/styled";
import { Logo } from "@/components/Logo";
import { StyledLink } from "@/components/StyledLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
`;

const CustomLink = styled(StyledLink)`
  text-decoration: none;
  font-size: 3rem;
`;

export default function Custom404() {
  return (
    <Wrapper>
      <Logo>404</Logo>
      <Logo>Page Not Found . . . </Logo>
      <Link href="/" passHref>
        <CustomLink>Go to Home</CustomLink>
      </Link>
    </Wrapper>
  );
}
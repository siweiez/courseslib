import { FC } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styled from "@emotion/styled";
import { boxShadow, borderRadius } from "@/components/styles";
import { StyledLink } from "@/components/StyledLink";
import { Course as CourseType } from "@/types";
import { IconButton } from "../IconButton";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${borderRadius};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
`;

const StyledHeader = styled.header`
  padding-top: 0.5rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  width: 94vw;
  @media (min-width: 900px) {
    width: 46vw;
  }
`;

const ButtonBlock = styled.section`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: end;
`;

export type Props = {
  header: string;
  link: string;
  imageProps: ImageProps;
};

export const Course: FC<Props> = ({ children, header, link, imageProps }) => (
  <Block>
    <Section>
      <Link href={link} passHref>
        <StyledLink>
          <Image style={{ borderRadius: "20px" }} {...imageProps} alt={header} />
          <StyledHeader>{header}</StyledHeader>
        </StyledLink>
      </Link>
      {children}
      <ButtonBlock>
        <IconButton
          name="Add"
          color="secondary"
          size={1.5}
        >
          Add to My List
        </IconButton>
      </ButtonBlock>
    </Section>
  </Block>
);
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  margin: 2vh 1vw;
`;

export const Courses: FC<{ courses: CourseType[]; strapi_url: string }> = ({
  courses,
  strapi_url,
}) => (
  <Wrapper>
    {courses?.map(
      ({
        id,
        attributes: {
          header,
          subtitle,
          publishedAt,
          cover: {
            data: {
              attributes: {
                formats: {
                  medium: { url, width, height },
                },
              },
            },
          },
        },
      }) => (
        <Course
          key={id}
          header={header}
          link={`/course/${id}`}
          imageProps={{
            width,
            height,
            alt: `Cover for ${header}`,
            src: `${strapi_url}${url}`,
          }}
        >
          <h3>{subtitle}</h3>
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toDateString()}
          </time>
        </Course>
      )
    )}
  </Wrapper>
);

import { FC } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styled from "@emotion/styled";
import { boxShadow, borderRadius } from "@/components/styles";
import { StyledLink } from "@/components/StyledLink";
import { Course as CourseType } from "@/types";

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

const CourseLink = styled(StyledLink)`
  display: flex;
  width: 94vw;
  @media (min-width: 900px) {
    width: 46vw;
  }
`;

export type Props = {
  header: string;
  link: string;
  imageProps: ImageProps;
};

export const Course: FC<Props> = ({ children, header, link, imageProps }) => (
  <Link href={link} passHref>
    <CourseLink>
      <Section>
        <Image style={{ borderRadius: "10px" }} {...imageProps} alt={header} />
        <StyledHeader>{header}</StyledHeader>
        {children}
      </Section>
    </CourseLink>
  </Link>
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

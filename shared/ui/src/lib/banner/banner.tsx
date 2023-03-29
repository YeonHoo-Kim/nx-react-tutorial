// import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

// const StyledBanner = styled.div`
//   color: pink;
// `;

export function Banner(props: BannerProps) {
  return <header>{props.text}</header>;
}

export default Banner;

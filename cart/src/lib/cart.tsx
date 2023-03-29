import styled from '@emotion/styled';
import { Banner } from '@store/shared/ui';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface RoutesCartProps {}

const StyledRoutesCart = styled.div`
  color: blue;
`;

export function RoutesCart(props: RoutesCartProps) {
  return (
    <StyledRoutesCart>
      <Banner text="Welcome to the cart!" />
      <Link to="/">Continue Shopping</Link>
    </StyledRoutesCart>
  );
}

export default RoutesCart;

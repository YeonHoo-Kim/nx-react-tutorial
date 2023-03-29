import styled from '@emotion/styled';
import { Banner } from '@store/shared/ui';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ShopProps {}

const StyledShop = styled.div`
  color: pink;
`;

export function Shop(props: ShopProps) {
  return (
    <StyledShop>
      <Banner text="Here is a list of products to buy..." />
      <Link to="/cart">View Cart</Link>
    </StyledShop>
  );
}

export default Shop;

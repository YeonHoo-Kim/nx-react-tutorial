import styled from '@emotion/styled';
import { Banner } from '@store/shared/ui';
import { Link } from 'react-router-dom';
import Counter from '../counter/counter';
import StatusBar from '../status-bar/status-bar';

/* eslint-disable-next-line */
export interface ShopProps {}

const StyledShop = styled.div`
  color: pink;
`;

export function Shop(props: ShopProps) {
  return (
    <>
      <StatusBar />
      <Counter />
      <StyledShop>
        <Banner text="Here is a list of products to buy..." />
        <Link to="/cart">View Cart</Link>
      </StyledShop>
      <div className="bg-indigo-500 dark:bg-red-500 p-2 font-mono text-[50px] text-black">Hello!</div>
    </>
  );
}

export default Shop;

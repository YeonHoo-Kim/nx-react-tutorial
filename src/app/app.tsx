import styled from '@emotion/styled';
import { RoutesCart } from '@store/cart';
import { Route, Routes } from 'react-router-dom';
import './style.css';

import NxWelcome from './nx-welcome';
import Shop from './shop/shop';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    // <StyledApp>
    //   <NxWelcome title="store" />
    // </StyledApp>
    <>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/cart" element={<RoutesCart />}></Route>
      </Routes>
    </>
  );
}

export default App;

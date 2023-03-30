import styled from '@emotion/styled';
import { RoutesCart } from '@store/cart';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './style.css';

import NxWelcome from './nx-welcome';
import Shop from './shop/shop';
import { store } from './store';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    // <StyledApp>
    //   <NxWelcome title="store" />
    // </StyledApp>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="/cart" element={<RoutesCart />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;

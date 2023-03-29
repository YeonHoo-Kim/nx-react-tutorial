import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Cart from './cart';

describe('Cart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});

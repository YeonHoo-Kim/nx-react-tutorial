import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Shop from './shop';

describe('Shop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});

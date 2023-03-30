import { render } from '@testing-library/react';

import StatusBar from './status-bar';

describe('StatusBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StatusBar />);
    expect(baseElement).toBeTruthy();
  });
});

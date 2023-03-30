import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useOnlineStatus from '../hooks/useOnlineStatus';

/* eslint-disable-next-line */
export interface StatusBarProps {}

const StyledOnlineStatusBar = styled.div`
  color: green;
`;

const StyledOfflineStatusBar = styled.div`
  color: red;
`;

export function StatusBar(props: StatusBarProps) {
  const isOnline = useOnlineStatus(true);

  if (isOnline) {
    return (
      <StyledOnlineStatusBar>
        <h1>✅ Online</h1>
      </StyledOnlineStatusBar>
    );
  }

  return (
    <StyledOfflineStatusBar>
      <h1>❌ Disconnected</h1>
    </StyledOfflineStatusBar>
  );
}

export default StatusBar;

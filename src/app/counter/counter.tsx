import { decrement, increment } from '../store/modules/counter';
import styled from '@emotion/styled';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store';

/* eslint-disable-next-line */
export interface CounterProps {}

const StyledButton = styled.button`
  background-color: pink;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 1rem;
  &:hover {
    color: white;
  }
`;

const StyledCounter = styled.span`
  color: blue;
`;

export function Counter(props: CounterProps) {
  // use useSelector to retrieve state from store
  // const count = useSelector((state) => state.counter.value);
  const count = useAppSelector((state) => state.counter.value);
  // use useDispatch to dispatch updated state to view
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <StyledButton onClick={() => dispatch(increment())}>Increment</StyledButton>
        <StyledCounter>{count}</StyledCounter>
        <StyledButton onClick={() => dispatch(decrement())}>Decrement</StyledButton>
      </div>
    </div>
  );
}

export default Counter;

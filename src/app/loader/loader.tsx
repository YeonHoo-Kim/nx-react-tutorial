// import styled from '@emotion/styled';
import { Player } from '@lottiefiles/react-lottie-player';
import { useAppSelector, useAppDispatch } from '../store';
import { start, finish } from '../store/modules/loading';

/* eslint-disable-next-line */
export interface LoaderProps {}

// const StyledLoader = styled.div`
//   color: pink;
// `;

function LoadingBox() {
  return (
    <div className="w-48 h-48 p-10 rounded-full">
      <Player
        src="src/assets/loading.json"
        speed={2}
        loop
        autoplay
        background="transparent"
        controls
      />
    </div>
  );
}

export function Loader(props: LoaderProps) {
  const loading = useAppSelector((state) => state.loading);
  // use useDispatch to dispatch updated state to view
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className='flex'>
        <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm" onClick={() => dispatch(start())}>start</button>
        <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm" onClick={() => dispatch(finish())}>stop</button>
      </div>
      {loading.value && <LoadingBox />}
    </div>
  );
}

export default Loader;

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './modules/counter';
import loadingReducer from './modules/loading';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector = useSelector<TypedUseSelectorHook<RootState>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { PostState } from './types';
import { BlogPageSaga } from './saga';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostRequest: state => {
      state.loading = true;
    },
    fetchPostSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions, reducer } = slice;

export const useBlogPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: BlogPageSaga });
  return { actions: slice.actions };
};

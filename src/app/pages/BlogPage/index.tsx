import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks/useRedux';
import { useBlogPageSlice } from './slice';

const BlogPage = () => {
  const dispatch = useAppDispatch();
  const { actions } = useBlogPageSlice();
  const { fetchPostRequest } = actions;

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, []);

  const fetchPostData = useAppSelector(state => state.post);
  const { posts } = fetchPostData;

  const renderedPosts = posts.map(post => {
    return (
      <div key={post.id}>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
      </div>
    );
  });

  return <div>{renderedPosts}</div>;
};

export default BlogPage;

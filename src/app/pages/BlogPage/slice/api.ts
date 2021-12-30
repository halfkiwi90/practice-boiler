import jsonPlaceholder from 'utils/api/jsonPlaceholder';

export const getPost = () => {
  return jsonPlaceholder.get('/posts');
};

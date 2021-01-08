import jsonPlaceholder from '../apis/jsonPlaceholder';
//Optimized function
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response
  })
};
// Full function
// export const fetchPosts = () => {
//   return async (dispatch, getState) => {
//     const response = await jsonPlaceholder.get('/posts'); 

//     dispatch({
//       type: 'FETCH_POSTS',
//       payload: response
//     })
//   };
// };
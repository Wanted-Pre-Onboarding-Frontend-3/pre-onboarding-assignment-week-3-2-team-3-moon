import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentData } from './store/comment-actions';

import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';

function App() {
  const dispatch = useDispatch();
  const comments = useSelector(state=> state.comment.comments);

  useEffect(() => {
    dispatch(fetchCommentData());
  }, [dispatch]);

  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;

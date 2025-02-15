import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentData, fetchOneCommentData } from './store/comment-actions';

import CommentListContainer from './containers/CommentListContainer';
import PageListContainer from './containers/PageListContainer';
import FormContainer from './containers/FormContainer';

function App() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.comment.pageNum);

  useEffect(() => {
    dispatch(fetchCommentData());
    dispatch(fetchOneCommentData(pageNumber));
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

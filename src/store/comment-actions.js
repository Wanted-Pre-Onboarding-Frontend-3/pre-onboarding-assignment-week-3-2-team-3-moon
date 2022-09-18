import { commentActions } from './comment-slice';
import { instance } from '../api/axios-instance';

export const fetchCommentData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { data } = await instance.get('/comments');
      return data;
    };

    try {
      const comments = await fetchData();
      dispatch(commentActions.getAllComments(comments));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchOneCommentData = (pageId) => {
  return async (dispatch) => {
    const fetchData = async (pageId) => {
      const { data } = await instance.get(`/comments?_page=${pageId}&_limit=4&_order=desc`);
      return data;
    };

    try {
      const comments = await fetchData(pageId);
      dispatch(commentActions.getOnePageComments(comments));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addComment = (newComment) => {
  return async (dispatch) => {
    const postData = async (newComment) => {
      const response = await instance.post('/comments', newComment);
      console.log(response)
      return response;
    };

    try {
      const response = await postData(newComment);
      if(response.status === 201) {
        const {data} = await instance.get('/comments')
        dispatch(commentActions.addComments(data));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const putCommentData = (newComment, commentId) => {
  return async (dispatch) => {
    const putData = async (newComment, commentId) => {
      const response = await instance.put(`/comments/${commentId}`, newComment);
      return response;
    };

    try {
      const response = await putData(newComment, commentId);
      if(response.status === 200) {
        const {data} = await instance.get('/comments')
        dispatch(commentActions.putComment(data));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    const deleteData = async (commentId) => {
      const response = await instance.delete(`/comments/${commentId}`);
      return response;
    };
    try {
      const response = await deleteData(commentId);
      if(response.status === 200) {
        const {data} = await instance.get('/comments')
        dispatch(commentActions.deleteComments(data));
      }
    } catch (error) {
      console.error(error);
    }
  };
};

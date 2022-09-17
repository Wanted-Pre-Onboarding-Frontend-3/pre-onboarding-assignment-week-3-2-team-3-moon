import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    pageLength: 0,
    isEdit: false,
    editComment: []
  },
  reducers: {
    setEditMode(state, action) {
      const editMode = action.payload[0];
      state.isEdit = editMode;
      const comment = action.payload[1];
      state.editComment = comment;
    },   
    getAllComments(state, action) {
      const commentsData = action.payload;
      state.comments = commentsData;
      state.pageLength = commentsData.length;
    },
    getOnePageComments(state, action) {
      const commentsData = action.payload;
      console.log(commentsData);
      // state.comments = commentsData;
      // state.pageLength = commentsData.length;
    },
    addComments(state, action) {
      console.log(action.payload);
      state.comments = action.payload;
    },
    putComment(state, action) {
      state.comments = action.payload;
      state.isEdit = false;
      console.log(action.payload)
    },
    deleteComments(state, action) {
      state.comments = action.payload;
      console.log(action.payload);
    },
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice;

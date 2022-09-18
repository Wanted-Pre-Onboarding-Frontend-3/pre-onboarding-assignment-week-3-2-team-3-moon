import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, putCommentData } from '../store/comment-actions';
import styled from 'styled-components';

const Form = () => {
  const dispatch = useDispatch();
  const editMode = useSelector((state) => state.comment);
  const editModeComment = editMode.editComment.editComment;
  const date = new Date()
    .toLocaleDateString()
    .replaceAll('. ', '-')
    .slice(0, -1);
  const [comment, setComment] = useState({
    author: '',
    content: '',
  });

  const { author, content } = comment;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const [editComment, setEditComment] = useState({
    editAuthor: '',
    editContent: '',
  });

  // useEffect(() => {
  //   if (editMode) {
  //     setEditComment(editModeComment);
  //   }
  // }, [editMode]);

  const { editAuthor, editContent } = editComment;
  const handleEditChange = (e) => {
    const { value, name } = e.target;
    setEditComment({
      ...editComment,
      [name]: value,
    });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      profile_url: 'https://picsum.photos/50/50',
      author: comment.author,
      content: comment.content,
      createdAt: date,
    };
    await dispatch(addComment(newComment));
    setComment({
      author: '',
      content: '',
    });
  };

  const handlePutSubmit = async (e) => {
    e.preventDefault();
    const putComment = {
      profile_url: 'https://picsum.photos/50/50',
      author: editComment.editAuthor,
      content: editComment.editContent,
      createdAt: date,
    };
    dispatch(putCommentData(putComment, editMode.editComment.id));
  };

  return (
    <FormStyle>
      {!editMode.isEdit ? (
        <form onSubmit={handlePostSubmit}>
          등록
          <input type='text' name='profile_url' />
          <br />
          <input
            type='text'
            name='author'
            placeholder='작성자'
            onChange={handleChange}
            value={author}
          />
          <br />
          <textarea
            name='content'
            placeholder='내용'
            onChange={handleChange}
            required
            value={content}
          ></textarea>
          <br />
          <input type='text' name='createdAt' placeholder={date} />
          <br />
          <button type='submit'>등록</button>
        </form>
      ) : (
        <form onSubmit={handlePutSubmit}>
          수정
          <input type='text' name='profile_url' />
          <br />
          <input
            type='text'
            name='editAuthor'
            placeholder='작성자'
            onChange={handleEditChange}
            value={editAuthor}
          />
          <br />
          <textarea
            name='editContent'
            placeholder='내용'
            onChange={handleEditChange}
            required
            value={editContent}
          ></textarea>
          <br />
          <input type='text' name='createdAt' placeholder={date} />
          <br />
          <button type='submit'>등록</button>
        </form>
      )}
    </FormStyle>
  );
};

export default Form;

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type='text'] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

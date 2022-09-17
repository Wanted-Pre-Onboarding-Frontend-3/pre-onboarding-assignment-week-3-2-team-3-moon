import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { instance } from '../api/axios-instance';
import { deleteComment, fetchCommentData } from '../store/comment-actions';
import { commentActions } from '../store/comment-slice';

const CommentList = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  const handleEditMode = (comment) => {
    const putState = [
      true,
      comment
    ]
    dispatch(commentActions.setEditMode(putState))
  }

  const handleDelete = async (commentId) => {
    try {
      dispatch(deleteComment(commentId))
    } catch (error) {
      console.error(error)
    }
  };

  return comments?.map((comment, i) => (
    <Comment key={i}>
      <img src={comment.profile_url} alt='' />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <Button>
        <a onClick={() => handleEditMode(comment, true)}>수정</a>
        <a onClick={() => handleDelete(comment.id)}>삭제</a>
      </Button>

      <hr />
    </Comment>
  ));
};

export default CommentList;

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

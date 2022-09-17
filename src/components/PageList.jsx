import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchOneCommentData } from '../store/comment-actions';

function PageList() {
  const dispatch = useDispatch();
  const commentsCount = useSelector((state) => state.comment.pageLength);
  const pageArray = [];
  for (let i = 1; i < commentsCount / 4; i++) {
    pageArray.push(i);
  }

  const handlePageChange = (item) => {
    dispatch(fetchOneCommentData(item));
  };

  return (
    <PageListStyle>
      {pageArray.map((item) => {
        return (
          <Page key={item} onClick={() => handlePageChange(item)}>
            {item}
          </Page>
        );
      })}
    </PageListStyle>
  );
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
`;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneCommentData } from '../store/comment-actions';
import styled from 'styled-components';

function PageList() {
  const dispatch = useDispatch();
  const commentsCount = useSelector((state) => state.comment.pageLength);
  const pageArray = [];
  for (let i = 1; i < commentsCount / 4; i++) {
    pageArray.push(i);
  }

  const handlePageChange = (pageId) => {
    dispatch(fetchOneCommentData(pageId));
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

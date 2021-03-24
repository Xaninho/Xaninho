import styled from "styled-components";

export const SinglePostContainer = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const SinglePostWrapper = styled.article`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const PostImage = styled.img`
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  object-fit: cover;
  width: 100%;
  max-height: 470px;
`;

export const SinglePostInfo = styled.div``;

export const SinglePostTitle = styled.h1`
  font-family: "Philosopher";
  color: #353535;
  font-size: 50px;
`;

export const SinglePostDate = styled.h3`
  color: #555555;
`;

export const SinglePostExcerpt = styled.div`
  color: #353535;
`;

export const BlockContentWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
`;

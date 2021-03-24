import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const PostContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const PostWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PostCard = styled(LinkR)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 370px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PostImage = styled.img`
  min-height: 180px;
  max-height: 180px;
  object-fit: cover;
  width: 100%;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h1`
  font-size: 2.5rem;
  color: #353535;
  margin-bottom: 64px;
  font-family: "Philosopher";
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PostDescription = styled.div``;

export const PostDate = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #555555;
  text-align: center;
`;

export const PostTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #353535;
  font-weight: bold;
  text-align: center;
`;

export const PostExcerpt = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 20px;
  color: #353535;
`;

export const Button = styled(LinkR)`
  margin-top: 40px;
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #14a3c7;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 3px solid #14a3c7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #14a3c7;
    color: #f5f5f5;
  }
`;

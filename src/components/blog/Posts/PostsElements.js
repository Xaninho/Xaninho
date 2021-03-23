import styled from "styled-components";

export const PostContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #cbf7ee;
`;

export const PostWrapper = styled.div`
  max-width: 1000px;
  margin-top: 0 auto;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PostCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
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
  margin-top: 100px;
  font-family: "Playfair Display";
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PostDescription = styled.div``;

export const PostDate = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #353535;
  text-align: center;
`;

export const PostTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #353535;
  font-family: "Philosopher";
  font-weight: bold;
  text-align: center;
`;

export const PostExcerpt = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 20px;
  color: #353535;
`;

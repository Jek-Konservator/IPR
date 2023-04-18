import styled from "@emotion/styled";

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100px;
  width: 500px;
  margin: 5px;
  border-radius: 8px;
  background-color: #2b5278;
  color: #f5f5f5;
  font-family: Roboto;
`;
export const TitlePost = styled.div`
  margin: 10px;
  text-align: start;
  font-size: 22px;
`;
export const SubTitlePost = styled.div`
  margin: 10px;
  text-align: start;
  font-size: 15px;
`;

export const PhotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #0e1621;
`;

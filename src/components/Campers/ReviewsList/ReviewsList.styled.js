import styled from "styled-components";

export const ReviewsAllList = styled.ul`
  width: 100%;
  height: 532px;

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 40px;
  }

  &::-webkit-scrollbar-track {
    margin: 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 36px;
    border: 16px solid transparent;
    background-clip: content-box;
    background-color: #d9d9d9;
  }
`;

export const ReviewsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const ReviewsDataWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ReviewsCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: ${(p) => p.theme.color.white};
  color: ${(p) => p.theme.color.red};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  margin-right: 16px;
`;

export const ReviewsName = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
`;

export const ReviewsComment = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.color.grey};
`;

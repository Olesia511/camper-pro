import styled from "styled-components";

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

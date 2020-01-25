import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 0% 5% 0%;

  @media only screen and (max-width: 600px) {
    padding: 5% 0%;
  }
`;
export const Title = styled.h2`
  color: #000;
  line-height: 0;
  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 60px;
  }
`;
export const Sub = styled.h5`
  color: #6923e7;
  line-height: 0;
  margin-bottom: 10px;
`;
export const Body = styled.div`
  display: flex;
  justify-content: center;
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 30px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

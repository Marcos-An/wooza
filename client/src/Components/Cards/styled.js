import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0px 0px 4px -2px rgba(179, 179, 179, 1);
  transition: transform 0.2s;
  :hover {
    box-shadow: 0px 0px 16px -1px rgba(179, 179, 179, 1);
    transform: scale(1.05);
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 75vw;
  }
`;
export const Infos = styled.div`
  padding: 13px;
`;
export const Divider = styled.div`
  height: 1px;
  background: #e6e6e6;
  padding: 0px 10px;
  margin-bottom: 20px;
`;
export const Cargo = styled.h4`
  color: #6923e7;
  font-size: 13px;
  line-height: 0;
  font-weight: 500;
`;
export const Name = styled.h4`
  color: #000;
  font-size: 20px;
  line-height: 0;
  font-weight: 700;
`;
export const ProjetoInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PrefixInfo = styled.div`
  color: #aeb3ba;
  font-size: 11px;
  line-height: 0;
  font-weight: 700;
  margin-bottom: 5px;
`;
export const Projeto = styled.h4`
  color: #000;
  font-size: 13px;
  line-height: 0;
  font-weight: 700;
`;

export const Image = styled.div`
  background-image: url(${props => props.image});
  border-radius: 8px 8px 0px 0px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 190px;
`;

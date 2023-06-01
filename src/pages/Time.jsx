import { useCurrentData } from '../hooks/useCurrentData';
import styled, { css } from 'styled-components';
import { backgrounds, fontSizes } from '../styles';

const Wrapper = styled.div`
height: ${({ isEmpty }) => (isEmpty ? '100vh' : '28vh')};
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const ContWrapper = styled.div`
  height: 300px;
  width: 383px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;

  ${props =>
    !props.isEmpty &&
    css`
      border-radius: 0;
      box-shadow: none;
      width: 283px;
    `}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  ${props =>
    !props.isEmpty &&
    css`
      height: auto;
    `}
`;

const TopContainer = styled(Container)`
  background-color: ${backgrounds.timePrimary};
  color: #ffffff;
  font-size: ${fontSizes.size96};
  letter-spacing: 7.13px;
  line-height: 115px;

  ${props => 
  !props.isEmpty &&
  css`
    height: 100px;
    background-color: inherit;
  `}
`;

const BottomContainer = styled(Container)`
  background-color: ${backgrounds.timeSecondary};
  color: #ffffff;
  font-size: ${fontSizes.size37};
  line-height: 44px;
  white-space: pre-line;

  ${props =>
    !props.isEmpty &&
    css`
      background-color: inherit;
      font-size: ${fontSizes.size22};
      line-height: 26px;
    `}
`;


const Time = ({ isEmpty }) => {
  const time = useCurrentData();


  return (
    <Wrapper isEmpty={isEmpty}>
      <ContWrapper isEmpty={isEmpty}>
        <TopContainer isEmpty={isEmpty}>
          {time.time}
        </TopContainer>
        <BottomContainer isEmpty={isEmpty}>
          {`${time.date} ${isEmpty ? '\n' : '·'} ${time.day}`}
        </BottomContainer>
      </ContWrapper>
    </Wrapper>
  );
};

export default Time;
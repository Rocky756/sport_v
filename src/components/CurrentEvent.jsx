import styled from 'styled-components';
import { colors, backgrounds, fontSizes } from '../styles';
import { ClockCircleOutlined } from '@ant-design/icons';

const CurrentContainer = styled.div`
  width: 451px;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backgrounds.buttonPrimary};
  border: 1px solid ${backgrounds.btnBorder};
  border-radius: 15px;
  color: ${colors.primary};
  font-size: ${fontSizes.size32};
  line-height: 1.2;
  box-sizing: border-box;
  @media (max-width: 767px) {
    width: 70vw;
    font-size: ${fontSizes.size20};
  };
`;

const CurrentEvent = () => {
  return (
    <CurrentContainer>
      идет сейчас
      <ClockCircleOutlined style={{ marginLeft: '20px', fontSize: '6vh' }}/>
    </CurrentContainer>

  )
};

export default CurrentEvent;
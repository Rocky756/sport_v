import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { fontSizes, colors, widgetColors } from '../styles';

const CircleContainer = styled.div`
  margin-right: 15px;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 767px) {
    margin-top: 15px;
    margin-right: 0;
  };
  `;

const Number = styled.span`
  font-size: ${fontSizes.size50};
  color: ${colors.primary};
`;

const Text = styled.span`
font-size: ${fontSizes.size20};
  color: ${colors.primary};
`;

const Circle = ({ number, text, color }) => {

  let progress = 100;

  if (color === 'days') {
    progress = (number / 7) * 100;
  } else if (color === 'hours') {
    progress = (number / 24) * 100;
  } else if (color === 'minutes') {
    progress = (number / 60) * 100;
  } else if (color === 'seconds') {
    progress = (number / 60) * 100;
  }

  return (
    <CircleContainer color={color} progress={progress}>
      <CircularProgressbarWithChildren 
        value={progress}
        // text={`${number}`}
        counterClockwise
        styles={buildStyles({
          pathColor: widgetColors[color],
          textColor: colors.primary,
          trailColor: 'transparent',
          strokeLinecap: 'butt',
        })}
      >
        <Number color={color}>{number}</Number>
        <Text color={color}>{text}</Text>
      </CircularProgressbarWithChildren>
    </CircleContainer>
  );
};

export default Circle;
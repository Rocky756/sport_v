import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRemainingTime } from '../helpers/getRemainingTime';
import Circle from './Circle';

const Widget = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    height: auto;
    flex-direction: column;
  };
  `;

const EventWidget = ({ firstEvent }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(firstEvent.dt_start))

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(firstEvent.dt_start));
    }, 1000);

    return () => clearInterval(interval);
  }, [firstEvent.dt_start]);

  return (
    <Widget>
      <Circle number={remainingTime.daysNum} text={remainingTime.daysWord} color='days'/>
      <Circle number={remainingTime.hoursNum} text={remainingTime.hoursWord} color='hours'/>
      <Circle number={remainingTime.minutes} text={remainingTime.minutesWord} color='minutes'/>
      <Circle number={remainingTime.seconds} text={remainingTime.secondsWord} color='seconds'/>
    </Widget>
  );
};

export default EventWidget;
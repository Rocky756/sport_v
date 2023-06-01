import styled from 'styled-components';
import { fontSizes } from '../styles';
import DateLabel from '../components/EventDateLabel';
import { formatEventDate } from '../helpers/formatEventDate';
import EventTitle from '../components/EventTitle';

const Wrapper = styled.div`
height: 28vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextEvent = ({ event }) => {
  const { dt_start, dt_end } = event;
  const formatFirstDate = formatEventDate(dt_start, dt_end);


  
  return (
    <Wrapper>
      <ChildContainer>
        <DateLabel>
          {formatFirstDate}
        </DateLabel>
      </ChildContainer>
      <ChildContainer>
        <EventTitle fontSize={fontSizes.size25} trimRaws={1}>
          {event.title}
        </EventTitle>
      </ChildContainer>
    </Wrapper>
  );
};

export default NextEvent;
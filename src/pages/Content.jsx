import styled from 'styled-components';
import { backgrounds, fontSizes } from '../styles';
import DateLabel from '../components/EventDateLabel';
import EventTitle from '../components/EventTitle';
import EventWidget from '../components/EventWidget';
import { formatEventDate } from '../helpers/formatEventDate';
import CurrentEvent from '../components/CurrentEvent';

const Container = styled.div`
padding: 5vh 0;
width: 100%;
height: 44vh;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${backgrounds.content};
box-sizing: border-box;
@media (max-width: 767px) {
  height: auto;
  flex-direction: column;
};
`;

const ChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 767px) {
    margin-top: 15px;
  };
`;

const Content = ({ event }) => {

  const { dt_start, dt_end } = event;
  const formatFirstDate = formatEventDate(dt_start, dt_end);
  const renderWidgetOrCurrent = (event) => {
    if (event.isCurrent) return (
      <CurrentEvent />
    )
    return (
      <EventWidget firstEvent={event}/>
    )
  }
  
  return (
    <Container>
      <ChildContainer>
        <DateLabel>
          {formatFirstDate}
        </DateLabel>
      </ChildContainer>
      <ChildContainer>
        <EventTitle fontSize={fontSizes.size40} trimRaws={2}>
          {event.title}
        </EventTitle>
      </ChildContainer>
      <BottomChildContainer>
        {renderWidgetOrCurrent(event)}
      </BottomChildContainer>
    </Container>
  );
};

export default Content;
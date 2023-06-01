import styled from 'styled-components';
import { fontSizes, colors } from '../styles';

const EventDateLabel = styled.div`
  color: ${colors.secondary};
  font-size: ${fontSizes.size18};
  letter-spacing: 2.03px;
  line-height: 1.2;
`;

const DateLabel = ({ children }) => {
  return (
    <EventDateLabel>
      {children}
    </EventDateLabel>
  );
};

export default DateLabel;
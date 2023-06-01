import styled from 'styled-components';
import { fontSizes, colors } from '../styles';

const EventMainTitle = styled.div`
  width: 65vw;
  heigth: 160px;
  max-heigth: 160px;
  color: ${colors.primary};
  font-size: ${props => props.fontSize};
  line-height: 1.2;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.trimRaws};
  -webkit-box-orient: vertical;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 75vw;
    font-size: ${fontSizes.size32}; 
    line-height: 1.2;
  };
  @media (max-width: 767px) {
    width: 90vw;
    font-size: ${fontSizes.size20};
    line-height: 1.2;
  };
`;

const EventTitle = ({ children, fontSize, trimRaws }) => {
  return (
    <EventMainTitle fontSize={fontSize} trimRaws={trimRaws}>
      { children }
    </EventMainTitle>
  );
};

export default EventTitle;
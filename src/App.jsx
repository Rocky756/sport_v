import Time from './pages/Time';
import Content from './pages/Content';
import useFilteredEvents from './hooks/useFilteredEvents';
import LoadingSpinner from './components/LoadingSpinner';
import NextEvent from './pages/NextEvent';

const App = () => {
  const { events, error, loading, isFirstRequest } = useFilteredEvents();
  const isEmpty = events.length === 0;
  const isSingle = events.length === 1;

  if (loading && isFirstRequest) {
    return (
      <LoadingSpinner loading={loading} isEmpty={isEmpty}/>
    )
  }

  const [firstEvent, secondEvent] = events;

  return (
    <>
      <Time isEmpty={isEmpty}/>
      {!isEmpty && (
        <>
          <Content event={firstEvent}/>
          {!isSingle && secondEvent && (
            <NextEvent event={secondEvent}/>
          )}
        </>
      )}
    </>
  );
};

export default App;

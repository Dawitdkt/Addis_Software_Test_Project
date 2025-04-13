import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSongsStart, fetchStatsStart } from "./store/songSlice";
import { Container, Heading } from "./components/styled";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import Statistics from "./components/Statistics";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsStart());
    dispatch(fetchStatsStart());
  }, [dispatch]);

  return (
    <Container>
      <Heading>Song Manager</Heading>

      <div style={{ marginBottom: "40px" }}>
        <Heading as="h2" fontSize="2xl">
          Add New Song
        </Heading>
        <SongForm />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <Heading as="h2" fontSize="2xl">
          Songs
        </Heading>
        <SongList />
      </div>

      <Statistics />
    </Container>
  );
}

export default App;

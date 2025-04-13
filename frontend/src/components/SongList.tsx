import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { deleteSongStart } from "../store/songSlice";
import { Song } from "../types/song";
import { Grid, Card, Button, Text, Flex } from "./styled";
import SongForm from "./SongForm";

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading } = useSelector((state: RootState) => state.songs);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSongStart(id));
    }
  };

  const handleEdit = (song: Song) => {
    setEditingSong(song);
  };

  if (loading) {
    return <Text>Loading songs...</Text>;
  }

  return (
    <>
      {editingSong && (
        <div style={{ marginBottom: "20px" }}>
          <SongForm song={editingSong} onClose={() => setEditingSong(null)} />
        </div>
      )}
      <Grid>
        {songs.map((song) => (
          <Card key={song._id}>
            <Text fontSize="lg" fontWeight="bold">
              {song.title}
            </Text>
            <Text>Artist: {song.artist}</Text>
            <Text>Album: {song.album}</Text>
            <Text>Genre: {song.genre}</Text>
            <Flex justifyContent="flex-end" mt={3}>
              <Button onClick={() => handleEdit(song)} marginRight={2}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(song._id)} bg="red">
                Delete
              </Button>
            </Flex>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default SongList;

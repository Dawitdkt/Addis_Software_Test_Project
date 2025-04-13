import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SongInput, Song } from "../types/song";
import { addSongStart, updateSongStart } from "../store/songSlice";
import { Card, Input, Button, Flex } from "./styled";

interface Props {
  song?: Song;
  onClose?: () => void;
}

const SongForm: React.FC<Props> = ({ song, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<SongInput>({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  useEffect(() => {
    if (song) {
      setFormData({
        title: song.title,
        artist: song.artist,
        album: song.album,
        genre: song.genre,
      });
    }
  }, [song]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (song) {
      dispatch(updateSongStart({ id: song._id, data: formData }));
    } else {
      dispatch(addSongStart(formData));
    }
    setFormData({ title: "", artist: "", album: "", genre: "" });
    if (onClose) onClose();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Song Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="album"
          placeholder="Album"
          value={formData.album}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
        <Flex justifyContent="flex-end" mt={3}>
          {onClose && (
            <Button type="button" onClick={onClose} marginRight={2} bg="gray">
              Cancel
            </Button>
          )}
          <Button type="submit">{song ? "Update Song" : "Add Song"}</Button>
        </Flex>
      </form>
    </Card>
  );
};

export default SongForm;

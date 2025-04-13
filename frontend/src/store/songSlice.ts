import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, Statistics, SongInput } from '../types/song';

interface SongState {
  songs: Song[];
  statistics: Statistics | null;
  loading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  statistics: null,
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStatsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStatsSuccess(state, action: PayloadAction<Statistics>) {
      state.statistics = action.payload;
      state.loading = false;
    },
    fetchStatsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addSongStart(state, _action: PayloadAction<SongInput>) {
      state.loading = true;
      state.error = null;
    },
    addSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    addSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateSongStart(state, _action: PayloadAction<{ id: string; data: SongInput }>) {
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(song => song._id === action.payload._id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongStart(state, _action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter(song => song._id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  fetchStatsStart,
  fetchStatsSuccess,
  fetchStatsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export default songSlice.reducer; 
import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
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
} from './songSlice';
import { Song, SongInput, Statistics } from '../types/song';
import { PayloadAction } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api';

function* fetchSongs() {
  try {
    const response: AxiosResponse<Song[]> = yield call(axios.get, `${API_URL}/songs`);
    yield put(fetchSongsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* fetchStats() {
  try {
    const response: AxiosResponse<Statistics> = yield call(axios.get, `${API_URL}/stats`);
    yield put(fetchStatsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchStatsFailure(error.message));
  }
}

function* addSong(action: PayloadAction<SongInput>) {
  try {
    const response: AxiosResponse<Song> = yield call(axios.post, `${API_URL}/songs`, action.payload);
    yield put(addSongSuccess(response.data));
    yield put(fetchStatsStart());
  } catch (error: any) {
    yield put(addSongFailure(error.message));
  }
}

function* updateSong(action: PayloadAction<{ id: string; data: SongInput }>) {
  try {
    const response: AxiosResponse<Song> = yield call(
      axios.put,
      `${API_URL}/songs/${action.payload.id}`,
      action.payload.data
    );
    yield put(updateSongSuccess(response.data));
    yield put(fetchStatsStart());
  } catch (error: any) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSong(action: PayloadAction<string>) {
  try {
    yield call(axios.delete, `${API_URL}/songs/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
    yield put(fetchStatsStart());
  } catch (error: any) {
    yield put(deleteSongFailure(error.message));
  }
}

function* watchSongs() {
  yield takeLatest(fetchSongsStart.type, fetchSongs);
  yield takeLatest(addSongStart.type, addSong);
  yield takeLatest(updateSongStart.type, updateSong);
  yield takeLatest(deleteSongStart.type, deleteSong);
}

function* watchStats() {
  yield takeLatest(fetchStatsStart.type, fetchStats);
}

export default function* rootSaga() {
  yield all([
    fork(watchSongs),
    fork(watchStats)
  ]);
} 
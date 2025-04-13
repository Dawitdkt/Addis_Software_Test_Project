export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
}

export interface SongInput {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface Statistics {
  overview: {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
  };
  songsPerGenre: Array<{
    _id: string;
    count: number;
  }>;
  artistStats: Array<{
    artist: string;
    songCount: number;
    albumCount: number;
  }>;
  songsPerAlbum: Array<{
    _id: string;
    count: number;
  }>;
} 
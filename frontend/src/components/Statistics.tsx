import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Card, Grid, Text, Heading } from "./styled";

const Statistics: React.FC = () => {
  const { statistics, loading } = useSelector(
    (state: RootState) => state.songs
  );

  if (loading || !statistics) {
    return <Text>Loading statistics...</Text>;
  }

  return (
    <div>
      <Heading as="h2" mb={4}>
        Statistics
      </Heading>
      <Grid>
        <Card>
          <Heading as="h3" fontSize="xl">
            Overview
          </Heading>
          <Text>Total Songs: {statistics.overview.totalSongs}</Text>
          <Text>Total Artists: {statistics.overview.totalArtists}</Text>
          <Text>Total Albums: {statistics.overview.totalAlbums}</Text>
          <Text>Total Genres: {statistics.overview.totalGenres}</Text>
        </Card>

        <Card>
          <Heading as="h3" fontSize="xl">
            Songs per Genre
          </Heading>
          {statistics.songsPerGenre.map((stat) => (
            <Text key={stat._id}>
              {stat._id}: {stat.count} songs
            </Text>
          ))}
        </Card>

        <Card>
          <Heading as="h3" fontSize="xl">
            Artist Statistics
          </Heading>
          {statistics.artistStats.map((stat) => (
            <Text key={stat.artist}>
              {stat.artist}: {stat.songCount} songs, {stat.albumCount} albums
            </Text>
          ))}
        </Card>

        <Card>
          <Heading as="h3" fontSize="xl">
            Songs per Album
          </Heading>
          {statistics.songsPerAlbum.map((stat) => (
            <Text key={stat._id}>
              {stat._id}: {stat.count} songs
            </Text>
          ))}
        </Card>
      </Grid>
    </div>
  );
};

export default Statistics;

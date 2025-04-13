const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Get all statistics
router.get('/', async (req, res) => {
  try {
    // Total counts
    const totalSongs = await Song.countDocuments();
    const uniqueArtists = await Song.distinct('artist');
    const uniqueAlbums = await Song.distinct('album');
    const uniqueGenres = await Song.distinct('genre');

    // Songs per genre
    const songsPerGenre = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } }
    ]);

    // Songs and albums per artist
    const artistStats = await Song.aggregate([
      {
        $group: {
          _id: '$artist',
          songCount: { $sum: 1 },
          albums: { $addToSet: '$album' }
        }
      },
      {
        $project: {
          artist: '$_id',
          songCount: 1,
          albumCount: { $size: '$albums' }
        }
      }
    ]);

    // Songs per album
    const songsPerAlbum = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 } } }
    ]);

    res.json({
      overview: {
        totalSongs,
        totalArtists: uniqueArtists.length,
        totalAlbums: uniqueAlbums.length,
        totalGenres: uniqueGenres.length
      },
      songsPerGenre,
      artistStats,
      songsPerAlbum
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 
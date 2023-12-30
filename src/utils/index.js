const filterTitlSong = (song, title) => (song.title.toLowerCase().includes(title));
const filterPerfmSong = (song, performer) => (song.performer.toLowerCase().includes(performer));
module.exports = {
  filterTitlSong,
  filterPerfmSong,
};

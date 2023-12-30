const routes = (handler) => [
  {
    method: 'POST',
    path: '/songs',
    handler: handler.postSong,
  },
  {
    method: 'GET',
    path: '/songs',
    handler: handler.getSong,
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: handler.getSongById,
  },
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: handler.putSongById,
  },
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: handler.deleteSongById,
  },
];

module.exports = routes;

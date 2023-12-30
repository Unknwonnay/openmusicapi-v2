const routes = (handler) => [
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbum,
  },
  {
    method: 'GET',
    path: '/albums',
    handler: handler.getAlbum,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumById,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.putAlbumById,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumById,
  },
];

module.exports = routes;

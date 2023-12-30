/* eslint-disable import/extensions */
const SongsHandler = require('./handler.js');
const routes = require('./routes.js');

module.exports = {
  name: 'song',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const songsHandler = new SongsHandler(service, validator);
    server.route(routes(songsHandler));
  },
};

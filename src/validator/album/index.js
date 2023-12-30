/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const InvariantError = require('../../exceptions/InvariantError.js');
const { AlbumPayloadSchema } = require('./schema.js');

const AlbumValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = AlbumPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumValidator;

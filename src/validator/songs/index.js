/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const InvariantError = require('../../exceptions/InvariantError.js');
const { SongPayloadSchema } = require('./schema.js');

const SongValidator = {
  validateSongPayload: (payload) => {
    const validationResult = SongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = SongValidator;

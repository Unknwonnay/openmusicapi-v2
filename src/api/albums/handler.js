/* eslint-disable no-underscore-dangle */

class AlbumsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postAlbum = this.postAlbum.bind(this);
    this.getAlbum = this.getAlbum.bind(this);
    this.getAlbumById = this.getAlbumById.bind(this);
    this.putAlbumById = this.putAlbumById.bind(this);
    this.deleteAlbumById = this.deleteAlbumById.bind(this);
  }

  async postAlbum(request, h) {
    this._validator.validateAlbumPayload(request.payload);
    const { name, year } = request.payload;

    const albumId = await this._service.addAlbum({ name, year });

    const response = h.response({
      status: 'success',
      message: 'Album berhasil ditambahkan',
      data: {
        albumId,
      },
    });
    response.code(201);
    return response;
  }

  async getAlbum() {
    const albums = await this._service.getAlbum();
    albums.year = parseInt(albums.year, 10);
    return {
      status: 'success',
      data: {
        albums,
      },
    };
  }

  async getAlbumById(request) {
    const { id } = request.params;
    const album = await this._service.getAlbumById(id);

    album.year = parseInt(album.year, 10);
    return {
      status: 'success',
      data: {
        album,
      },
    };
  }

  async putAlbumById(request) {
    this._validator.validateAlbumPayload(request.payload);
    const { id } = request.params;

    await this._service.editAlbumById(id, request.payload);

    return {
      status: 'success',
      message: 'Album berhasil diperbarui',
    };
  }

  async deleteAlbumById(request) {
    const { id } = request.params;
    await this._service.deleteAlbumById(id);
    return {
      status: 'success',
      message: 'Album berhasil dihapus',
    };
  }
}

module.exports = AlbumsHandler;

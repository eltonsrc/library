// DocumentGenre.js
module.exports = {
  attributes: {
    genre: {
      type: 'string',
      size: 50,
      required: true,
      unique: true
    }
  }
}
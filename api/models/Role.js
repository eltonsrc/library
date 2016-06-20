// Role.js
module.exports = {
  attributes: {
    name: {
      type: 'string',
      size: 255,
      unique: true,
      required: true
    },

    users: {
      collection: 'user',
      via: 'roles',
      dominant: true
    }
  }
}
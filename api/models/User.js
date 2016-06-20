// User.js
module.exports = {
  attributes: {
    name: {
      type: 'string',
      size: 255,
      required: true
    },
    login: {
      type: 'string',
      size: 255,
      unique: true,
      required: true
    },
    email: {
      type: 'string',
      size: 255,
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      size: 64,
      required: true
    },

    roles: {
      collection: 'role',
      via: 'users'
    }
  }
}
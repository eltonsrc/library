// User.js

var bcrypt = require('bcrypt');

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
  },

  beforeCreate: function (user, cb) {
    sails.log.debug('creating password hash');

    bcrypt.hash(user.password, 10, function(err, hash) {
      if(err) {
        sails.log.error(err);
        return cb(err);
      }

      sails.log.debug('password hash created for user: ' + user);
      user.password = hash;
      //calling cb() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
      cb();
    });
  }
}

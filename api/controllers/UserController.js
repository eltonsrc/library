/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var bcrypt = require('bcrypt');

 module.exports = {
  /**
   * `UserController.login()`
   */
   login: function (req, res) {
    var login = '';
    var password = '';
    var loginInvalid = false;

    sails.log.debug('login: ' + req.body.login);
    sails.log.debug('password: ' + req.body.password);

    if (req.body.login) {
      login = req.body.login.trim();
    }

    if (req.body.password) {
      password = req.body.password.trim();
    }

    if (login == '' || password == '') {
      sails.log.warn('login and password can not be null');
      return res.view('index', {loginInvalid: true});
    }

    User.findOne({login: login}).exec(function(err, user) {
      if (err) {
        sails.log.error(err);
        return res.view('index', {loginInvalid: true});
      }

      if (!user) {
        sails.log.error('user not found');
        return res.view('index', {loginInvalid: true});
      }

      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          sails.log.error(err);
        }

        if (result) {
          return res.view('home/index');
        }

        sails.log.warn('login invalid');
        return res.view('index', {loginInvalid: true});
      });
    });
  },

  /**
   * `UserController.logout()`
   */
   logout: function (req, res) {
    res.logOut();
    return res.view('index', {loginInvalid: false});
  }
};


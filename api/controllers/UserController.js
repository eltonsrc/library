/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {



  /**
   * `UserController.login()`
   */
   login: function (req, res) {
    var loginInvalid = false;

    for (key in req.params) {
      sails.log.debug(key);
      sails.log.debug(req.params[key]);
    }

    if (!req.params.login || !req.params.password) {
      sails.log.warn('login and password can not be null');
      return res.view('index', {loginInvalid: true});
    }

    

    return res.view('home/index', {loginInvalid: loginInvalid});
  },


  /**
   * `UserController.logout()`
   */
   logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  }
};


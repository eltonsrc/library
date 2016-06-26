/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

 module.exports.bootstrap = function(cb) {
  User.findOne({login: 'admin'}).exec(function(err, userAdmin) {
    if (err) {
      sails.log.error('find admin error');
      sails.log.error(err);
    }

    if (userAdmin) {
      sails.log.debug(userAdmin);
      cb();
      return;
    }

    sails.log.debug('need to create admin');
    var admin = {
      name: 'administrator',
      login: 'admin',
      email: 'admin@admin.com',
      password: 'admin'
    };

    User.create(admin).exec(function(err, savedAdmin) {
      if (err) {
        sails.log.error('creating admin error');
        sails.log.error(err);
      }

      sails.log.debug(savedAdmin);

      savedAdmin.roles.add({
        name: 'admin'
      });

      savedAdmin.save(function(err) {
        if (err) {
          sails.log.error('associate admin error');
          sails.log.error(err);
        }

        // It's very important to trigger this callback method when you are finished
        // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
        cb();
      });

    });
  });
};

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('new');
    this.route('edit', { path: '/edit/:id' });
  });
  this.route('users-listview');
});

export default Router;

// users/edit/:id

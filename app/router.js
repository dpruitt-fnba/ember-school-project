import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('chefs', function() {
    this.route('chef', { path: ':id' });
    this.route('chef.edit', { path: ':id/edit' });
  });
  this.route('about');
  this.route('training');
  this.route('restaurants', function() {
    this.route('restaurant', { path: ':id' });
    this.route('restaurant.edit', { path: ':id/edit' });
  });
});

export default Router;

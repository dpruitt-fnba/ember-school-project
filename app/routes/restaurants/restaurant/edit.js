import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      restaurant: this.store.findRecord('restaurant', params.id),
      chefs: this.store.findAll('chef')
    });
  }
});

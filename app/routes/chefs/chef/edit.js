import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      chef: this.store.findRecord('chef', params.id),
      restaurants: this.store.findAll('restaurant')
    });
  }
});

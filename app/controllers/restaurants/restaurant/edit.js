import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  restaurant: alias('model.restaurant'),
  chefs: alias('model.chefs'),
  actions: {
    save() {
      this.get('restaurant').save();
      this.transitionToRoute('restaurants.restaurant', this.get('restaurant.id'));
    }
  }
});

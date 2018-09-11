import Controller from '@ember/controller';
import { alias, setDiff } from '@ember/object/computed';

export default Controller.extend({
  restaurant: alias('model.restaurant'),
  chefs: alias('model.chefs'),
  otherChefs: setDiff('chefs', 'restaurant.chefs'),
  actions: {
    save() {
      this.get('restaurant').save();
      this.transitionToRoute('restaurants.restaurant', this.get('restaurant.id'));
    },
    removeChef(chef) {
      let restaurant = this.get('restaurant');
      restaurant.get('chefs').removeObject(chef);
      chef.save().then(() => {
        restaurant.save();
      });
    },
    addChef(chef) {
      let restaurant = this.get('restaurant');
      restaurant.get('chefs').addObject(chef);
      chef.save().then(() => {
        restaurant.save();
      });
    }
  }
});

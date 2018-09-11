import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  chef: alias('model.chef'),
  restaurants: alias('model.restaurants'),
  actions: {
    save() {
      this.get('chef').save();
      this.transitionToRoute('chefs.chef', this.get('chef.id'));
    },
    fireChef(chef) {
      chef.destroyRecord();
      this.transitionToRoute('chefs');
    },
    selectRestaurant(selection) {
      let chef = this.get('chef')
      chef.get('restaurant').then((restaurant) => {
        chef.set('restaurant', selection);
        selection.save();
        restaurant.save();
      });
    }
  }
});

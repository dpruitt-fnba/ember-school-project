import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  chef: alias('model'),
  actions: {
    save() {
      this.get('chef').save();
      this.transitionToRoute('chefs.chef', this.get('chef.id'));
    },
    fireChef(chef) {
      chef.destroyRecord();
      this.transitionToRoute('chefs');
    }
  }
});

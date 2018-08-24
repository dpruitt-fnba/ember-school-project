import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  newChef: null,
  actions: {
    enter(chef) {
      set(chef, 'isCookingToday', true);
      chef.save();
    },
    exit(chef) {
      set(chef, 'isCookingToday', false);
      chef.save();
    },
    addNewChef() {
      this.store.createRecord('chef', {
        name: this.get('newChef'),
        isCookingToday: false
      }).save();
      this.set('newChef', null);
    },
    fireChef(chef) {
      chef.destroyRecord();
    }
  }
});

import Controller from '@ember/controller';
import { set } from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { alias } from '@ember/object/computed';

export default Controller.extend({newChef: null,
  chefs: alias('model'),
  activeChefs: filterBy('model', 'isCookingToday', true),
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
    }
  }

});

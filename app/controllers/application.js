import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    enter(chef) {
      set(chef, 'isCookingToday', true);
      chef.save();
    },
    exit(chef) {
      set(chef, 'isCookingToday', false);
      chef.save();
    }
  }
});

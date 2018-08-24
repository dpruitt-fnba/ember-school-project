import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  actions: {
    enter(chef) {
      set(chef, 'isCookingToday', true);
    },
    exit(chef) {
      set(chef, 'isCookingToday', false);
    }
  }
});

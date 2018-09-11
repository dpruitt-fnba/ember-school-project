import Component from '@ember/component';

export default Component.extend({
  chef: null,
  actions: {
    enter(chef) {
      chef.set('isCookingToday', true);
      chef.save();
    },
    exit(chef) {
      chef.set('isCookingToday', false);
      chef.save();
    }
  }
});

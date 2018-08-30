import Component from '@ember/component';

export default Component.extend({
  chef: null,
  isOpen: false,
  actions: {
    toggleVisibility() {
      this.toggleProperty('isOpen');
    },
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

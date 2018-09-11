import Component from '@ember/component';

export default Component.extend({
  isOpen: false,
  actions: {
    toggleVisibility() {
      this.toggleProperty('isOpen');
    }
  }
});

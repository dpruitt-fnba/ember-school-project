import Component from '@ember/component';

export default Component.extend({
  src: null
}).reopenClass({
  positionalParams: ['src']
});

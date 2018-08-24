import Controller from '@ember/controller';
import { set, computed } from '@ember/object';
import { filterBy, alias } from '@ember/object/computed';

export default Controller.extend({
  newChef: null,
  chefs: alias('model'),
  activeChefs: filterBy('model', 'isCookingToday', true),
  totalStudentCount: computed('model.@each.studentCount', function() {
    let total = 0;
    this.get('model').forEach(chef => {
      total += parseInt(chef.get('studentCount'));
    });
    return total;
  }),
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
    },
    addStudent(chef) {
      chef.incrementProperty('studentCount');
      chef.save();
    },
    removeStudent(chef) {
      if(chef.get('studentCount') > 0) {
        chef.decrementProperty('studentCount');
        chef.save();
      }
    }
  }
});

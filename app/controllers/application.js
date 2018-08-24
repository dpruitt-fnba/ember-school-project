import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  chefs: [
    {
      name: 'Gordon Ramsay',
      isCookingToday: true
    },
    {
      name: 'Anthony Bourdain',
      isCookingToday: false
    },
    {
      name: 'Rachael Ray',
      isCookingToday: true
    },
    {
      name: 'Jamie Oliver',
      isCookingToday: false
    },
    {
      name: 'Guy Fieri',
      isCookingToday: true
    }
  ],
  actions: {
    enter(chef) {
      set(chef, 'isCookingToday', true);
    },
    exit(chef) {
      set(chef, 'isCookingToday', false);
    }
  }
});

import Controller from '@ember/controller';

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
  ]
});

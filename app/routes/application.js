import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
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
    ];
  }
});

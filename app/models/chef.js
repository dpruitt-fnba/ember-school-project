import DS from 'ember-data';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCookingToday: DS.attr('boolean'),
  description: DS.attr('string'),
  imageUrl: DS.attr('string'),
  restaurant: DS.belongsTo()
});

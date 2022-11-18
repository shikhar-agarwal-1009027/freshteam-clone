import DS from 'ember-data';

export default DS.Model.extend({
  img_url: DS.attr('string'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  team: DS.attr('string'),
  joiningDate: DS.attr('date')
});
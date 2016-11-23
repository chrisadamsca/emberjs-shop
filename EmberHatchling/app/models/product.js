import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  size: DS.attr('string'),
  imgUrl: DS.attr('string'),
  price: DS.attr('number'),
  rating: DS.attr('number')
});

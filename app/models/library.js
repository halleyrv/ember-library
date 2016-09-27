import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
 import {hasMany } from 'ember-data/relationships';
import Faker from 'faker';

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),
  books: hasMany('book', {inverse: 'library', async: true}),
  
  isValid: Ember.computed.notEmpty("name"),
  randomize(){
      this.set('name', Faker.company.companyName() + 'Library');
      this.set('address', this._full_address());
      this.set('phone', Faker.phone.phoneNumber());
      
      return this;
  },
  _full_address(){
      return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  }
  
});

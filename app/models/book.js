import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import Faker from 'faker';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
    title: attr('string'),
    releaseYear: attr('date'),
    library: belongsTo('library',{inverse: 'books', async: true}),
    author: belongsTo('author', {inverse: 'books', async: true }),
    
    randomize(author, library){
      this.set('title', this._bookTitle());
      this.set('author', author);
      this.set('releaseYear', this._randomYear());
      this.set('library', library);
      
      return this;
    },
    _bookTitle(){
      return `${Faker.comerce.productName()} Cookbok`;
      
    },
    _randomYear(){
      return new Date(this._getRandomArbitrary(1900,2015).toPrecision(4));
    },
    _getRandomArbitrary(min,max){
      return Math.random() * (max - min) + min;
    }
});

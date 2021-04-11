import Abstractroute from '../abstractroute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsAddProductRoute extends Abstractroute {

  model() {
    return RSVP.hash({ product: {}, sections: this.store.findAll('section') });
  }

  @action save(data) {
    console.log(data.section.name);
    let section = this.store.createRecord('product', data);
    section.save().then(() => this.transitionTo('section'));
  }

}

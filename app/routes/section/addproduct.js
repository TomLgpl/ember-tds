import Abstractroute from '../abstractroute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsAddProductRoute extends Abstractroute {

  model() {
    return RSVP.hash({ product: {}, sections: this.store.findAll('section') });
  }

  @action save(data) {
    let product = this.store.createRecord('product', data.product);
    product.save().then(() => this.transitionTo('section.products',product.section.id));
  }

}

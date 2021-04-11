
import Abstractroute from '../../abstractroute';
import { action } from '@ember/object';

export default class SectionsProductsDeleteRoute extends Abstractroute {

  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action delete(model) {
    model.destroyRecord().then(() => {
      this.transitionTo('section');
    });
  }

  @action cancel() {
    this.transitionTo('section');
  }

}

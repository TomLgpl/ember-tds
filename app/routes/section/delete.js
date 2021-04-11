import Route from '@ember/routing/route';
import { action } from '@ember/object';
import Abstractroute from '../abstractroute';

export default class SectionDeleteRoute extends Abstractroute {

  model(params) {
    return this.store.findRecord('section', params.section_id);
  }

  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }

  @action delete(model) {
    this.deleteProducts(model.products).then(() => {
      model.destroyRecord().then(() => {
        this.transitionTo('section');
      });
    });
  }

}

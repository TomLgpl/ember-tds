import Abstractroute from '../abstractroute';
import { action } from '@ember/object';

export default class SectionEditRoute extends Abstractroute {

  myId;
  products;

  model(params) {
    return this.store.findRecord('section', params.section_id, { include: 'products' });
  }

  @action
  back() {
    this.transitionTo('section');
  }

  @action
  validate(model) {
    model.save().then(() => {
      let controller = this.controllerFor(this.routeName);
      controller.set('edit', false);
      this.transitionTo('section.edit', model.get('id'));
    });
  }

  @action
  cancel(model) {
    let controller = this.controllerFor(this.routeName);
    controller.set('edit', false);
    model.rollbackAttributes();
    this.transitionTo('section.edit', model.get('id'));
  }

}

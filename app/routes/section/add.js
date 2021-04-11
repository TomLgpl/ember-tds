import Abstractroute from '../abstractroute';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SectionsAddRoute extends Abstractroute {

  @service userAuth;

  model() {
    return this.store.createRecord('section', {});
  }

  @action add(section) {
    section.save();
  }

  @action save(model) {
    if (model.name) {
      let section = this.store.createRecord('section', model);
      section.save().then(() => this.transitionTo('sections'));
    }
  }

  @action logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }
}

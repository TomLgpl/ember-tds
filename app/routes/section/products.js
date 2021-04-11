import Abstractroute from '../abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductsRoute extends Abstractroute {

  @service userAuth;

  model(params) {
    debugger;
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({ section: this.store.findRecord('section', params.section_id, {include:'products'}), employee: user });
    }
  }

  @action logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }

}

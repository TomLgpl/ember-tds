import Abstractroute from './abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SectionsRoute extends Abstractroute {

  @service userAuth;

  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({ sections: this.store.findAll('section', { include: 'products' }), employee: user });
    }
  }

  @action logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }

}

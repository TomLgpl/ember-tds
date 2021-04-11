import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AbstractrouteRoute extends Route {

  @service userAuth;

  redirect() {
    if (!this.userAuth.isAuth) {
      this.transitionTo('index.js');
    }

  }
}

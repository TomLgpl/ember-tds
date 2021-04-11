import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {

  @service userAuth;

  model() {
    return {};
  }

  @action connect(employee) {
    this.store.query('employee', { filter: { email: employee.email } }).then((data) => {
        if (data.length) {
          let user = data.firstObject;
          if (user.password === employee.password) {
            this.userAuth.login(user);
            this.transitionTo('board');
          }
        }
      });
  }

}

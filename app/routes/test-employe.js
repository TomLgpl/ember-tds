import Route from '@ember/routing/route';

export default class TestEmployeRoute extends Route {

  model() {
    this.store.findAll('employee');
  }

}

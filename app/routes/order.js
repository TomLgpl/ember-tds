import Abstractroute from './abstractroute';

export default class OrderRoute extends Abstractroute {

  model() {
    return this.store.findAll('order');
  }

}

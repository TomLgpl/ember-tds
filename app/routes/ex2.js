import Route from '@ember/routing/route';
import { datas } from 'tds/data/datas';
import MesServices from 'tds/classes/services';
import { action, set } from '@ember/object';

export default class Ex2Route extends Route {

  model() {
    return new MesServices(datas);
  }

  @action
  toggleActive(service){
    set(service, 'active', !service.active);
  }

}

import { computed } from '@ember/object';

export default class Services{

  services = [];

  constructor(serveices) {
    this.services = serveices;
  }

  @computed('services.@each.active')
  get countActive(){
    /*let r=0;
    this.services.forEach(service=>{
      if(service.active)
        r++;
    });
    return r;*/
    return this.services.filterBy('active', true).length;
  }

  get sumActive(){
    let services = this.services.filterBy('active', true);
    let price = 0;
    services.forEach(service=>{
      price += service.price;
    });
    return price;
  }


}

export default class Services{

  services = [];

  constructor(serveices) {
    this.services = serveices;
  }

  get countActive(){
    /*let r=0;
    this.services.forEach(service=>{
      if(service.active)
        r++;
    });
    return r;*/
    return this.services.filterBy('active', true).length;
  }

}

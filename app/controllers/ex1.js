import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '';
  MAX = 100;

  get size() {
    if (this.MAX - this.content.length == this.MAX)
      this.info = '';
    return this.MAX - this.content.length;
  }

  get style() {
    switch (this.info) {
      case 'Note modifiée':
        if (this.size > this.MAX/2) {
          return 'alert alert-info';
        }
        else if (this.size > this.MAX/4) {
          return 'alert alert-warning';
        }
        else {
          return 'alert alert-danger';
        }
        break;
      case 'Note sauvegardée' :
        return 'alert alert-success';
        break;
      default :
        return '';
    }
  }

  @action
  clear() {
    if (this.size != this.MAX) {
      this.content = '';
      this.info = '';
    }
  }

  @action
  save() {
    if (this.size != this.MAX){
      console.log('save');
      this.info = 'Note sauvegardée';
    }
  }

  @action
  update() {
    this.info = 'Note modifiée'
  }

}

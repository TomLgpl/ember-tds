import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info;
  MAX = 100;

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    if (this.size > this.MAX/2) {
      return 'green';
    }
    if (this.size > this.MAX/4) {
      return 'orange';
    }
    else {
      return 'red';
    }
  }

  @action
  clear() {
    this.content = '';
  }

  @action
  save() {
    console.log('save');
  }
}

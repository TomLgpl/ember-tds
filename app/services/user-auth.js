import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class UserAuthService extends Service {

  @tracked user = null;
  storage;

  constructor() {
    super();
    this.storage = sessionStorage;
    if(this.storage.user) {
      let u = JSON.pars(this.storage.user);
      set(this, 'use', u);
    }
  }

  //retourne l'employé connecté
  getUser() {
    return this.user;
  }

  //retourne vrai si un employé est coneecté
  get isAuth() {
    return this.user !== null;
  }

  //déconnecte l'employé connecté
  logout() {
    this.user = null;
    this.storage.removeItem('user');
    this.storage.clear();
  }

  //à appeler pour connexion de l'employé, après validation positive du formulaire de connexion
  login(user) {
    this.user = user;
    this.storage.user = JSON.stringify({ id: user.id, email: user.email });
  }
}

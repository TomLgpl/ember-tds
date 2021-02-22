import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('testnew');
  this.route('testlist');
  this.route('contacts', function() {
    this.route('add');
  });
});

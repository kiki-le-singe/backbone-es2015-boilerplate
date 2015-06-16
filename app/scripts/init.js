// https://babeljs.io/docs/learn-es2015/
// https://github.com/addyosmani/todomvc-backbone-es6
// http://www.2ality.com/2014/09/es6-modules-final.html
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import

import $ from 'jquery';
import Backbone from 'backbone';
import Routers from './routers/routers';

$(() => {
  new Routers();
  Backbone.history.start();

  console.log($);
  console.log(Backbone);
  console.log(Routers);
});

import $ from 'jquery';
import {Router} from 'backbone';
import indexView from '../views/index';

export default class extends Router {

  constructor() {
    super({
      routes: {
        '': 'index'
      }
    });
    console.log('indexRouter');
  }

  index () {
    $('.container').html(new indexView().render().el);
    console.log('index');
  }

  bar (options) {
  }
}

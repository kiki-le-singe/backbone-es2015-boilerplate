import {View} from 'backbone';
import _ from 'lodash';
// import Handlebars from 'handlebars';
// http://iamstef.net/ember-app-kit/guides/using-modules.html

export default class extends View {

  constructor() {
    super({
      events: { // *Define the DOM events specific to an item.*
        'click #foo': 'foo'
      }
    });

    // this.template = Handlebars.default.compile('<button id="foo">{{text}}</button>');
    this.template = _.template(this.getTemplate());

    console.log('indexView');
  }

  render () {
    this.$el.html(this.template({text: 'Click me!'}));
    return this;
  }

  foo () {
    console.log('bar');
  }

  getTemplate () {
    return '<button id="foo"><%= text %></button>';
  }
}

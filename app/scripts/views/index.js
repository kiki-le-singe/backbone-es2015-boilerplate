import {View} from 'backbone';

export default class extends View {

  constructor() {
    super({
      events: { // *Define the DOM events specific to an item.*
        'click #foo': 'foo'
      }
    });

    console.log('indexView');
  }

  render () {
    this.$el.html('<button id="foo">Click me!</button>');
    return this;
  }

  foo () {
    console.log('bar');
  }
}

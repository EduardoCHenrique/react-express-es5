var React = require('react')
var ReactDOM = require('react-dom')

var ItemList = require('./components/ItemList.jsx');

var itemStore = require('./stores/ItemStore.jsx');
var initial = itemStore.getItems();

function render() {
  ReactDOM.render(<ItemList items={initial} />, app);
}

itemStore.onChange(function(items) {
  initial = items;
  render();
})

render();

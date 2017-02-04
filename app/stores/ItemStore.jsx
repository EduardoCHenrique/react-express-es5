var dispatcher = require('./../dispatcher.js');

function ItemStore() {
  var items = [
    {name: "Ice Cream"},
    {name: "Waffles"},
    {
      name: "Candy",
      purchased: true
    },
    {name: "Snarks"}
  ];

  var listeners = [];

  function getItems() {
    return items;
  }

  function addItem(item) {
    items.push(item);
    triggerListeners();
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function triggerListeners() {
    listeners.forEach(function(listener) {
      listener(items);
    });
  }

  function deleteItem(item) {
    var index;
    items.filter(function(_item, _index) {
      if (_item.name == item.name) {
        index = _index;
      }
    })
    items.splice(index, 1);
    triggerListeners();
  }

  dispatcher.register(function(event) {
    var split = event.type.split(':');
    if (split[0]==='item') {
      switch(split[1]) {
        case "add":
          addItem(event.payload)
          break;
        case "delete":
          deleteItem(event.payload)
          break;
      }
    }
  })

  return {
    getItems: getItems,
    onChange: onChange
  }
}

module.exports = new ItemStore();

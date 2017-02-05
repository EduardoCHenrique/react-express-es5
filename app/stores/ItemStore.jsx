var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function ItemStore() {
  var items = [];

  helper.get('/api/items')
  .then(function(data) {
    items = data;
    triggerListeners();
  })

  var listeners = [];

  function getItems() {
    return items;
  }

  function addItem(item) {
    items.push(item);
    triggerListeners();

    helper.post("api/items", item);
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

  function setItemBought(item, isBought) {
    var _item = items.filter(function(a) { return a.name == item.name})[0];
    _item.purchased = isBought;
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
        case "unbuy":
          setItemBought(event.payload, false)
          break;
        case "buy":
          setItemBought(event.payload, true)
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

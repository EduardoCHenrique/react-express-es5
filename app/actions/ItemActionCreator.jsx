var dispatcher = require('./../dispatcher.js');

module.exports = {
  add: function(item) {
    dispatcher.dispatch({
      payload: item,
      type: "item:add"
    })
  },
  delete: function(item) {
    dispatcher.dispatch({
      payload: item,
      type: "item:delete"
    })
  },
  unbuy: function(item) {
    console.log('action de descomprar');
    dispatcher.dispatch({
      payload: item,
      type: "item:unbuy"
    })
  },
  buy: function(item) {
    console.log('action de comprar');
    dispatcher.dispatch({
      payload: item,
      type: "item:buy"
    })
  }
}

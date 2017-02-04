var React = require('react');
var Item = require('./Item.jsx');
var ListAddItem = require('./ListAddItem.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Grocery Listify</h1>
        <div>
          {this.props.items.map(function(item, index) {
            return (
              <Item item={item} key={index}/>
            )
          })}
        </div>
        <ListAddItem />
      </div>
    )
  }
})

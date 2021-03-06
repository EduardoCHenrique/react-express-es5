var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');

module.exports = React.createClass({
  delete: function(e) {
    e.preventDefault();
    action.delete(this.props.item);
  },
  togglePurchased: function(e) {
    e.preventDefault();
    if (this.props.item.purchased) {
      console.log('descomprar');
      action.unbuy(this.props.item);
    } else {
      console.log('comprar');
      action.buy(this.props.item);
    }
  },
  render: function() {
    return (
      <div>
        <div>
          <h4 className={this.props.item.purchased ? 'strikethrough' : ''}>{this.props.item.name}</h4>
        </div>
        <form className="three columns" onSubmit={this.togglePurchased}>
          <button className={this.props.item.purchased ? "" : "button-primary"}>
          {this.props.item.purchased ? "Unbuy" : "Buy"}
          </button>
        </form>
        <form className="three columns" onSubmit={this.delete}>
          <button>&times;</button>
        </form>
      </div>
    )
  }
})

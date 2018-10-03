import React, { Component } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { removeFromBasket, clearBasket, toggleBasket } from "../actions";

class Basket extends Component {
  handleClickMinus(basket) {
    this.props.removeFromBasket(basket);
  }
  handleTrashCan() {
    this.props.clearBasket();
  }
  handleClickBasketItem(basket) {
    this.props.toggleBasket(basket);
  }

  render() {
    return (
      <div className="col-sm">
        <header>
          <h3>
            <FontAwesomeIcon icon="shopping-basket" size="xs" /> Basket
          </h3>

          <FontAwesomeIcon
            onClick={this.handleTrashCan.bind(this)}
            className="trash-can"
            icon="trash-alt"
            size="lg"
          />
        </header>
        <ul className="list-group">
          {this.props.baskets.length != 0 ? (
            this.props.baskets.map(basket => {
              return basket.amount > 0 ? (
                <li
                  className={`list-group-item basket ${basket.isDone ? `line-through` : ``}`}
                  onClick={this.handleClickBasketItem.bind(this, basket)}
                  key={basket.name}
                >
                  <span onClick={this.handleClickMinus.bind(this, basket)}>
                    <FontAwesomeIcon icon="minus-circle" size="lg" />
                  </span>
                  {basket.amount} {basket.name}
                </li>
              ) : null;
            })
          ) : (
            <li className="list-group-item">Basket is empty!</li>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    baskets: state.baskets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromBasket: basket => dispatch(removeFromBasket(basket)),
    clearBasket: () => dispatch(clearBasket()),
    toggleBasket: basket => dispatch(toggleBasket(basket))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);

import React, { Component } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { addToBasket } from "../actions";

class Groceries extends Component {
  handleClickPlus(grocery){
    this.props.addToBasket(grocery);
  }
  render() {
    return (
      <div className="col-sm">
        <header>
          <h3>
            <FontAwesomeIcon icon="leaf" size="xs" /> Groceries
          </h3>
        </header>
        <ul className="list-group">
          {this.props.groceries.map(grocery => {
            return (
              <li onClick={this.handleClickPlus.bind(this, grocery)} key={grocery.name} className="list-group-item grocery">
                <span>
                  <FontAwesomeIcon icon="plus-circle" size="lg" />
                </span>
                {grocery.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groceries: state.groceries
  };
}

function mapDispatchToProps(dispatch){
  return {
    addToBasket: (grocery) => dispatch(addToBasket(grocery))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groceries);

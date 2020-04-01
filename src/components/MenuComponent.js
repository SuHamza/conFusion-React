import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            selectedComm: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish, selectedComm: dish.comments });
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        }
        else {
            return(
                <div></div>
            );
        }
    }
    // Return the corresponding view for this component
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            {/* <div className="row"> */}
                {/* {this.renderDish(this.state.selectedDish)} */}
            {/* </div> */}
            <DishDetail dish={this.state.selectedDish} comments={this.state.selectedComm} />
          </div>
        );
    }
}

export default Menu;
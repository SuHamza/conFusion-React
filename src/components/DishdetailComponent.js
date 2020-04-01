import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if(dish != null) {
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
            return(<div></div>);
        }
    }

    renderDate(commDate) {
        var msec = Date.parse(commDate);
        var cDate = new Date(msec);
        var strDate = new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit"
                        }).format(cDate);
        return strDate.toString();
    }
    renderComments(comments) {
        if (comments != null) {
            
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {comments.map( (comment) => {
                        
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} ,&nbsp;
                                     {this.renderDate(comment.date)} 
                                </p>
                            </li>
                        );
                    })}
                    </ul>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        if (this.props != null )
        {    return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.comments)}
                    </div>
                </div>
            );
        } 
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;
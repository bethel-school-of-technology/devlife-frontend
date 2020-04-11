import React, { Component } from "react";
import { singleEvent, remove } from "./apiEvent";
import DefaultEvent from "../images/test2.jpg";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";

class SingleEvent extends Component {
    state = {
        event: "",
        redirectToHome: false,
        redirectToSignin: false
    };

    componentDidMount = () => {
        const eventId = this.props.match.params.eventId;
        singleEvent(eventId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ event: data });
            }
        });
    };

    deleteEvent = () => {
        const eventId = this.props.match.params.eventId;
        const token = isAuthenticated().token;
        remove(eventId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ redirectToHome: true });
            }
        });
    };

    deleteConfirm = () => {
        let answer = window.confirm("Are you sure you want to delete your event?");
        if (answer) {
            this.deleteEvent();
        }
    };

    renderEvent = event => {
        const posterId = event.postedBy ? `/user/${event.postedBy._id}` : "";
        const posterName = event.postedBy ? event.postedBy.name : " Unknown";

        return (
            <div className='card-body'>
                <img
                    src={`${process.env.REACT_APP_API_URL}/event/photo/${event._id}`}
                    alt={event.title}
                    onError={i => (i.target.src = `${DefaultEvent}`)}
                    className='img-thumbnail mb-3'
                    style={{
                        height: "auto",
                        width: "100%",
                        objectFit: "cover"
                    }}
                />
                <p className='card-text'>{event.body}</p>
                <br />
                <p className='font-italic mark'>
                    Posted by {" "}
                    <Link to={`${posterId}`}>{posterName}</Link>
                    {" "} on {new Date(event.created).toDateString()}
                </p>
                <div className='d-inline-block'>
                    <Link to={`/`} className='btn btn-raised btn-primary btn-sm mr-5'>
                        Back to events
            </Link>

                    {isAuthenticated().user &&
                        isAuthenticated().user._id === event.postedBy._id && (
                            <>
                                <Link
                                    to={`/event/edit/${event._id}`}
                                    className='btn btn-raised btn-warning btn-sm mr-5'
                                >
                                    Update event
                </Link>
                                <button
                                    onClick={this.deleteConfirm}
                                    className='btn btn-raised btn-danger'
                                >
                                    Delete event
                </button>
                            </>
                        )}
                </div>
            </div>
        );
    };

    render() {
        const { event, redirectToHome, redirectToSignin, comments } = this.state;

        if (redirectToHome) {
            return <Redirect to={`/`} />;
        } else if (redirectToSignin) {
            return <Redirect to={`/signin`} />;
        }

        return (
            <div className='container'>
                <h2 className='display-2 mt-5 mb-5'>{event.title}</h2>

                {!event ? (
                    <div className='jumbotron text-center'>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                        this.renderEvent(event)
                    )}
            </div>
        );
    }
}

export default SingleEvent;

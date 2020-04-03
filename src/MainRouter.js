import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from "./user/EditProfile";
import FindPeople from "./user/FindPeople";
import PrivateRoute from "./auth/PrivateRoute";
import NewPost from "./post/NewPost";
import SinglePost from "./post/SinglePost";
import EditPost from "./post/EditPost";
import Events from "./event/Events";
import NewEvent from "./event/NewEvent";
import EditEvent from "./event/EditEvent";
import SingleEvent from "./event/SingleEvent";

// everything works before I added events to menu
// 8:31

const MainRouter = () => (
  <div>
    <Menu />
    <Switch>
      <Route exact path='/' component={Home} />
      <PrivateRoute exact path='/post/create' component={NewPost} />
      <Route exact path='/post/:postId' component={SinglePost} />
      <PrivateRoute exact path='/post/edit/:postId' component={EditPost} />
      <PrivateRoute exact path='/event/create' component={NewEvent} />
      <Route exact path='/event/:eventId' component={SingleEvent} />
      <PrivateRoute exact path='/event/edit/:eventId' component={EditEvent} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/events' component={Events} />
      <PrivateRoute exact path='/user/edit/:userId' component={EditProfile} />
      <PrivateRoute exact path='/findpeople' component={FindPeople} />
      <PrivateRoute exact path='/user/:userId' component={Profile} />
    </Switch>
  </div>
);

export default MainRouter;

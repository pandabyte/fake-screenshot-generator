import React, {Component} from 'react';
import NavMenu, {LINK} from "./NavMenu";
import Switch from "react-bootstrap/cjs/Switch";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route} from "react-router-dom";
import TwitterTweetPage from "./pages/twitter/TwitterTweetPage";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavMenu/>
                <Switch>
                    <Route exact path={LINK.home}>
                        <HomePage/>
                    </Route>
                    <Route exact path={LINK.twitterTweet}>
                        <TwitterTweetPage/>
                    </Route>
                </Switch>
            </BrowserRouter>

        );
    }
}

import React, { Component } from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Home from './pages/home';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/" render={(props)=>
                        <Admin {...props}>
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route path="/ui/buttons" component={Buttons} />
                                <Route path="/ui/modals" component={Modals} />
                                <Route path="/ui/loadings" component={Loadings} />
                                <Route path="/ui/notification" component={Notice} />
                                <Route path="/ui/messages" component={Messages} />
                                <Route path="/ui/tabs" component={Tabs} />
                                <Route path="/ui/gallery" component={Gallery} />
                                <Route path="/ui/carousel" component={Carousel} />
                            </Switch>
                            
                        </Admin>
                    }/>
                </App>
            </HashRouter>
        )
    }
}

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from './404';
import Generel_Level1 from './Generel_Level1';
import Generel_Level2 from './Generel_Level2';
import Generel_Level3 from './Generel_Level3';
import Math_Level1 from './Math_Level1';
import Math_Level2 from './Math_Level2';
import Math_Level3 from './Math_Level3';
import English_Level1 from './English_Level1';
import English_Level2 from './English_Level2';
import English_Level3 from './English_Level3';
import Home from './Home';
import SignIn from './signin';
import SignUp from './signup';
import Choose from './choose';




class App extends Component {
    render() {
        return <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/g1" component={Generel_Level1} />
                <Route exact path="/g2" component={Generel_Level2} />
                <Route exact path="/g3" component={Generel_Level3} />
                <Route exact path="/m1" component={Math_Level1} />
                <Route exact path="/m2" component={Math_Level2} />
                <Route exact path="/m3" component={Math_Level3} />
                <Route exact path="/e1" component={English_Level1} />
                <Route exact path="/e2" component={English_Level2} />
                <Route exact path="/e3" component={English_Level3} />
                <Route exact path="/2" component={SignIn} />
                <Route exact path="/3" component={SignUp} />
                <Route exact path="/4" component={Choose} />
                
                
                <Route exact path="/404" component={NotFoundPage} />
                <Redirect to="/404" />

            </Switch>



        </Router>
    }
}
export default App;
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Products from "./pages"
import Product from "./pages/product"
import Header from "./component/Header";
import Container from "@material-ui/core/Container";

const App = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/"><Products/></Route>
                        <Route path="/product"><Product/></Route>
                    </Switch>
                </Router>
            </Container>
        </div>

    );
}

export default App;

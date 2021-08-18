import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productID" exact component={ProductDetails} />
          <Route>404 not found !</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

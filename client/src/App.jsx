import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux";
import Success from "./pages/Success";

const App = () => {

  const user = useSelector((state) => state.user.currentUser);

  return (

    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/products/:category">
          <ProductList />
        </Route>

        <Route exact path="/product/:id">
          <Product />
        </Route>

        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>

        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/success">
          <Success />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { NotificationContainer } from "./components/notification/Notification";

function App() {
  let admin = false;
  try {
    const persistRoot = localStorage.getItem("persist:root");
    if (persistRoot) {
      const userData = JSON.parse(JSON.parse(persistRoot).user);
      admin = userData?.currentUser?.isAdmin || false;
    }
  } catch (error) {
    console.log("No user data found, showing login");
  }

  return (
    <Router>
      <NotificationContainer />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin ? (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        ) : (
          <Route path="/">
            <Login />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;

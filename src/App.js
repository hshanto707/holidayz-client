import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer"
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import SignIn from "./Pages/SignIn/SignIn";
import TourPage from "./Pages/TourPage/TourPage";
import Tours from "./Pages/Tours/Tours";
import AllBookings from "./Pages/AllBookedTours/AllBookings";
import MyBookedTours from './Pages/MyBookedTours/MyBookedTours';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/tours">
              <Tours></Tours>
            </Route>
            <Route path="/my-bookings">
              <MyBookedTours></MyBookedTours>
            </Route>
            <Route path="/all-bookings">
              <AllBookings></AllBookings>
            </Route>
            <Route path="/add-tour">
              <AllBookings></AllBookings>
            </Route>
            <PrivateRoute path="/tour/:id">
              <TourPage></TourPage>
            </PrivateRoute>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

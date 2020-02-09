import React, { useEffect } from "react";
import "./App.scss";
import Navbar from "./Layout/Navbar/Navbar";
import Homepage from "./Layout/Pages/Homepage/Homepage";
import AllProductPage from "./Layout/Pages/AllProductsPage/AllProductPage";
import SinglePage from "./Layout/Pages/SinglePage/SinglePage";
import SignupPage from "./Layout/Pages/SignupPage/SignupPage";
import SigninPage from "./Layout/Pages/SigninPage/SigninPage";
import ProfilePage from "./Layout/Pages/ProfilePage/ProfilePage";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, db } from "./firebase/firebase";
import { setCurrentUser } from "./redux/user/userActions";
import { connect } from "react-redux";
import { addBooking } from "./redux/user/userActions";

const App = ({ setCurrentUser, currentUser, addBooking }) => {
  // Create the user in Firestore
  const createUserDocument = user => {
    const { uid, email, displayName } = user;
    db.collection("users")
      .doc(uid)
      .get()
      .then(res => {
        if (!res.exists) {
          db.collection("users")
            .doc(uid)
            .set({
              email,
              displayName,
              createdAt: new Date(),
              uid
            })
            .then(() =>
              console.log(
                "User created successfully and store in firestore under id ",
                uid
              )
            );
        } else {
          return;
        }
      });
  };

  const fetchAllUserBooking = user => {
    db.collection("users")
      .doc(user.uid)
      .collection("bookings")
      .get()
      .then(res => {
        if (!res.empty) {
          res.docs.map(doc => {
            const booking = doc.data();
            addBooking(booking);
          });
        }
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        fetchAllUserBooking(user);
        createUserDocument(user);
      } else {
        setCurrentUser(user);
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homes" component={AllProductPage} />
        <Route exact path="/homes/:id" component={SinglePage} />
        <Route
          exact
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <SignupPage />)}
        />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SigninPage />)}
        />
        <Route
          exact
          path="/profile/:id"
          render={() => (currentUser ? <ProfilePage /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
};

// Redux section
const mapStateToProps = state => ({
  currentUser: state.user.currentUser.userInfo
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  addBooking: item => dispatch(addBooking(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

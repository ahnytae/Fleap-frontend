import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Daily from "./pages/daily/Daily";
import Detail from "./pages/detail/Detail";
import MyPage from "./pages/myPage/MyPage";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Payment from "./pages/payment/Payment";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import GlobalStyles from "./styles/GlobalStyles";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/daily" component={Daily} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
          <Footer />
        </Router>
        <GlobalStyles />
      </>
    );
  }
}

export default Routes;

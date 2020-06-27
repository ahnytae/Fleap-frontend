import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main/Main";
import Daily from "./pages/daily/Daily";
import Detail from "./pages/detail/Detail";
import Outdoor from "./pages/daily/activities/Outdoor";
import OutdoorMt from "./pages/daily/activities/OutdoorMt";
import OutdoorSurf from "./pages/daily/activities/OutdoorSurf";
import LearnMain from "./pages/daily/learn/LearnMain";
import MakeDiy from "./pages/daily/learn/MakeDiy";
import MakeDiyPot from "./pages/daily/learn/MakeDiyPot";
import MakeDiyCandle from "./pages/daily/learn/MakeDiyCandle";
import SignIn from "./pages/login/signIn/SignIn";
import SignUp from "./pages/login/signUp/SignUp";
import SignInEntryPage from "./pages/login/signIn/SignInEntryPage";
import SignUpEntryPage from "./pages/login/signUp/SignUpEntryPage";
import Payment from "./pages/payment/Payment";
import MyLikes from "./pages/myPage/MyLikes";
import MyFrip from "./pages/myPage/MyFrip";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/nav/SearchPage";
import GlobalStyles from "./styles/GlobalStyles";
import NowHotFrip from "./pages/main/NowHotFrip";
import Surfing from "./pages/main/SurfingPage";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/nowhotfrip" component={NowHotFrip} />
            <Route exact path="/surfing" component={Surfing} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/daily" component={Daily} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/mylikes" component={MyLikes} />
            <Route exact path="/myfrip" component={MyFrip} />
            <Route exact path="/payment" component={Payment} />
            {/* <Route exact path="/mypage" component={MyPage} /> */}
            <Route exact path="/signinentrypage" component={SignInEntryPage} />
            <Route exact path="/signupentrypage" component={SignUpEntryPage} />
            {/* <Route exact path="/singinentry" component={SignInEntryPage} /> */}
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/payment/:id" component={Payment} />
            <Route exact path="/frip/search/:id" component={SearchPage} />
            <Route exact path="/nowhot" component={NowHotFrip} />
          </Switch>
          <Footer />
        </Router>
        <GlobalStyles />
      </>
    );
  }
}

export default Routes;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "../../components/nav-bar/nav-bar.component";
// import FooterSmall from "components/Footers/FooterSmall.js";

import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${
                require("../../assets/img/register_bg_2.png").default
              })`,
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}

/** @format */

import React from "react";
import "./App.css";
// import { login, getUser } from "./services/user";
import { refreshAccessToken } from "./utils/axios";
import { routes } from "routes/routes";
import { RouterProvider } from "react-router-dom";

export default function App() {
  //Test API
  // login({
  //   operatorid: 'PHV@AT',
  //   password: 'Keochanh12@'
  // });

  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <button onClick={()=>refreshAccessToken()}>Refresh</button>
    //     <button onClick={()=>getUser()}>User List</button>
    //   </header>
    // </div>
    <RouterProvider router={routes} />
  );
}

/** @format */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { ROUTES } from "./data";
import { getAuthentication } from "services/localStorage";

export default function ResolveRoute() {
  const navigate = useNavigate();

  // const logout = useCallback(() => {
  // authStorage.removeToken()
  // navigate(LOGIN_PATH)
  // }, [navigate]);

  const authInfo = getAuthentication();

  useEffect(() => {
    if (authInfo) navigate(ROUTES.HOME);
    else navigate(ROUTES.LOGIN);
  }, [authInfo]);

  //   useEffect(() => {
  //     // const auth = authStorage.getToken()
  //     // if (!auth) {
  //     //   logout()
  //     // }
  //   }, [logout])

  return (
    <>
      <Outlet />
    </>
  );
}

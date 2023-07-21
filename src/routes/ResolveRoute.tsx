/** @format */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { ROUTES } from "./data";
import { getKey } from "services/localStorage";

export default function ResolveRoute() {
  const navigate = useNavigate();

  // const logout = useCallback(() => {
  //   // authStorage.removeToken()
  //   navigate(ROUTES.LOGIN);
  // }, [navigate]);

  //IF AUTH TOKEN NOT FOUND DIRECT TO LOGIN
  const authToken = getKey("authToken");
  useEffect(() => {
    if (authToken) navigate(ROUTES.HOME);
    else navigate(ROUTES.LOGIN);
  }, [authToken]);

  // useEffect(() => {
  //   const authToken = getKey("authToken");
  //   if (!authToken) {
  //     logout();
  //   }
  // }, [logout]);

  return (
    <>
      <Outlet />
    </>
  );
}

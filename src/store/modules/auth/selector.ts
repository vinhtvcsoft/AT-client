import { createSelector } from "reselect";
import { IAuthentication } from "./reduder";

const selector = (state: { auth: IAuthentication }) => state.auth;

const error = createSelector(selector, ({ error }: IAuthentication) => error);
const loading = createSelector(
  selector,
  ({ loading }: IAuthentication) => loading
);
const authToken = createSelector(
  selector,
  ({ authToken }: IAuthentication) => authToken
);
const refreshToken = createSelector(
  selector,
  ({ refreshToken }: IAuthentication) => refreshToken
);
const roleid = createSelector(
  selector,
  ({ roleid }: IAuthentication) => roleid
);

export { error, loading, authToken, refreshToken, roleid };

import { useDispatch, useSelector } from "react-redux";
import { loginNotifier } from "store/modules/auth/actions";
import { useRecaptcha } from "hooks/useRecaptcha";
import { setKey } from "services/localStorage";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes/data";

export function useUser() {
  const { getRecaptcha } = useRecaptcha();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (params) => {
    const captcha = await getRecaptcha("login");
    dispatch(
      loginNotifier(
        {
          operatorid: params.operatorid,
          password: params.password,
          captcha,
        },
        (rs) => {
          const data = rs.data;
          const { accessToken, refreshToken } = data;
          const user = {
            operatorid: data.operatorid,
            roleid: data.roleid,
          };
          setKey("authToken", accessToken);
          setKey("refreshToken", refreshToken);
          setKey("user", user);

          navigate(ROUTES.HOME);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  };

  return {
    login,
  };
}

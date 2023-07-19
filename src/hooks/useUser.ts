import { useDispatch, useSelector } from "react-redux";
import { loginNotifier } from "store/modules/auth/actions";
import { useRecaptcha } from "hooks/useRecaptcha";
import { setKey } from "services/localStorage";

export function useUser() {
  const { getRecaptcha } = useRecaptcha();
  const dispatch = useDispatch();

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
          setKey("auth", JSON.stringify(rs.data));
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

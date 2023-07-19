import { load } from "recaptcha-v3";

export function useRecaptcha() {
  const getRecaptcha = async (action: string) => {
    const recaptcha = await load(`${process.env.REACT_APP_SITE_KEY}`);
    const token = await recaptcha.execute(action);
    return token;
  };

  return { getRecaptcha };
}

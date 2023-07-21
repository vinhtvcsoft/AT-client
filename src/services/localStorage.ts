const getKey = (key: string) => {
  return localStorage.getItem(key);
};

const setKey = (key: string, value: any) => {
  typeof value === "object"
    ? localStorage.setItem(key, JSON.stringify(value))
    : localStorage.setItem(key, value);
};

const removeKey = (key: string) => {
  localStorage.removeItem(key);
};

const getAuthentication = () => {
  const authString = localStorage.getItem("auth");
  if (authString) {
    return JSON.parse(authString);
  } else {
    return null;
  }
};

export { getKey, setKey, removeKey, getAuthentication };

import { createStyles } from "antd-style";

const useStyles = createStyles(({ css }) => ({
  headerBar: {
    width: "100%",
    height: "60px",
    background: "#fff",
    padding: "0px",
    top: 0,
    borderBottom: "1px solid rgb(228 228 228 / 0%)",
    boxShadow:
      "0 2px 6px 0 rgb(218 218 253 / 65%), 0 0px 6px 0 rgb(206 206 238 / 54%)",
    WebkitBoxShadow:
      "0 2px 6px 0 rgb(218 218 253 / 65%), 0 0px 6px 0 rgb(206 206 238 / 54%)",
    zIndex: 10,
  },
}));

export default useStyles;

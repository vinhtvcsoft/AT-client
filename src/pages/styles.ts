import { createStyles } from "antd-style";

const useStyles = createStyles(() => ({
  pageWrapper: {
    height: "100%",
  },
  pageContent: {
    marginTop: "60px",
    padding: "1.5rem 1.5rem 0.7rem 1.5rem",
  },
  headerBar: {
    width: "100%",
    height: "60px",
    background: "#fff",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    position: "fixed",
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

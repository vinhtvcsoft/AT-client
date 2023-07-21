import { createStyles } from "antd-style";

const useStyles = createStyles(() => ({
  sidebarWrapper: {
    height: "100%",
    position: "fixed",
    top: 0,
    backgroundColor: "#fff !important",
    borderRight: "0 solid #e4e4e4",
    boxShadow:
      "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)!important",
    transition: "all .2s ease-out",
    zIndex: 15,
  },
  logoArea: {
    height: "60px",
    padding: "8px 15px",
    borderBottom: "1px solid #e4e4e4",
    zIndex: 5,
  },
}));

export default useStyles;

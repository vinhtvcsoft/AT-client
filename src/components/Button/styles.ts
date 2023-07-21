import { createStyles } from "antd-style";

const useStyles = createStyles(({ css }) => ({
  iconButton: css`
    border: none;
    box-shadow: none;
    border-radius: 25px;

    &:hover {
      background-color: #e6f4ff;
    }
  `,
}));

export default useStyles;

import React, { useState } from "react";
import { Button } from "antd";
import { IconButtons } from "../../asset/icons";
import createStyle from "./styles";

interface IIconButton {
  iconType: string;
  color?: string;
  sx?: React.CSSProperties;
}

const IConButton = (props: IIconButton) => {
  const { styles } = createStyle();
  const customStyle = props.sx;
  const ButtonIcon = IconButtons[props.iconType];
  const color = props.color || "#000";

  const [hoverColor, setHoverColor] = useState(color);

  return (
    <Button
      style={customStyle}
      className={styles.iconButton}
      onMouseOver={() => {
        setHoverColor("#1677ff");
      }}
      onMouseOut={() => {
        setHoverColor(color);
      }}
      icon={<ButtonIcon color={hoverColor} />}
    />
  );
};

export default IConButton;

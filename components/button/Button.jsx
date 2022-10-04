import { Button, StyleSheet } from "react-native";

const CustomButton = (props) => {
  const { children, ...buttonProps } = props;

  return <Button style={customButtonStyle.customButton} {...buttonProps} />;
};

const customButtonStyle = StyleSheet.create({
  customButton: {
    maxWidth: "160px",
  },
});

export default CustomButton;

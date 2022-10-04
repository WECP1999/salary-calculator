import { StyleSheet } from "react-native";

const customInputStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    width: "100%",
    maxWidth: 120,
    height: 36,
  },
  label: {
    marginRight: 16,
    color: "black",
  },
});

export default customInputStyle;

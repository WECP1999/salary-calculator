import { useController, useFormContext } from "react-hook-form";
import { TextInput, View, Text } from "react-native";
import customInputStyle from "../../../styles/forms/customInputStyle";

const CustomInput = (props) => {
  const formContext = useFormContext();
  const { label, name, rules, defaultValue, ...inputProps } = props;

  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }

  const { field } = useController({ name, rules, defaultValue });

  return (
    <View style={customInputStyle.inputContainer}>
      {label && <Text style={customInputStyle.label}>{label}: </Text>}
      <TextInput
      style={customInputStyle.input}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...inputProps}
      />
    </View>
  );
};
export default CustomInput;

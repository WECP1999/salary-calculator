import { StatusBar } from "expo-status-bar";
import { useReducer } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { View, Text } from "react-native";
import Button from "./components/button/Button";
import CustomInput from "./components/forms/customInput/CustomInput";
import detailStyle from "./styles/detailContainerStyle";
import styles from "./styles/mainStyle";
import roundToTwo from "./utils/functions/roundNumber";
import initialState from "./utils/initialState/salary";
import reducer, { ActionTypes } from "./utils/reducers/salaryReducer";

export default function App() {
  const { ...methods } = useForm();
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (data) => {
    const { baseSalary, name } = data;;
    dispatch({
      type: ActionTypes.SET_NAME,
      payload: {
        name,
      },
    });
    dispatch({
      type: ActionTypes.SET_BASE_SALARY,
      payload: {
        baseSalary,
      },
    });
    dispatch({
      type: ActionTypes.CALCULATE_AFP,
      payload: {
        baseSalary,
      },
    });
    dispatch({
      type: ActionTypes.CALCULATE_ISSS,
      payload: {
        baseSalary,
      },
    });
    dispatch({
      type: ActionTypes.CALCULATE_RENT,
      payload: {
        baseSalary,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Salary calculator</Text>
      </View>
      <View style={styles.formContainer}>
        <FormProvider {...methods}>
          <CustomInput
            name='name'
            label='Name'
            rules={{ required: "The name is required!" }}
          />
          <CustomInput
            name='baseSalary'
            label='Base salary'
            keyboardType='numeric'
            rules={{ required: "The base salary is required!" }}
          />
          <Button
            onPress={methods.handleSubmit(submitHandler)}
            title='Calculate'
          />
        </FormProvider>
      </View>
      <View style={detailStyle.container}>
        <View style={detailStyle.baseSalary}>
          <Text>Base salary: </Text>
          <Text>${state.baseSalary}</Text>
        </View>
        <View style={detailStyle.baseSalary}>
          <Text>Taxes</Text>
          <View style={detailStyle.taxesContainer}>
            <View style={detailStyle.taxes}>
              <Text>ISSS -3%: </Text>
              <Text>${roundToTwo(state.isss)}</Text>
            </View>
            <View style={detailStyle.taxes}>
              <Text>AFP -4%: </Text>
              <Text>${roundToTwo(state.afp)}</Text>
            </View>
            <View style={detailStyle.taxes}>
              <Text style={detailStyle.taxesHeader}>Renta -5%: </Text>
              <Text>${roundToTwo(state.rent)}</Text>
            </View>
          </View>
        </View>
        <View style={detailStyle.taxesContainer}>
          <View style={detailStyle.taxes}>
            <Text>Total: </Text>
            <Text>{roundToTwo(state.baseSalary - state.isss - state.afp - state.rent)}</Text>
          </View>
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

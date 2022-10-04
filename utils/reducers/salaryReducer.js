export const ActionTypes = Object.freeze({
  CALCULATE_AFP: "CALCULATE_AFP",
  CALCULATE_ISSS: "CALCULATE_ISSS",
  CALCULATE_RENT: "CALCULATE_RENT",
  SET_BASE_SALARY: "SET_BASE_SALARY",
  SET_NAME: "SET_NAME",
});

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.CALCULATE_AFP:
      return {
        ...state,
        afp: state.baseSalary * 0.03,
      };
    case ActionTypes.CALCULATE_ISSS:
      return {
        ...state,
        isss: state.baseSalary * 0.04,
      };
    case ActionTypes.CALCULATE_RENT:
      return {
        ...state,
        rent: state.baseSalary * 0.05,
      };
    case ActionTypes.SET_BASE_SALARY:
      return {
        ...state,
        baseSalary: action.payload.baseSalary,
      };
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      throw new Error();
  }
};

export default reducer;

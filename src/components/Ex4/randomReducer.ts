const ADD_RANDOM = "ADD_RANDOM";

export const addRandomNumber = (number: number) => ({
  type: ADD_RANDOM,
  payload: number,
});

const randomReducer = (
  state: number[] = [],
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case ADD_RANDOM:
      return [...state, action.payload!];
    default:
      return state;
  }
};

export default randomReducer;
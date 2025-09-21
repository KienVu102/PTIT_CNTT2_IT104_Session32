const initialState = "Rikkei Academy";

const CHANGE_COMPANY = "CHANGE_COMPANY";

export const changeCompany = () => ({
  type: CHANGE_COMPANY,
});

const companyReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return "RikkeiSoft";
    default:
      return state;
  }
};

export default companyReducer;
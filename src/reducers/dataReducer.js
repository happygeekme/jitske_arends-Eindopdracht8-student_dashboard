import data from "../data/mock_data.json";

const initialState = data.data;

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dataReducer;

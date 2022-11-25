/** Import Redux Toolkit **/
import {createSlice} from '@reduxjs/toolkit';

/** Import Models **/
import {Banks} from '../../models';

/** Import Initial State **/
export const BankEmptyState: Banks = {data: []};

const bankSlice = createSlice({
  name: 'banks',
  initialState: BankEmptyState,
  reducers: {
    setBanks(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const {setBanks} = bankSlice.actions;

export default bankSlice.reducer;

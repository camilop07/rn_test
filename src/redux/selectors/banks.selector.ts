import {RootState} from '../store';

export const selectBanks = (state: RootState) => state.bank.data;

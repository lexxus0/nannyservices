import { RootState } from "../../store";

export const selectNannies = (state: RootState) => state.nannies.nannies;

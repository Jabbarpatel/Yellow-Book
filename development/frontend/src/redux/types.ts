import { DECREAMENT, INCREAMENT } from "./actions";

export type Actions = {
  type: typeof INCREAMENT | typeof DECREAMENT;
  payload?: any;
};

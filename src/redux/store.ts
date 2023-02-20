import { createStore } from "redux";
import { PetTypes } from "../components/Home";

export interface stateTypes {
  pets: PetTypes[];
  loading: boolean;
}
//inital state
const INIT_STATE = {
  pets: [],
  loading: true,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    //setter reducer for pets
    case "SET_PETS":
      return { ...state, pets: action.payload, loading: false };

    case "TEST":
      return { ...state, test: action.test };

    case "VENDOS EMRIN":
      return { ...state, emri: action.emri };

    default:
      return state;
  }
};

export const store = createStore(reducer);

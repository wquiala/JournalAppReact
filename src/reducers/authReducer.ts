import { type State, type Action, Auth } from '../types/types';

export const initialState = {
  uid: 0,
  name: '',
};

export const authReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case Auth.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
      };
    case Auth.logout:
      return {
        uid: 0,
        name: '',
      };

    default:
      return state;
  }
};

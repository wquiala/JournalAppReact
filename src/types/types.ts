export const type = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',
};

export type Action =
  | { type: Auth.login; payload: { uid: number; name: string } }
  | { type: Auth.logout };

export interface State {
  uid: string;
  name: string;
}

export enum Auth {
  login = '[Auth] Login',
  logout = '[Auth] Logout',
}

export interface Login {
  email: string;
  password: string;
}

/* export type ActionNotas = */

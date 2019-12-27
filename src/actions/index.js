import { SIGN_IN, SIGN_OUT } from "./types"

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    // eslint-disable-next-line no-undef
    type: SIGN_OUT
  }
}
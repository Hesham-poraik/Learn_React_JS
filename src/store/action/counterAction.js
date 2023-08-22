import { DEC, INC } from "./types"

export const incAction = async(dispatch) => {
  return dispatch({
    type: INC
  })
}
export const decAction = async(dispatch) => {
  return dispatch({
    type: DEC
  })
}
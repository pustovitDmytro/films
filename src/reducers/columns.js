/**
 * Created by pusti on 06.08.2017.
 */
export default function getColumns(state = {}, action){
  switch(action.type){
    case "Columns":
      return {
        ...state,
        colums: action.payload
      }
    default:
      return state
  }
}
